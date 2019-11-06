install: 
	npm install --save-dev
start:
	npx babel-node src/bin/brain-games.js
game:
	npx babel-node src/bin/brain-even.js
calc:
	npx babel-node src/bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint
