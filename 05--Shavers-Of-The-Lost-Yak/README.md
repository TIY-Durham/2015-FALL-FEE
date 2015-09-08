# 05--Shavers Of the Lost Yak

## Rituals (~1h 15m)

* **Standup Meeting** (~15m) -- _Change Seats!_
* **Retrospective** (~30m)
* **Homework Review** (~30m)
* **Three Little Things** (~30m)
* [**Rear View Mirror**](https://github.com/TIY-Durham/2015-FALL-FEE/wiki/Parking-Lot) (~15m)
* **Parking Lot** (~1hr)
* **Short Lecture** (~30m)

## Agenda

### Monday Review -- On Tuesday!

* The Wonderful World of JavaScript
* Git, GitHub, and CLI
* All About Functions
* Control Flow

### Data Types: Lists and Dictionaries

* What are the 4 primitive types in JavaScript?
* What if I need to store more than one value?
* What is a list? How do I make one?
* What is a dictionary? How do I make one?
* How do I get values out?
* How do I put new values in?
* What can I put in a list or dictionary?
* What are they good for?

## Assignment

```markdown
* **Yak-Shaving**
  * Create a new _WIP Issue_ named `05 -- YOUR NAME` with:
    * [ ] link to PR in `USERNAME.github.io` from `journal-week-1` into `master`
    * [ ] link to PR in `StudentRoster` from `USERNAME:master` into `TIY-Durham:master`
    * [ ] link to PR in `TIY-Assignments` from `05--lost-yak` into `master`
  *  Create the following _WIP Branch_ in:
    * `USERNAME.github.io` named `journal-week-1`
    * `TIY-Assignments` named `05--lost-yak`
  * Create or update the following _WIP Files_ in:
    * `USERNAME.github.io`:
      * `journal-week-1.md`
    * `TIY-Assignments`
      * `ReadingJavaScript/`
        `README.md`
      * `NestedAccordion/` from Blueprints
      * `ViewModeSwitch/` from Blueprints
      * `MultiColumnForm/` from Blueprints
      * `TodoMVC/` from Project Template
* **Journal, Week 1**
  * [ ] **Journal, Week 1**
   * [ ] created branch in `USERNAME.github.io` named `journal-week-1`
   * [ ] created new file named `journal-week-1.md`
   * [ ] commited, pushed, and opened PR to `master`
   * [ ] added draft journal entry
* **Tools on Tuesday**
  * [ ] How do I use JavaScript inside the Browser?
    * `open -a Google\ Chrome scripts.js` :(
    * `open index.html` ... lame
  * [ ] Hello, `browser-sync`!
  * [ ] What can I do with JavaScript in the Browser?
    * jammin' in the JavaScript console
    * using JavaScript to select elements
    * inspecting element properties
  * [ ] Changing elements properties for fun and profit...
    * let's see what we can edit...
    * editing is easier than adding
    * adding elements is even harder
    * unless you cheat with `innerHTML`...
 * [ ] **Let's nest some accordions...**
   * start with some analysis
   * what's in an opening?
   * works for one `!==` works for all
   * looks like an `Array`...?
 * [ ] **What do you do with not-an-`Array`?**
   * check out `lodash`: `each`
   * yeah, it's big...
* **Making Blueprints**
  * [ ] Created branch in `TIY-Assignments` named `05--lost-yak`
  * [ ] Downloaded starter code (ZIP) for:
    * [ ] Nested Accordion
    * [ ] View Mode Switch
    * [ ] Responsive Multi-Column Form
  * [ ] Extracted starter code into folders:
    * [ ] `NestedAccordion`
    * [ ] `ViewModeSwitch`
    * [ ] `MultiColumnForm`
  * [ ] **BEAST MODE** -- Working code as-is!
* **GitHub-ing to Know You**
  * [ ] merged upstream additions from `TIY-Durham/Student-Roster:master`
  * [ ] updated your classmate's Markdown file and opened a PR to merge
  * [ ] thumbs up (:+1:) on your PR from your "Special Someone"
* [ ] **Hello, TodoMVC!**
  * [ ] Downloaded the [TodoMVC template](https://github.com/tastejs/todomvc-app-template) from GitHub (see instructions!)
  * [ ] Unzipped into `TIY-Assignments` as `TodoMVC`
  * [ ] Committed and pushed to _WIP Branch_
  * **BEAST MODE**
    * [ ] Followed the instructions in `README.md`
    * [ ] Well, it looks right... Does nothing!
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

You've just completed your first week at The Iron Yard. You've learned a lot in a very short amount of time. Take some time tonight to review your notes and write them down. Use whatever format helps you get the ideas out: bulleted lists, stream of consciousness, retelling a story. Consider this a draft that you'll revise a few times throughout the week. Put this work in a branch called journal-week-1 in your USERNAME.github.io repo. Don't forget to link to that PR in your WIP Issue! Here are some suggestions for topics:

* What do developers do? What principles of a developer have you learned?
* What is Pair Programming and what kinds of Pair Programming are there?
* What is Test-Driven Development?

#### Reading JavaScript 

Start investigating [the DOM on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and add some documentation to your "Reading JavaScript" file. Pay particular attention to the following:

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
 
### Making Blueprints

Some of your homework assignments for the week will be duplicating functionality based on a [reference implementation](http://en.wikipedia.org/wiki/Reference_implementation) provided in [a series of articles on Tympanus.net](http://tympanus.net/codrops/category/blueprints/). Since our focus this week is on _JavaScript in the Browser_ and not HTML and CSS (yet), we'll use these finished versions as a starting point for our exercises.

Download the code for [Nested Accordion](http://tympanus.net/codrops/2013/03/29/nested-accordion/), [View Mode Switch](http://tympanus.net/codrops/2013/07/01/view-mode-switch/), and [Responsive Multi-Column Form](http://tympanus.net/codrops/2013/06/06/responsive-multi-column-form/) as ZIP archives from GitHub. Extract those `.zip` files into folders, then move them into your `TIY-Assignments` working tree. Rename them `NestedAccordion`, `ViewModeSwitch` and `MultiColumnForm`.

Add and commit those to your _WIP Branch_... You _were_ using your _WIP Branch_, right?

Open the `index.html` files that you just extracted in a browser and make sure they work like the examples. Make a wiki page in your `TIY-Assignments` repo with notes for each example, explaining _as precisely as you can_ what each does.

#### Starting Point

````markdown
### Nested Accordion

* What does it do?
  * What interactive elements exist?
  * How do you interact with them?
  * What visual effects are produced by interacting?
* How does it do it?
  * What existing HTML elements are changed?
  * What new HTML elements are created?
  * What CSS styles are used to produce the effect?

### View Mode Switch

* What does it do?
  * What interactive elements exist?
  * How do you interact with them?
  * What visual effects are produced by interacting?
* How does it do it?
  * What existing HTML elements are changed?
  * What new HTML elements are created?
  * What CSS styles are used to produce the effect?

### Responsive Multi-Column Form

* What does it do?
  * What interactive elements exist?
  * How do you interact with them?
  * What visual effects are produced by interacting?
* How does it do it?
  * What existing HTML elements are changed?
  * What new HTML elements are created?
  * What CSS styles are used to produce the effect?
```

### Hello, TodoMVC!

This week, we'll build [TodoMVC](http://todomvc.com) with plain "vanilla" JavaScript in the browser. To get ready, you'll need to [download the starter template from GitHub as a ZIP archive](https://github.com/tastejs/todomvc-app-template/archive/master.zip). After you extract the archive, move the folder it creates into your `TIY-Assignments` repo and rename it `TodoMVC`. Commit and push the contents of that starter template to your _WIP Branch_. 

Then review the [application specifications](https://github.com/tastejs/todomvc/blob/master/app-spec.md) and examine some of the reference implementations, particularly [the Vanilla JS example](http://todomvc.com/examples/vanillajs). Ours will be significantly less complicated but functionally equivalent, so dig into the _functionality_ of the application: what does it do and how does it do it? 

_Make detailed notes about how the application functions as code comments in your `app.js` file._

#### BEAST MODE

If you open the `index.html` file from the starter template in a browser, it probably won't look like much. It certainly doesn't look like the examples, but it does, in fact, contain everything you need to start working. There's probably a `README` file lying around somewhere that can help you.


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
