# 15 -- The Prin-Sass Bride

## Rituals (~1h 30m, 10:30am)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Lecture (~2h, 12:30pm)

Enough talking. Enough review. I'm building stuff. Happy friggin' birthday.

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_
    * link to PRs in:
      * [ ] `USERNAME.github.io`
      * [ ] `TIY-Assignments`
      * [ ] `TIY-Chessboard`
  * _WIP Branch_
    * [ ] `USERNAME.github.io:journal-week-3`
    * [ ] `TIY-Assignments:15--prin-sass-bride`
    * [ ] `TIY-Chessboard:15--crossed-wires`
  * _WIP Files_
    * in `USERNAME.github.io:journal-week-3`
      * `tutorial-week-3.md` or whatever
    * in `TIY-Assignments:15--prin-sass-bride`
      * `CheatSheets/HTML.md`
      * `NestedAccordion/`
        * `js/main.js`
      * `MultiColumnForm/`
        * `js/main.js`
      * `ViewModeSwitch/`
        * `js/*.js`
    * in `TIY-Chessboard:15--crossed-wires`
      * `js/`
        * `controllers.js`
        * `main.js` -- in case something breaks
        * `tests.js` -- Controllers are hard to test
      * `index.html` -- wire 'em up!
* [ ] **Journal, Week 3+ -- The Voyage Homework**
  * [ ] Finish up that tutorial journal!
  * [ ] Merge your existing PR but DON'T DELETE THE BRANCH!
  * [ ] Open a new PR into `master` to track what you do until Monday
* [ ] **Reading HTML**
  * [ ] come to the `<table>`
  * [ ] no one ever reads the `<caption>`
  * [ ] `<col>` waiting? I got `<colgroup>`!
  * [ ] you've got a nice `<tbody>`
  * [ ] but don't let it go to your `<thead>`
  * [ ] shot in the `<tfoot>`
  * [ ] `<tr>` coffee?
  * [ ] `<td>` or not `<td>`?
  * [ ] that would be `<th>`
* [ ] **Blueprints: jQuery me this, Batman?**
* [ ] **The Chessboard: Crossed Wires**
```

### Journal: Week 3+ -- The Voyage Homework

Great work on that reflective journal, move into the home stretch over the weekend and finish up your tutorial journal entry. The format from yesterday is still a valid guide but certainly not the _only way_ to write a tutorial. Don't worry about making something perfect; just make something _small_. A complete thought would be nice.

_Merge your existing PR_ but don't delete the branch. DON'T DELETE THE BRANCH! Keep working on that `journal-week-3` branch over the weekend and open a _new_ PR into `master` to track what you do until Monday.

### Reading HTML: If I had a table...

Over the weekend, familiarize yourself with that wacky bunch of HTML elements, the `<table>` family. They go everywhere together, they don't play nice with others, they even have their own set of CSS properties that no-one else can use. _AND THEY SHOULD NEVER BE USED FOR LAYOUT!_

"But wait", you say, "didn't we use them to grandiose effect on our chessboard grid?" Was that the _only_ way to produce that layout? What was the deciding factor for using `<table>` elements over `<ol>`...?

### Blueprints: jQuery me this, Batman?

Okay, time for the part you've all been dreading: wasn't there some JavaScript in those Blueprints originally? You bet there was, and now it's time to put that JavaScript right back where it belongs...

If you've already got working Vanilla JS for **View Mode Switch**, start translating it to jQuery; if not, finish out in pseudocode and start translating _that_ to jQuery. It's easier than it looks.

### The Chessboard: Crossed Wires

Use the provided **Starting Point** to create `js/controllers.js` and wire that into your `index.html` with `<script>` tags. This is where your Controllers will live. Wait, uh... what's a Controller again? That's the code that ties the Model -- the JavaScript from last night -- to the View -- the HTML from the night before that.

In the context of the browser, that's JavaScript _listening_ for user interaction _events_ and running a _function_ when that happens. You can use this pattern to help you identify the parts of a Controller:

1. What type of interaction am I interested in, i.e. what event type is my code listening for? A click? A form submission? Scrolling the page?
1. What is the element involved in the interaction, i.e. what do I attach the event listener to? A button? A form field? A link? The whole document?
1. What code do I need to execute when the event fires, i.e. what callback should I trigger? Just one function or a series of steps?
1. What should I do about the default behavior of the browser, i.e. should my code prevent the default behavior or prevent the event from bubbling?

Each of those steps corresponds to a piece of JavaScript code that we've mostly discussed in the context of Vanilla JS, but also translates to jQuery.

#### Starting Point

```javascript
(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  document.querySelector(SELECTOR)
    .addEventListener(TYPE, CALLBACK);
  // AKA
  jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }


  // Controller for "next move"...
  jQuery(/* your "next move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(/* your "previous move" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(/* your "fast-forward" button */).on(/* wat? */, function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery(/* any other buttons out there? */).on(/* dunno */, function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
```
