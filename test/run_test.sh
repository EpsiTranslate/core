mkdir ./tmp/
npm update -g browserify
browserify ./src/main.js -o ./extension.js
rm -rf ./tmp/