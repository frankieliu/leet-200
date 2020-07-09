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
print(Counter([x['frequencyTimePeriod'] for x in questions]))
lastSixMonths = [x for x in questions if x['frequencyTimePeriod'] == 1]
print(Counter(x['status'] for x in lastSixMonths))
lastSixMonths_notAC = [x for x in lastSixMonths if x['status'] != 'ac']
print(len(lastSixMonths_notAC))
