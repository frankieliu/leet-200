prettier:
	npx prettier --single-quote --write --trailing-comma all index.js
frequencies:
	jq .data.companyTag.frequencies facebook-082020.json
depth3:
	jq 'reduce path(.[]?[]?[]?) as $path (.; setpath($path; {}))' facebook-082020.json
jq 'fromjson | .301' facebook.frequencies.json
