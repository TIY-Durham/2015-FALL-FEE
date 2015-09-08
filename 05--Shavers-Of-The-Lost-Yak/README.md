# 05--Shavers Of the Lost Yak

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things** (~30m)
* **Parking Lot Topics** (~15m)
* **Homework Review** (~30m)
* **Monday Seat Changes**

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
* **Journal, Week 1**
  * [ ] created branch in `USERNAME.github.io` named `journal-week-1`
  * [ ] created new file named `journal-week-1.md`
  * [ ] commited, pushed, and opened PR to `master`
  * [ ] added draft journal entry
* **GitHub-ing to Know You**
  * [ ] merged upstream additions from `TIY-Durham/Student-Roster:master`
  * [ ] updated your classmate's Markdown file and opened a PR to merge
  * [ ] thumbs up (:+1:) on your PR from your "Special Someone"
* **API Gymnastics**
  * **Yak Shaving**
    * [ ] Create your _WIP Branch_! Maybe even check it out?
    * [ ] Create a folder named `APIGymnastics`
    * [ ] Copy-pasta **Starting Point** in `APIGymnastics/Etsy.js`
    * [ ] Hey, what about that data?
    * [ ] Seems like a good time to commit and push...
    * [ ] Y'know, why not open a PR, too?
  * **So many questions...**
    * [ ] What is the total number of items?
    * [ ] What is the average price of all the items?
    * [ ] What items cost between $14 and $18 dollars? What are their names?
    * [ ] What is the name and price of the only item with a `GBP` currency code?
    * [ ] What are the names of all the items made of wood?
    * [ ] What are the names of the items that are made of 8 or more materials?
    * [ ] How many items were made by their sellers?
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

### API Gymnastics: Etsy Products

Quite frequently in the world of programming, we sift through buckets of data looking for some important piece or maybe just some mathematically-derived facts. A little [Data Science](https://en.wikipedia.org/wiki/Data_science) goes a _long_ way in this business. Frequently, our starting data comes from a web service that speaks [a sort of truncated JavaScript syntax called JSON](https://en.wikipedia.org/wiki/JSON).

For example, check out [`items.json`](items.json), which contains some data taken from [the Etsy.com API](https://www.etsy.com/developers/documentation/getting_started/api_basics). We'll use the API directly _much later_ in the class, but for now, make use of [the built-in `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) to answer a few questions about the data. The value of this exercise isn't in figuring out the answer, it's about figuring out _how_ to get the answer.

* What is the total number of items?
* What is the average price of all the items?
* What items cost between $14 and $18 dollars? What are their names?
* What is the name and price of the only item with a `GBP` currency code?
* What are the names of all the items made of wood?
* What are the names of the items that are made of 8 or more materials?
* How many items were made by their sellers?

#### Starting Point -- `TIY-Assignments/APIGymnastics/Etsy.js`

```javascript
// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');

// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(FILL_ME_IN); // It's haunting me now...
});

test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
  function pricedBetween(items, min, max){
    // Just a suggestion, really...
  }

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
```

## Resources

* [TodoMVC](http://todomvc.com)
  * [starter template on Github](https://github.com/tastejs/todomvc-app-template) ([download](https://github.com/tastejs/todomvc-app-template/archive/master.zip))
  * [project specifications](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
* [The Document Object Model (DOM)](http://en.wikipedia.org/wiki/Document_Object_Model)
  * [_Web APIs: Document Object Model_ on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  * [_Interactive Web Pages with JavaScript_ on Team Treehouse](http://teamtreehouse.com/library/interactive-web-pages-with-javascript)
  * [_Try jQuery_ on Code School](https://www.codeschool.com/courses/try-jquery)
* [_Blueprints_ articles on Tympanus.net](http://tympanus.net/codrops/category/blueprints/)
