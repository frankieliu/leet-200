SHELL=/bin/bash
.ONESHELL:

.PHONY: prettier 
 
prettier:
	npx prettier --single-quote --write --trailing-comma all index.js
frequencies:
	jq .data.companyTag.frequencies facebook-082020.json
depth3:
	jq 'reduce path(.[]?[]?[]?) as $path (.; setpath($path; {}))' facebook-082020.json
	jq 'fromjson | .301' facebook.frequencies.json

google-100120.html: google-100120.py google-100120.json
	source /opt/anaconda3/bin/activate py38
	python google-100120.py google-100120.json > google-100120.html
