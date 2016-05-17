#!/bin/bash

webpack --config=webpack/webpack.config.js
sed -i '' -e 's/http:\/\/localhost:3000\///g' dist/index.html
