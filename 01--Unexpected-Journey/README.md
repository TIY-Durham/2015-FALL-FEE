# 00--Unexpected Journey

## Agenda
### Daily Rituals

* Standup Meeting
* Homework Review
* 3 Little Things
* DAILY QUIZ!
* Assignment Overview
* Turn-in Instructions

### Weekly Rituals

* Monday Seat Changes
* Monday Review
* Tools on Tuesday
* Coding Dojo Friday

### The Wonderful World of JavaScript
* What kinds of values can I represent in JavaScript?
* What can I do with those values?
* How do I keep track of those values?
* What is an Expression?
  * What is the simplest Expression?
  * What is an Operator? What does an Operator require?
  * What is the result of an Operation? Expression!
* What is a Statement?
  * What Operator do we use to denote a Statement?
  * What other Operators can separate Statements?
  * Can a Statement contain more than one Expression?
* What is the Rule of Sequential Operation?
* Are there exceptions to that rule?

### Reading, Writing, and Running JavaScript
* How can I _read_ JavaScript files?
  * in the Finder with QuickLook...
  * from the command line with `less <filename>`
  * in a code editor like Atom!
* How do I _write_ JavaScript files?
  * in the Finder... (boo)
  * from the command like with `touch <filename>`
  * back to that Atom...!
* How do I _run_ JavaScript?
  * in the browser?
  * from the command line with `node <filename>`
  * in the browser?
* What if I don't have a file yet? Use the `node` REPL!

## Assignment

```markdown
* [ ] **Yak Shaving**
 * [ ]  Open a new WIP Issue in the Class Repo:
   * [ ] Named `01 -- YOUR NAME` where `YOUR NAME` is _your full name_
   * [ ] Copy-and-paste this checklist into the description!
   * [ ] Check off your checkboxes as you complete tasks!
 * [ ] Create a new Repository named `USERNAME.github.io`
   * [ ] Use _your GitHub username_ for `USERNAME` (all lowercase)
   * [ ] Select the **CC0** License
   * [ ] Select "Create a README file"
 * [ ] Create a new Repository named `TIY-Assignments`
   * [ ] Select the **CC0** License
   * [ ] Select "Create a README file"
 * [ ] Create WIP Branches:
   * [ ] `yak-shaving` in `USERNAME.github.io`
   * [ ] `yak-shaving` in `TIY-Assignments`
 * [ ] Create WIP files:
   * [ ] in `USERNAME.github.io:yak-shaving`:
     * [ ] `the-right-mindset.md`
   * [ ] in `TIY-Assignments:yak-shaving`:
    * [ ] `ReadingJavaScript/` (a folder)
       * [ ] `README.md` (a file)
 * [ ] Open Pull Requests:
   * [ ] in `USERNAME.github.io` _from_ `yak-shaving` _into_ `master`
   * [ ] in `Student-Roster` _from_ **your** `master` _into_ `TIY-Durham:master`
 * [ ] Add comments in your WIP Issue with:
   * [ ] Link to your PR in `USERNAME.github.io`
   * [ ] Link to your `About JavaScript` wiki page in `USERNAME.github.io`
   * [ ] Link to your PR in `TIY-Durham/Student-Roster`
* [ ] **The Right Mindset**
   * [ ] Create a new repository named `USERNAME.github.io`
   * [ ] Create a page in the wiki named `The Right Mindset`
   * [ ] Link your wiki page to your WIP Issue
   * [ ] Research _The Growth Mindset_ by Carol Dweck
   * [ ] Document your sources in the wiki page (LINKS!)
   * [ ] Start writing!
     * Brainstorm topic ideas?
     * Write an Outline?
     * First Rough Draft
* [ ] **Reading JavaScript** -- Explain and provide examples for:
   * [ ] Basic Literal Types: 
     * [ ] `null`
     * [ ] `Boolean`
     * [ ] `Number`
     * [ ] `String`
   * [ ] Basic Operators:
     * [ ] Arithmetic
     * [ ] Comparison
     * [ ] Assignment
   * [ ] Built-in Constants: 
     * [ ] `undefined` 
     * [ ] `NaN`
     * [ ] `Infinity`
 * [ ] **GitHub-ing to Know You**
   * [ ] Fork the repo `TIY-Durham/Student-Roster` into your account
   * [ ] Copy the `TEMPLATE.md` file into a file called `USERNAME.md` 
   * [ ] Use your (lowercase) GitHub username for `USERNAME`
   * [ ] Update `USERNAME.md` with your full name, avatar image, and username
   * [ ] Make all three link to your GitHub profile with the power of Markdown!
```

### Journal, Week One: The Right Mindset

Create a new repository called `USERNAME.github.io` where `USERNAME` is your GitHub username, e.g. https://github.com/al-the-x/al-the-x.github.io/ Select the CC0 license and elect to create a `README` file for the repository. Create a page in the wiki for your repo called `The Right Mindset`.

Research _The Growth Mindsets_ by Dr. Carol Dweck, starting with the videos provided below. Document your sources on your wiki page, targeting a short (3 - 5 paragraphs) journal entry that includes _all_ of the following:

1. summarizes the two mindsets and characteristics of each
1. **either** describes a personal situation in which you experienced each mindset **or** describes which aspects of each mindset you recognize in yourself
1. explains how you will apply this understanding to your experience at The Iron Yard

If you need guidance, follow [the writing process](https://en.wikipedia.org/wiki/Writing_process): start by brainstorming some ideas about the topic and write an outline of your essay, no more than three levels deep, on your wiki page. Otherwise, you can start with your first Rough Draft -- very unorganized, stream of consciousness. 

This assignment will be due on Thursday, but we'll review everyone's work so far in class on Tuesday. _Be sure to link your wiki page in your WIP Issue!_

#### Videos for _The Growth Mindset_

* [_You can learn anything_ on Khan Academy](https://www.khanacademy.org/youcanlearnanything)
* [_The Power of Yet_ by Dr. Carol Dweck on TED](https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve)
* [_Carol Dweck, Growth Mindsets and Motivation_ on TED-ed](http://ed.ted.com/on/UA77FlTc)

### Reading JavaScript

Use [the Mozilla Development Network JavaScript Guide and Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to research and explain the following as if teaching a peer or writing a tutorial:

* Basic literal types: `null`, `Boolean`, `Number`, and `String`
* Special constants: `Inifinty`, `NaN`, and `undefined`
* Basic Operators:
  * Arithmetic, e.g. `+`, `-`, `/`
  * Comparison, e.g. `>`, `<=`
  * Assignment, e.g. `var`, `=`, `+=`
* _Include examples of each in use!_

```markdown
# About JavaScript

## Operators

### Arithmetic

#### `+` -- addition

Given two `Number` values, produces the sum of those values as another `Number`. For example:

    1 + 1 // yields 2
    2 + 2 // yields 4

. . .
```

### GitHubbing to Know You

There's [a repository in `TheIronYard--Durham` called `StudentRoster`](https://github.com/TIY-Durham/StudentRoster) that's lacking some very important information: _yours!_ Fork the repo and add a file that's a copy of the `TEMPLATE.md` file but named after your GitHub username, e.g. mine is `al-the-x.md`. _Just fill in your full name, linked to your profile page, and your avatar._ Open a Pull Request to `master` in the main repo. Put a comment in your _WIP Issue_ that links to your PR.
