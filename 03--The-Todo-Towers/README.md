# 03 -- The Todo Towers

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
* [ ] **Yak Shaving**
  * [ ] Open a new WIP Issue in the Class Repo:
    * [ ] Named `03 -- YOUR NAME` where `YOUR NAME` is _your full name_
    * [ ] Copy-and-paste this checklist into the description!
    * [ ] Check off your checkboxes as you complete tasks!
  * [ ] Create WIP Branches in:
    * [ ] `USERNAME.github.io` named `revisions`
    * [ ] `TIY-Assignments` named `03--the-todo-towers`
  * [ ] Create / update WIP files in:
    * `USERNAME.github.io`:
      * [ ] `the-right-mindset.md`
    * `TIY-Assignments`:
      * [ ] `Rovarspraket.js`
      * [ ] `CheckWriting.js`
      * [ ] `ReadingJavaScript/README.md`
  * [ ] Open Pull Requests in:
    * `USERNAME.github.io` _from_ `revisions` _into_ `master`
    * `TIY-Assignments` _from_ `03--the-todo-towers` _into_ `master` 
  * [ ] Add comments in your WIP Issue with links to your PRs!
* [ ] **The Right Mindset: Revisions**
  * [ ] Create a new _WIP Branch_ in `USERNAME.github.io` called `revisions`
  * [ ] Add commits to `the-right-mindset.md` in `revisions`
  * [ ] Open a PR from `revisions` to `master`
  * [ ] Add a link to your _open_ PR to your _WIP Issue_
* [ ] **Reading JavaScript**
  * **Yak Shaving**
    * [ ] Created a _WIP Branch_ in `TIY-Assignments`
    * [ ] Committed first changes to `ReadingJavaScript`
    * [ ] Opened PR into `master`
  * **Normal Mode**
    * [ ] `{ }` as block operator
    * [ ] `if`, `else`
    * [ ] `while`, `do-while`
  * **BEAST MODE**
    * [ ] `switch`
    * [ ] `for`, `for ( . . . in . . .)`
  * **NIGHTMARE MODE**
    * [ ] `try/catch`, `throw`
    * [ ] the `Exception` type
* [ ] **Coding Kata: Rovarspraket**
  * **Yak Shaving**
    * [ ] Created _WIP Branch_ in `TIY-Assignments`
    * [ ] Created file in `TIY-Assignments` called `Roaverspraket.js`
    * [ ] Copy-pasta from **Starting Point** committed
    * [ ] Pushed to GitHub!
    * [ ] Pull Request opened!
  * **Targets Aplenty**
    * [ ] Take it to the `max`...!
    * [ ] Multiball multiplier x3!
    * [ ] What is a vowel, anyway?
    * [ ] Do U even Rovarspraket?
* [ ] **Check Writing**
  * **`toEnglish`**
    * [ ] exists!
    * [ ] works for `0`...!
    * [ ] all the way to `5`
    * [ ] make `7`-up yours
    * [ ] why stop at `9` here?
    * [ ] `10` isn't any more interesting
    * [ ] up to `20` is the same, really
    * [ ] `21`, Blackjack!
    * [ ] `25` is `20` + `5`, y'know...
    * [ ] You made it to `30`... refactor?
  * **BEAST MODE** -- `toCheck`
    * [ ] baby checks: `0.00` becomes `"zero & 00/100s"`
    * [ ] little money: `1.23` becomes `"one & 23/100s"`
    * [ ] paper route: `12.34` becomes `"twelve & 34/100s"`
    * [ ] thirty something: `33.33` into `"thirty three & 33/100s"`
    * [ ] middle aged: `55.55` into `"fifty five & 55/100s"`
  * **NIGHTMARE MODE** -- more `toCheck`
    * [ ] literally hundreds: `123.45` into `"one hundred twenty three & 45/100s"`
    * [ ] honestly hard: `1234.56` into `"one thousand, two hundred thirty four & 56/100s"`
```

### The Right Mindset

Continue working on your essay, now progressing in the Revision phase. You should start to produce a Final Draft starting with the best parts of your Roughs. Edit and expand them with a series of revisions, which you save as commits in Github. You should keep your old Roughs and Outline around.

### Reading JavaScript: Control Flow

Using the MDN and your own research, describe [the control flow constructs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling): `{ }` as a block operator, `if` and `else` Then read and cover [the looping and iteration keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration): `for`, `while`, and `do/while`.

#### BEAST MODE

If you're looking for more of a challenge, read up on `switch` / `case` and the other `for`-type loops. Document them, as well, providing examples.

#### NIGHTMARE MODE

The error handling constructs -- `try` / `catch` / `finally` and `throw` -- can be a bit puzzling. Review them if you're still not satisfied with your understanding of Control Flow. Be prepared for some wackiness.

###  Rövarspråket

Did you ever wonder what Swedish people do with all their time, just waiting for the sun to come up for three months of the year? Well, word games are popular. Take [Rövarspråket](https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket), for example, where double every consonant in a word and stick an "O" between each... then amuse yourself trying to pronounce it. Swedes.

Here are a few functions that need some writing. The tests are supplied with good ole `console.assert` but feel free to refactor to `mocha` and `chai` if you're feeling **BEAST**-ly. Consider the early problems warm-ups, although they might come in handy when you get to Rövarspråket-ing things.

#### Starting Point

```javascript
/**
 * write a function `max` that takes two `Numbers` as arguments
 * and returns the largest of them. HINT: Use `if-else`...!
 */
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);

// Why would you do this?
console.assert(max("aaa",0) === 0);

// Okay, that's just silly...
console.assert(isNaN(max("aaa","bbb")));

/**
 * @param {Number} A to compare to B
 * @param {Number} B to compare to A
 * @return {Number} the greater of A or B
 */
function max(A, B){
    // YOUR CODE HERE
}

/**
 * Write a function `maxOfThree` that takes _three_
 * `Numbers` as arguments and returns the largest of them.
 */
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);

// Look, that's just mean...
console.assert(maxOfThree("aaa",0,1) === 1);

// Who's running this picture, anyway?
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * @param {Number} A
 * @param {Number} B
 * @param {Number} C
 * @return {Number} greatest of A, B, and C
 */
function maxOfThree(A, B, C){
    // YOUR CODE HERE
}

/**
 * Write a function `isVowel` that takes a character 
 * (i.e. a `String` of length 1) and returns a `Boolean`
 * indicating whether the input is a vowel or not.
 */

// What a cruel, cruel master you are...
console.assert(isVowel(0) === false);

console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// What should _this_ do?
// console.assert(isVowel("AEIOU") === FILL_ME_IN);

/**
 * @param {String} char of length 1
 * @return {Boolean} whether `char` is an English vowel
 */
function isVowel(char){
    // YOUR CODE HERE
}

/**
 * The `disemvowel` function combats the Internet
 * Trolls by handily removing all of the vowels from
 * their angry, hurtful comments. It's Super-Effective!
 *
 * @param {String} comment to disemvowel
 * @return {String} cmmnt dsmvwld
 */
function disemvowel(comment){
  // YOUR CODE HERE
}

// Shorter test cases might be appreciated...
console.assert(
  disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!"
);

/**
 * The function `rovarspraket` will translate text into 
 * a "rövarspråket", i.e. double every consonant and 
 * place an occurrence of "o" in between them.
 *
 * For example, `rovarspraket("this is fun")` should
 * return `"tothohisos isos fofunon"`
 *
 * @see https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 *
 * @param {String} text to translate into "rövarspråket"
 * @return {String} translation
 */
function rovarspraket(input){
    // YOUR CODE HERE
}

// Feel free to provide additional examples...
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")
```

### Check Writing

Like **String Calculator**, this kata comes in two parts. First, write a function `toEnglish` that, given a `Number` like `1`, produces the English number word that corresponds to it: `"one"`. Test this function for _at least_ `0` through `9` at first. The _goal_ of the kata is to write a function named `toCheck` that, given a decimal number like `123.45`, produces a `String` suitable for printing on a check: `"one hundred twenty three & 45/100s"`.

Use `mocha` and `chai` to write your tests, just like we did with `StringCalculator.js`... but look, they're already installed! Use the **Starting Point** from below, and this time let's try the `assert`-style functions from `chai`.

#### Starting Point

```javascript
var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)

test('toEnglish: `10` to `20`', function(){
  // use `assert` again...
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  // this is where `toEnglish` starts to get interesting...
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
  // start simply and refactor...
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
```
