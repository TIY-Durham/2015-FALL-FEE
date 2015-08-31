# Fellowship of the String

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

### Review

* What _primitive types_ exist in JavaScript?
* What is an Expression?
  * What is the simplest Expression?
  * What is an Operator? What does an Operator require?
  * What is the result of an Operation? Expression!
* What is a Statement?
  * What Operator do we use to denote a Statement?
  * What other Operators can separate Statements?
  * Can a Statement contain more than one Expression?
* What other kinds of Statements are there?

### All about Functions

* What is a Function?
  * How is a Function defined? How is a defined Function invoked?
  * What is the input? How does a function accept input?
  * What is the output? How does a function provide output?
  * What are side-effects? How does a function create side-effects?
* Do I always have to write my own Functions?
  * What functions are built-in to JavaScript?
  * Is there any other way to define or invoke a Function?
  * What is an anonymous function? What is it used for?
    * examples with `setTimeout`, `setInterval`
* How does this relate to Control Flow and the Rule of Sequential Operation?

### A little more about Control Flow

* How do I alter the Control Flow of a program?
  * How do I _draw_ a decision tree? How do I _write_ one?
  * What if I have more than one decision to make?
  * How do I draw that?
* What if I need to make the same decision again?

### Coding Kata: String Calculator

### Back to the `git` cave! ! (~30m)
  * What did we change? -- `git status`
  * No, really. -- `git diff`
  * Time to commit!
  * Pushing to a Remote

## Assignment

```markdown
* [ ] **The Right Mindset: Rought Draft**
   * [ ] Create a new branch in your `USERNAME.github.io` repo called `rough-draft`
   * [ ] In the `rough-draft` branch, write an initial outline in `the-right-mindset.md`
   * [ ] Open a Pull Request from `rough-draft` to `master`
   * [ ] Add a link to that PR in your WIP Issue
   * [ ] Add some rough drafts to `the-right-mindset.md` over a few commits
* [ ] **Reading JavaScript**
   * [ ] added 2 more entries
   * [ ] added 5 more entries
   * [ ] added 10 entries!
   * [ ] added 1 "weirdo" operator
   * [ ] added `function`
     * [ ] example function definition
     * [ ] example function invocation
* **JavaScript Koans**
  * **Yak Shaving**
    * [ ] Fork `TIY-Durham/javascript-koans` into your own account
    * [ ] Create a _WIP Branch_ called `2015-09-01`
    * [ ] Clone your forked repo locally into your `TIY` folder
    * [ ] Open your clone in `Terminal.app`
  * **Getting Started**
    * [ ] Run `npm install` inside the cloned repo; 
    * [ ] Run `npm start` inside the cloned repo
    * [ ] Add a comment to your _WIP Issue_ explaining what happened...
  * **Normal Mode**
    * [ ] completed: `AboutExpects`
    * [ ] completed: `AboutArrays`
    * [ ] completed: `AboutFunctions`
  * Did you open your PR yet?
  * **BEAST MODE**
    * [ ] completed: `AboutObjects`
    * [ ] completed: `AboutMutability`
    * [ ] completed: `AboutHigherOrderFunctions`
  * **NIGHTMARE MODE**
    * [ ] completed everything!
* **Coding Kata: Basic Calculator**
   * [ ] Created _WIP Branch_ in `TIY-Assignments`
   * [ ] Created `BasicCalculator.js` in _WIP Branch_
   * [ ] `add` exists!
   * checked `add` for... 
     * [ ] `0` added to `0`... that was easy
     * [ ] `0` added to `1` through `5`
     * [ ] `0` added to `6` through `9`
     * [ ] `1` added to... uh oh.
     * [ ] up to `5`...!
     * [ ] all the way to `9 + 9`...!
   * [ ] `minus` exists!
   * checked `minus` for...
     * [ ] `0` minus everything...
     * [ ] up to `5` minus `5`
     * [ ] `9` minus `9`
   * [ ] `times` exists!
   * [ ] `times` tested!
   * [ ] `divide` exists!
   * [ ] `divide` tested... except.
   * [ ] what is anything divided by `0`...?
   * [ ] **BEAST MODE** -- `pow` of `0` through `9`...?
   * [ ] **NIGHTMARE MODE** -- Smarter tests?
* **Coding Kata: String Calculator**
   * [ ] function `toNumber` exists!
   * [ ] `toNumber("zero")` works!
   * [ ] function `add` exists!
   * [ ] `add("zero", "zero")` works!
   * [ ] `"one"` plus `"one"` is `2`!
   * [ ] `"two"` plus `"two"` is `4`!
   * [ ] make `"seven"` up yours!
   * [ ] and `"nine"` is the end!
   * [ ] First pair!
   * [ ] Second pair!
   * [ ] Third pair!  
```

### The Right Mindset

The second stage of [the Writing Process](http://en.wikipedia.org/wiki/Writing_process) is [Drafting](http://en.wikipedia.org/wiki/Draft_document): writing a series of quick, rough attempts at cohesive thought with minimal editing. Through this process, the author revises her stance on the organization and presentation of the ideas in the piece, also revising her outline in the process. 

Your next step towards your Right Mindset journal is to produce your first Rough Draft, although you might produce many. Keep them all in the `the-right-mindset.md` file, adding commits for each as you go. In the next stage, you'll start revising your drafts into your final draft.

* Write _at least 1_ Rough Draft in `the-right-mindset.md`
* Keep _all_ drafts you author; commit _at least once_ for each.
* _Leave your wiki page!_

### Reading JavaScript

* add 10 more entries to about/javascript.md
* cover any operators that we used in class that seemed odd or confusing
* include the `typeof` operator
* include the `function` keyword,
  * provide examples of function definitions and invocations
  * identify the pieces of your examples with code comments
* incorporate feedback from Assignment 01

```markdown
## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... (you fill in the rest)

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by... (get the picture?)
```

### JavaScript Koans

A [koan](http://en.wikipedia.org/wiki/K%C5%8Dan) is "a story, dialogue, question, or statement which is used in Zen practice to ... test a student's progress." Many people have contributed to sets of koans for learning programming languages, as well. 

[The `javascript-koans` repo in `TIY-Durham`](https://github.com/TIY-Durham/javascript-koans) is based on [the JavaScript Koans maintained by David Laing](https://github.com/mrdavidlaing/javascript-koans). 

Fork that repo and create a _WIP Branch_ in your fork named `2015-09-01` (today's date) and commit your work to that branch. Push your branch to Github (`git push`) and open a Pull Request _from_ your branch _into_ the `master` branch of _your fork_... not the original. Didn't you know you could do that? Remember to link your open PR to your _WIP Issue_ in the class repo!

These exercises are designed to make you _think_ about the answers you're providing, not just fill in the blanks. You'll find that the answers are easy to derive based on the feedback the tests give you... can you explain _why_? As you solve the koans, explain the changes you made in a code comment below each test.

* fork https://github.com/TIY-Durham/javascript-koans
* clone _your fork_ locally into your `TIY` directory
* create and checkout a branch named `2015-09-01`
* open your clone in `Terminal.app` and run `npm install`; what happened?
* start a timer for 5 minutes; _commit when the time expires_
* complete `AboutExpects.js`, `AboutArrays.js`, `AboutFunctions.js`

#### BEAST MODE

In addition to **NORMAL MODE**, complete `AboutObjects.js`, `AboutMutability.js`, `AboutHigherOrderFunctions.js` as well, providing explanations for each.

#### NIGHTMARE MODE

Complete _all_ of the koans and provide explanations for each.

### Coding Katas

Test Driven Development (TDD) isn't just a good way to write software, it's also a great way to practice programming. Like doing lunges or playing scales and arpeggios, it doesn't _look_ productive, but what you learn along the way makes you better at it. Use these two practice problems to start on the path to TDD mastery. Use the `chai` library to make assertions about the functions you haven't written yet (red), write code that makes the assertions pass (green), and then look for opportunities to make your code better (refactor). At this point, focus on formatting and syntax improvements.

Work together in pairs for this assignment. Work on one computer at a time as pilot-copilot. Every 5 minutes, switch who is typing (but stay on the same computer) _ and commit your work_ with an explanation of _why_ you wrote the code you did.

After 6 swaps (~30m), take a break to review the code, commit, and switch computers. After you've both written code, talk about the decisions you've made together, then find another pair. Do this at least 3 times with different people.

#### Coding Kata: Basic Calculator

Before you start pairing, in your `TIY-Assignments` repo, create your _WIP Branch_ as in the **Yak Shaving** checklist. In that branch, create a file called `BasicCalculator.js` and add and commit it to the repo. Push your commits to GitHub and _immediately_ open a Pull Request (PR).

Write a set of functions -- `add`, `minus`, `times`, `divide` -- that, given two `Number` inputs, perform their corresponding mathematical operations and return the results. They should have no side effects. Test your functions using Assertion Tests, providing test cases for both operands between `0` and `9`.

#### Coding Kata: String Calculator

Remember how we tried to do `"one" + "one"` in the console? JavaScript doesn't know how to convert English to numbers... but we can teach it! Start with the following example and expand it, writing tests to cover each input and output. HINT: You'll get a lot of practice writing `if` statements. Don't copy-pasta the starting point, either: type it yourself. While you're at it, think about _why_ you're typing what you're typing.

```javascript
expect = require('chai').expect;

test('fromEnglish: "zero" through "nine"', function(){
  expect(fromEnglish).to.exist;
  expect(fromEnglish("zero")).to.equal(0);
  expect(fromEnglish("one")).to.equal(1);
  // more tests here, please...
}); // END test(fromEnglish)

/**
 * @param {String} word representing an English number
 * @return {Number} value corresponding to `word`
 */
function fromEnglish(word){
  // fill this in after writing tests...
} // END fromEnglish

test('plus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(plus).to.exist;
  expect(plus("zero", "zero")).to.equal(0);
  expect(plus("zero", "one")).to.equal(1); // change just one thing!
  expect(plus("zero", "two")).to.equal(FILL_ME_IN); // ha!
  // write more tests like those...
}); // END test(plus)

/**
 * @param {String} A representing an English number word
 * @param {String} B representing an English number word
 * @return {Number} the value of `A` added to `B`
**/

function plus(A, B){
  // write those tests first, please...
} // END plus

test('minus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(minus).to.exist;
  expect(minus("zero", "zero").to.equal(0);
  expect(minus("zero", "one").to.equal(-1);
  // etc, etc, etc
}); // END test(minus)

// What about multiplication? Division? Exponents?
```
