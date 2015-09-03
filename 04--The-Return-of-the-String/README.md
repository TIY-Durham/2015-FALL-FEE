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
* [ ] **Coding Katas**
  * [ ] Coding Kata: Rovarspraket
  * [ ] Coding Kata: ROT13
  * [ ] Coding Kata: 3s and 5s
  * [ ] Coding Kata: Even Fibonacci
* [ ] **TodoCLI (Part 2)**
* [ ] **Coding Kata: 3s and 5s**
  * **Yak Shaving**
    * [ ] Created _WIP Branch_ in `TIY-Assignments`
    * [ ] Created file in `TIY-Assignments` named `3s-and-5s.js`
    * [ ] Copy-pasta from **Starting Point** committed!
    * [ ] Pushed to GitHub!
    * [ ] Opened a PR!
  * **Target Practice**
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

### TodoCLI (Part 2)
