# 05--Shavers Of the Lost Yak

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things (~30m)
* **Parking Lot Topics** (~15m)
* **Homework Review** (~30m)
* **Monday Seat Changes

## Agenda

### Monday Review -- On Tuesday!
* The Wonderful World of JavaScript
* Git, GitHub, and CLI
* All About Functions
* Control Flow

### Data Types: Lists and Dictionaries

What are the 4 primitive types in JavaScript?
What if I need to store more than one value?
What is a list? How do I make one?
What is a dictionary? How do I make one?
How do I get values out?
How do I put new values in?
What can I put in a list or dictionary?
What are they good for?

## Assignment

```markdown
* [ ] **Journal, Week 1**
 * [ ] created branch in `USERNAME.github.io` named `journal-week-1`
  * [ ] created new file named `journal-week-1.md`
  * [ ] commited, pushed, and opened PR to `master`
  * [ ] added draft journal entry
* **GitHub-ing to Know You**
  * [ ] merged upstream additions from `TIY-Durham/Student-Roster:master`
  * [ ] updated your classmate's Markdown file and opened a PR to merge
  * [ ] thumbs up (:+1:) on your PR from your "Special Someone"
```

### Journal, Week 1

You've just completed your first week at The Iron Yard. You've learned a lot in a very short amount of time. Take some time tonight to review your notes and write them down. Use whatever format helps you get the ideas out: bulleted lists, stream of consciousness, retelling a story. Consider this a draft that you'll revise a few times throughout the week. Put this work in a branch called `journal-week-1` in your `USERNAME.github.io` repo. Don't forget to link to that PR in your _WIP Issue_! Here are some suggestions for topics:

* What do developers do? What principles of a developer have you learned?
* Explain the outside-in and inside-out technique we employed for TodoCLI.
* Describe the technique of using User Stories to write application specifications.
* Write something about the principle of Extreme Programming (XP) called YAGNI.

#### BEAST MODE

I promised I wouldn't _assign_ any more "Reading JavaScript", and I won't. If you're looking to get a leg up on the material for the week, though, start investigating [the DOM on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and add some documentation to your `about/javascript.md` file. Pay particular attention to the following:

* the `Window` object
  * properties like `location`, `document`, `history`
  * what kind of things are stored in those properties (warning: rabbit holes)
  * methods like `alert`, `confirm`, `reload`, `open` and `close`
* the `Location` object
  * all the properties here are important
  * what happens when you mess around with them?
* the `Document` object
  * properties like `head` and `body`
  * methods like
    * `getElementById` and `getElementsByClassName`
    * `querySelector` and `querySelectorAll`
    * `appendChild` and the `create*` family
    * `write` and `writeln`
* the `HTMLElement` type
  * properties like
    * `id` and `className`
    * `innerHTML` and `outerHTML`
    * `children`, `parent`, `nextSibling`, and `firstChild`
  * methods like
    * `addEventListener` and `dispatchEvent`
    * the `*Attribute` family
* the `HTMLCollection` and `NodeList` types
  * how they differ from `Array`
  * how they can be used _like_ an `Array`
  * the `item` method

### GitHubbing to Know You, Part 2

This week, you'll be randomly assigned classmates to interrogate and a question to ask. Then, you get to update _their_ Markdown file in the Student Roster and open a PR for the change. Chances are high (i.e. I rigged it) that the person you get _won't_ get assigned you... fun, right? You'll know all kinds of embarassing details about each other in no time!
