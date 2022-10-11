const { parse, toString, toArray } = require('@estilles/expression-parser');
const process = require('process');
const argument = process.argv.slice(2);
const expression = argument.toString();

if (argument.length === 1) {
  console.log(parse(expression));
  console.log(toString(parse(expression)));
  console.log(toArray(parse(expression)));
} else {
  console.log('This program only accepts a SINGLE argument');
}
