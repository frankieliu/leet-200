import json
filename = "google-070820.json"
with open(filename,"r") as f:
    jobj = json.load(f)
print(jobj['data']['companyTag']['questions'][0])
#print(jobj['data']['companyTag']['name'])
#print(jobj['data']['companyTag']['translatedName'])
#print(jobj['data']['companyTag']['frequencies'])
#print(jobj['data']['companyTag']['__typename'])
#print(jobj['data']['companyTag'].keys())

questions = jobj['data']['companyTag']['questions']
print(len(questions))

from collections import Counter
# print(Counter([x['frequencyTimePeriod'] for x in questions]))
lastSixMonths = [x for x in questions if x['frequencyTimePeriod'] == 1]
# print(Counter(x['status'] for x in lastSixMonths))
lastSixMonths_notAC = [x for x in lastSixMonths if x['status'] != 'ac']
# print(len(lastSixMonths_notAC))
"""
{u'status': u'ac', u'questionId': u'734', u'stats': u'{"totalAccepted": "34K", "totalSubmission": "81K", "totalAcceptedRaw": 34026, "totalSubmissionRaw": 80982, "acRate": "42.0%"}', u'questionFrontendId': u'734', u'title': u'Sentence Similarity', u'titleSlug': u'sentence-similarity', u'frequencyTimePeriod': 2, u'__typename': u'QuestionNode', u'topicTags': [{u'translatedName': None, u'__typename': u'TopicTagNode', u'name': u'Hash Table', u'slug': u'hash-table'}], u'difficulty': u'Easy', u'isPaidOnly': True, u'translatedTitle': None}
"""
# "https://leetcode.com/problems/jump-game-ii"
#print(json.loads(lastSixMonths_notAC[0]['stats'])['acRate'])

def print_li():
    last = sorted(lastSixMonths_notAC,key=lambda x:
            -float(json.loads(x['stats'])['acRate'][:-1]))
    easy = [x for x in last if x['difficulty'] == 'Easy']
    medium = [x for x in last if x['difficulty'] == 'Medium']
    hard = [x for x in last if x['difficulty'] == 'Hard']
    leet_prefix = "https://leetcode.com/problems/"
    difficulty = [easy, medium, hard]
    for i in range(len(difficulty)):
        for j,el in enumerate(difficulty[i]):
            li_item = ("            "+
                    f"<li data-id=\"google_{i+1}_{j+1}\">"+
                    f"<a href=\"{leet_prefix}{el['titleSlug']}\">"+
                    f"{el['questionId']} {el['title']} "+
                    f"({json.loads(el['stats'])['acRate']})"+
                    "</a></li>")
            print(li_item)

print_li()
