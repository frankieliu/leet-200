import json
from collections import Counter
import sys

def json_read(filename):
    with open(filename,"r") as f:
        jobj = json.load(f)
    #print(jobj['data']['companyTag']['questions'][0])
    #print(jobj['data']['companyTag']['name'])
    #print(jobj['data']['companyTag']['translatedName'])
    #print(jobj['data']['companyTag']['frequencies'])
    #print(jobj['data']['companyTag']['__typename'])
    #print(jobj['data']['companyTag'].keys())
    return jobj

def get_frequencies(jobj):
    """
    jq .data.companyTag.frequencies facebook-082020.json 
    {\"621\": [23, 48, 107, 254,
               0.25865309467417547, 0.8266471849344824,
               1.9999375120615706, 3.5556063494996306]
    """
    return json.loads(jobj['data']['companyTag']['frequencies'])

def get_questions(jobj):
    """
    {
    u'status': u'ac',
    u'questionId': u'734',
    u'stats': u'{
        "totalAccepted": "34K",
        "totalSubmission": "81K",
        "totalAcceptedRaw": 34026,
        "totalSubmissionRaw": 80982,
        "acRate": "42.0%"}',
    u'questionFrontendId': u'734',
    u'title': u'Sentence Similarity',
    u'titleSlug': u'sentence-similarity',
    u'frequencyTimePeriod': 2,
    u'__typename': u'QuestionNode',
    u'topicTags': [{u'translatedName': None,
        u'__typename': u'TopicTagNode',
        u'name': u'Hash Table',
        u'slug': u'hash-table'}],
    u'difficulty': u'Easy',
    u'isPaidOnly': True,
    u'translatedTitle': None
    }
    """
    return jobj['data']['companyTag']['questions']

def filter_questions(questions):
    # print(len(questions))
    # print(Counter([x['frequencyTimePeriod'] for x in questions]))
    lastSixMonths = [x for x in questions if x['frequencyTimePeriod'] == 1]
    # print(Counter(x['status'] for x in lastSixMonths))
    lastSixMonths_notAC = [x for x in lastSixMonths if x['status'] != 'ac']
    # print(len(lastSixMonths_notAC))
    # "https://leetcode.com/problems/jump-game-ii"
    # print(json.loads(lastSixMonths_notAC[0]['stats'])['acRate'])
    return lastSixMonths_notAC

def print_li(lastSixMonths_notAC,tag):
    last = sorted(lastSixMonths_notAC,key=lambda x:
            -float(json.loads(x['stats'])['acRate'][:-1]))
    easy = [x for x in last if x['difficulty'] == 'Easy']
    medium = [x for x in last if x['difficulty'] == 'Medium']
    hard = [x for x in last if x['difficulty'] == 'Hard']
    leet_prefix = "https://leetcode.com/problems/"
    difficulty = [easy, medium, hard]
   
    # creating headers
    lvl_headers = []
    lvls = ["Easy","Medium","Hard"]
    for i,lvl in enumerate(lvls):
        lvl_headers.append(
                f"<h3 id=\"{tag}{lvl}\">"+
                f"<a href=\"#{tag}{lvl}_col\" "+
                f"data-toggle=\"collapse\" "+
                f"class=\"btn btn-primary btn-collapse btn-sm\"></a>"+
                f"<a href=\"http://darksouls3.wiki.fextralife.com/Helms\">"
                f"{lvl}</a> "+
                f"<span id=\"{tag}_totals_{i}\"></span></h3>\n"+
                f"<ul id=\"{tag}{lvl}_col\" class=\"collapse in\">")

    for i in range(len(difficulty)):
        print(lvl_headers[i])
        for j,el in enumerate(difficulty[i]):
            li_item = (""+
                    f"<li data-id=\"{tag}_{i+1}_{j+1}\">"+
                    f"<a href=\"{leet_prefix}{el['titleSlug']}\">"+
                    f"{el['questionId']} {el['title']} "+
                    f"({json.loads(el['stats'])['acRate']})"+
                    "</a></li>")
            print(li_item)
        print("</ul>\n")

def print_tab(tag,Tag,title):
    print(  " "*12+
            f"<a href=\"#tab{Tag}\" data-toggle=\"tab\" "+
            f"data-target=\"#tab{Tag}\">{title}</a>"
            )

def print_list_header(tag,Tag,title):
    print(f"<!-- ---------------- {tag} ----------------- BEGIN -->")
    print(f"<div class=\"tab-pane active\" id=\"tab{Tag}\">")
    print(f"<h2>{title} Checklists<span id=\"{tag}_overall_total\"></span></h2>")
    print(f"<ul class=\"table_of_contents\">")
    print(
            f"<li><a href=\"#{Tag}Easy\">Easy</a> "+
            f"<span id=\"{tag}_nav_totals_1\"></span></li>")
    print(
            f"<li><a href=\"#{Tag}Medium\">Medium</a> "+
            f"<span id=\"{tag}_nav_totals_2\"></span></li>")
    print(
            f"<li><a href=\"#{Tag}Hard\">Hard</a> "+
            f"<span id=\"{tag}_nav_totals_3\"></span></li>")
    print("</ul>\n")
    print("<div class=\"form-group\">")
    print(
            f"<input type=\"search\" id=\"{tag}_search\" "+
            f"class=\"form-control\" placeholder=\"Start typing to filter results...\" />")
    print("</div>\n")
    print(f"<div id=\"{tag}_list\">")

def print_list_end(tag):
    print("</div> <!-- list -->")
    print("</div> <!-- tabpane -->")
    print(f"<!-- ---------------- {tag} ----------------- END -->\n")

def gen_tag(filename):
    i = filename.find("-")
    company = filename[0:i]
    i += 1
    month= ['Jan','Feb','Mar','Apr','May','Jun',
            'Jul','Aug','Sep','Oct','Nov','Dec']
    date = month[int(filename[i:i+2])-1] + " "
    i += 2
    date += str(filename[i:i+2]) + " "
    i += 2
    date += "20"+str(filename[i:i+2])
    tag = filename[0:filename.find(".")]
    Tag = tag.capitalize()
    title = company.capitalize() + " " + date
    return tag, Tag, title

def main():
    filename = "facebook-100120.json"
    if len(sys.argv) >= 2:
        filename = sys.argv[1]
    jobj = json_read(filename)
    frequencies = get_frequencies(jobj)
    questions = get_questions(jobj)
    # print(len(questions))
    lastSix = filter_questions(questions)
    print(len(lastSix))
    tag, Tag, title = gen_tag(filename) 
    print(f"<!-- BEGIN CUT1 -->")
    print_tab(tag,Tag,title)    
    print(f"<!-- END CUT1 -->") 
    print(f"<!-- BEGIN CUT2 -->")
    print_list_header(tag,Tag,title)
    print_li(lastSix, tag)
    print_list_end(tag)
    print(f"<!-- END CUT2 -->") 

main()
