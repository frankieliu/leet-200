import json
from collections import Counter

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

def print_li(lastSixMonths_notAC, company):
    last = sorted(lastSixMonths_notAC,key=lambda x:
            -float(json.loads(x['stats'])['acRate'][:-1]))
    easy = [x for x in last if x['difficulty'] == 'Easy']
    medium = [x for x in last if x['difficulty'] == 'Medium']
    hard = [x for x in last if x['difficulty'] == 'Hard']
    leet_prefix = "https://leetcode.com/problems/"
    difficulty = [easy, medium, hard]
    for i in range(len(difficulty)):
        for j,el in enumerate(difficulty[i]):
            li_item = (""+
                    f"<li data-id=\"{company}_{i+1}_{j+1}\">"+
                    f"<a href=\"{leet_prefix}{el['titleSlug']}\">"+
                    f"{el['questionId']} {el['title']} "+
                    f"({json.loads(el['stats'])['acRate']})"+
                    "</a></li>")
            print(li_item)

def main():
    filename = "facebook-100120.json"
    jobj = json_read(filename)
    frequencies = get_frequencies(jobj)
    questions = get_questions(jobj)
    # print(len(questions))
    lastSix = filter_questions(questions)
    print(len(lastSix))
    print_li(lastSix, 'facebook100120')

main()

