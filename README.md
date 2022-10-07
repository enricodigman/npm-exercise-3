# Expression Parser Program
*****************************
## Table of contents
* [Introduction](#introduction)
* [Technology](#technology)
* [Usage](#usage)
* [Code Example with Expected Outputs](#code-example-with-expected-outputs)

## Introduction
This program accepts a single argument that parses an infix expression inputted by the user through the command line and returning it in a postfix notation that can either be displayed through a parsed expression object, string of tokens, or an array of tokens. Inputted infix expressions should be enclosed in quotation marks. 
	
## Technology
Program is created with:
* @estilles/expression-parser: 1.0.0

## Usage
To run the program, it is to be installed in an existing/new Node.js project locally through npm:
```
$ npm install @estilles/expression-parser

```
Importing it through using:

```
const { parse, resolve, toString, toArray } = require('@estilles/expression-parser')

```
Launching the program as Node.js process:

```
$ node index.js '<expression>'
```
## Code Example with Expected Outputs
```
parse('(A+B)*C-D')
```

Expected Output:
[
  { name: 'A', position: 2, value: NaN },
  { name: 'B', position: 4, value: NaN },
  {
    symbol: '+',
    pattern: /^\+/,
    precedence: 0,
    args: 2,
    calc: [Function: calc],
    position: 3
  },
  { name: 'C', position: 7, value: NaN },
  {
    symbol: '*',
    pattern: /^\*/,
    precedence: 1,
    args: 2,
    calc: [Function: calc],
    position: 6
  },
  { name: 'D', position: 9, value: NaN },
  {
    symbol: '-',
    pattern: /^\-/,
    precedence: 0,
    args: 2,
    calc: [Function: calc],
    position: 8
  }
]

```
toString(parse('(A+B)*C-D')
```

Expected Output: A B + C * D -

```
toArray(parse('(A+B)*C-D'))
```

Expected Output: 

[
  'A', 'B', '+',
  'C', '*', 'D',
  '-'
]
