install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-cals.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lintFix:
	npx eslint . --fix