# The Return of the String

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

### Control Flow: REDUX

* How do I alter the Control Flow of a program?
  * How do I _draw_ a decision tree? How do I _write_ one?
  * What if I have more than one decision to make?
  * How do I draw that?
* What if I need to make the same decision again?

### What is a Function: REDUX

* How do I write a Function? How do I use one?
* What are the 3 things a Function always has?
* Do I always have to write my own Functions?
  * What functions are built-in to JavaScript?
  * Is there any other way to define or invoke a Function?
  * What is an anonymous function? What is it used for?
    * examples with `setTimeout`, `setInterval`
* How does this relate to Control Flow and the Rule of Sequential Operation?

### Data Types: Lists and Dictionaries

* What are the 4 primitive types in JavaScript?
* What if I need to store more than one value?
  * What is a list? How do I make one?
  * What is a dictionary? How do I make one?
  * How do I get values out?
  * How do I put new values in?
  * What can I put in a list or dictionary?
* What are they good for?

#### String Calculator REFACTOR

## Assignment

```markdown
* **Reading JavaScript**
  * [ ] 2 more entries!
  * [ ] 5 more entries!
  * [ ] 10 more entries!
  * [ ] `Array` literal with examples
  * [ ] `length` with examples
  * [ ] 2 `Array.prototype` methods!
* **Yak Shaving**
    * [ ] Created _WIP Branch_ in `TIY-Assignments`
    * [ ] Created file in `TIY-Assignments` named `3s-and-5s.js`
    * [ ] Copy-pasta from **Starting Point** committed!
    * [ ] Pushed to GitHub!
    * [ ] Opened a PR!
 * **Coding Kata: 3s and 5s**
    * [ ] Got any 3s...?
      * [ ] below 10?
      * [ ] below 20?
      * [ ] below 50?
    * [ ] How about 5s...?
      * [ ] below 10?
      * [ ] below 20?
      * [ ] below 50?
    * Sum of 3s and 5s...
      * [ ] less than 10?
      * [ ] less than 20?
      * [ ] less than 50?
      * [ ] LESS THAN 1000!?
* [ ] **Coding Kata: Even Fibonacci Sums**
  * **Fibonacci _Sequence_ means `Array`, right?**
    * [ ] There are no Fibonacci's less than 0
    * [ ] That first term is hard.
    * [ ] Maybe the second one, too.
    * [ ] The next five terms are easy.
    * [ ] ALL THE FIBONACCIS ARE MINE TO CONTROL!
  * **Now about those _even_ terms...**
    * [ ] An empty list contains no `evens`
    * [ ] There is no number of `1`'s that are even...
    * [ ] Y'know what _is_ even?
    * [ ] Y'know what _ain't_ even?
    * [ ] Do you write your _own_ test cases? Whoah.
  * **Adding things seems easy enough...**
    * [ ] Adding _nothing_ is even easier!
    * [ ] So adding `1` thing to nothing isn't so bad...
    * [ ] Startin' to get complicated...
    * [ ] Maybe you wanna... Oh, look you did!
  * **Chain chain chain!**
    * [ ] What's the sum of the even terms in the smallest Fibonacci sequence?
    * [ ] Do you know of any _other_ sequences?
  * [ ] **BEAST MODE** -- 4 million. Go.
```

### Reading JavaScript: Arrays

Add 10 more entries to your tutorial tonight, specifically including the `Array` type, our first container. Include [the literal `Array` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), an explanation of [the "magic" `length` property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length), and at least [2 `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) that are _not experimental_ (i.e. standard). Use the format below to describe the methods:

```markdown
## `Array`

. . .

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)

#### [`Array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Examples

. . .
```

### Coding Kata: Rovarspraket

### Coding Kata: ROT13

### Coding Kata: 3s and 5s

[Project Euler](https://projecteuler.net) (pronounced "oiler") has a plethora of problems to solve, many of which requiring all that looping and branching logic we've been chatting about. One problem -- Problem Number 1, in fact -- goes something like this:

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> 
> Find the sum of all the multiples of 3 or 5 below 1000.

Woah. That was a jump.

This is an exercise in breaking down bigger problems into smaller problems that can more easily be tackled. Pairing up on those problems can also be helpful, so use our pairing rules to guide your time.

#### Starting Point

```javascript
var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('getting a list of multiples of 3', function(){
  // Now what should go in here?
}); // END test 3s
```

### Coding Kata: Even Fibonacci

### Only Even Fibonacci Numbers Can Sum

Here's another gem from [Project Euler](https://projecteuler.net), this time dealing with [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number):

> Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
> 
> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
> 
> By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, find the sum of the even-valued terms.
> - [Project Euler No. 2](https://projecteuler.net/problem=2)

You read that right: _4 million_. That Euler fella don't play. You'll want to break this problem down a little, I think. In the **Starting Point** below, I've given you some smaller tests and a few infuriating typos for you to fix. Have fun!

#### Starting Point

```javascript
var text = require('mocha').it,
  expects = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens([ ]).to.deep.equal([ ]);
  expect(evens([ 1 ]).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ]).to.deep.equal([ ]);
  expect(evens([ 2 ]).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ]).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){ 
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
```
