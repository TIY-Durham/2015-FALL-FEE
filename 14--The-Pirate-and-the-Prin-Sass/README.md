# 14 -- The Pirate and the Prin-Sass

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

* So who now is this [Yeoman](http://yeoman.io) fellow?
  * Start with an empty directory...
  * Run `yo h5bp` and a few questions later...
  * `git status` and... Holy Boilerplate, Batman!
  * Digging in a little...
  * Now [RTFM](https://github.com/h5bp/html5-boilerplate/blob/5.2.0/dist/doc/TOC.md)
* What a great starting point! Let's build something!
  * Convert CSS files to Sass files...
  * Setup our Sass-converter robot...
  * IGNORE ALL CSS FILES
  * Yak shaved; let's make a grid!

## Assignment

```markdown
* [ ] Create a _WIP Issue_ in the class repo:
  * [ ] named `14 -- YOUR NAME`
  * [ ] with this checklist as the description
* [ ] **MERGE ALL YOUR OPEN PRs!**
* [ ] Create a _WIP Branch_ in:
  * [ ] `TIY-Assignments` named `14--pirate-princess` from `master`
  * [ ] `TIY-Chessboard` named `14--show-me-your-moves` from `master`
* [ ] Create or update the following _WIP Files_ in:
  * in `USERNAME.github.io:journal-week-3`
    * `journal-week-3.md` or whatever -- finish this one!
    * `tutorial-week-3.md` or whatever -- keep working! Due MONDAY!
  * in `TIY-Assignments:14--pirate-princess`
    * in folder `NestedAccordion/`
    * in folder `MultiColumnForm/`
    * in folder `VerticalTimeline/`
    * in folder `ViewModeSwitch/`
  * in `TIY-Chessboard:14--show-me-your-moves`
    * MOVE:
      * [ ] `css/main.css` to `scss/main.scss`
      * [ ] `css/normalize.css` to `scss/normalize.scss`
    * CREATE:
      * [ ] `css/.gitignore` -- JUST IGNORE EVERYTHING
      * [ ] `js/tests.js` -- to give your tests a home...
      * [ ] `tests.html` -- for `mocha` in the browser!
    * UPDATE:
      * `js/main.js` -- from the **Starting Point**!
      * `index.html` -- Link a bunch of stuff!
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-3` into `master`
    * [ ] `TIY-Assignments` from `14--pirate-princess` into `master`
    * [ ] `TIY-Chessboard` from `14--show-me-your-moves` into `master`
* [ ] **Journal, Week 3+**
  * [ ] Final draft for reflective entry!
  * [ ] Rough draft for tutorial!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* [ ] **Reading HTML: Form up, Experiment 626**
  * [ ] `<form>`
  * [ ] `<input>`
  * [ ] `<label>`
  * [ ] `<fieldgroup>`
  * [ ] `<legend>`
  * [ ] Any others?
  * **BEAST MODE** - Experiment away!
  * **NIGHTMARE MODE** - Share the table with the `<table>` family
* [ ] **Blueprints: Sassing up a Storm**
  * [ ] **Nested Accordion**
    * [ ] Write the _simplest_ Sass definition that you can...
    * [ ] Ran your `.scss` files through `node-sass`
    * [ ] Gasp! It's CSS! And it works!
    * [ ] Now think about that positioning...
      * [ ] Let's get that `<main>` content centered...
      * [ ] Did someone order some indentation?
      * [ ] Those accordions still nest!!
    * [ ] And the text...
      * [ ] Where my [Google Fonts](https://google.com/fonts) at?
      * [ ] How big is that text? How small? Is all the text uniform? Or not??
    * [ ] Don't forget the colors!
      * [ ] The background color is...
      * [ ] Do U even `cornflowerblue`...? Maybe something else.
    * [ ] Anything else?
      * [ ] Those arrows, man. Those arrows.
      * [ ] And the _twitching_! Why? How? What?!
      * [ ] Just make one `"open"`, wouldya?
      * [ ] Maybe one at each level, too...
    * **BEAST MODE** -- jQuery ReMIX!
  * [ ] **Multi Column Form**
    * [ ] Write the _simplest_ Sass definition that you can...
    * [ ] Ran your `.scss` files through `node-sass`
    * [ ] Gasp! It's CSS! And it works!
    * [ ] Get into position...
      * [ ] That "mobile" view is centered...
      * [ ] Hey, the "tablet" view is centered, too! Kinda.
      * [ ] Is "desktop" _also_ centered?
      * [ ] Columns, columns everywhere...
      * [ ] Man, those `<input>`'s are _spaced out_!
    * [ ] Now for the text...
      * [ ] Font it! Size, color, weight, all of that...
      * [ ] Turns out `line-height` is also important.
    * [ ] And finally the colors.
      * [ ] Check out my killer `background`...
    * [ ] Anything else?
  * [ ] **Vertical Timeline**
    * [ ] What good is a refactor if it doesn't run?
    * [ ] Anything else to refactor?
  * [ ] **View Mode Switch**
    * [ ] No, seriously, didn't you run this already?
    * [ ] What about that nested property syntax?
  * **BEAST MODE** - Rewrite your JavaScript...with jQuery!!
  * **NIGHTMARE MODE** - Sass all the things!
* [ ] **The Chessboard: Show me your moves!**
  * Get your **Starting Point** ready...
    * [ ] Step 1: Provided JavaScript in `js/main.js`
    * [ ] Step 2: Provided HTML in `tests.html` (see below)
    * [ ] Step 3: Link `chai` in `tests.html`... CDN, anyone?
    * [ ] Step 4: `require` won't work here... just `mocha.it`!
    * [ ] Step 5: Shouldn't the tests have their own home?
  * Get to testing!
    * [ ] What kind of thing is `game.board`...? What does it do?
    * [ ] How about `game.reset`? What does it _return_? Any side-effects?
    * [ ] Resetting a board with no moves is lame, HOW U EVEN `game.applyMove`?
    * [ ] First move is free, next one costs $10.
    * [ ] Just calling `game.applyMove` is cheating; `game.next`...!
    * [ ] Now that you've got some moves, maybe `game.reset` is more interesting?
    * [ ] You can `game.next` but can you `game.prev`...?
    * [ ] Y'know, `game.end` is really a lot of `game.next`...
    * [ ] That `game.play`, tho... How U even `setInterval`?
  * [ ] Wipe the tracer bullets out before you push!
  * **BEAST MODE** - Write some pseudocode for Controllers and View Helpers. Make the ship sail!
  * **NIGHTMARE MODE** - Test those View Helpers!
```

### Journal, Week 3+

It's that time...time for final drafts! Or rather, your final draft for the _reflective_ entry. Continue to work on your tutorial entry -- due on Monday -- get it to a good rough draft state before tomorrow. You'll need the head start going into the weekend. Make sure you get and give those :+1:s!

### Reading HTML: Form up, Experiment 626!

It's BEAST MODE from yesterday, back to haunt you! Tonight, document _all_ [the Interactive Form elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms) -- `<form>`, `<input>`, `<label>` and the rest -- noting the differences between `type` attribute values; don't omit `<fieldgroup>` or `<legend>`... They'll come up.

#### BEAST MODE

There are lots of experimental elements like `<datalist>`, `<menu>`, `<dialog>`, etc. What are they? What do they do? Can you even use them?? Include compatibility notes for each element.

#### NIGHTMARE MODE

Oh, that crazy `<table>` family. You know how they are. Such a strange bunch, but we love 'em. Well, you would, too, if you knew more about them, so fix that! Don't forget those weirdos like `<col>` and `<colgroup>`.

### Blueprints: Sassing up a Storm!

Write the _simplest_ Sass definitions you can possibly write. They'll pretty much look exactly like CSS at first, so don't worry. Sanity checks are a good place to start. Run your Sass files through `node-sass` to convert them to CSS files, and link the CSS files into your `index.html` document. Check your sanity.

Congrats! You're compiling Sass to CSS! Now go to town styling your MFg Websites! Ignore the crazy abbreviations from the Reference Implementation and write your own _semantic_ class names for the elements you're styling. Make sure you compile your Sass _often_ to keep your CSS up-to-date... If only there was a way to make the robot do that...

Don't forget BEAST MODE from yesterday, though: compile the Sass refactors for **Vertical Timeline** and **View Mode Switch** and ensure they're functional. DON'T COMMIT THE CSS FILES!

#### BEAST MODE

Hey, didn't there used to be some JavaScript for all of these? Hmm, maybe we should write that again... using _jQuery_ of course. Start with pseudocode describing the three steps to building a Controller:

1. What Event should trigger my code?
1. What HTML element should listen for that Event?
1. What should happen when that Event triggers?

Then write some jQuery code, remembering that `jQuery` works like `querySelectorAll` and `jQuery.on` is functionally equivalent to `addEventListener` applied to every element in the collection. Try it!

#### NIGHTMARE MODE

Leave no selector un-nested! No WET spot un-DRY-ed! Sass this mother out! I can think of almost no reason that _any_ selector should start with a tag... maybe _end_ with one.

### The Chessboard: Show me your moves!

Time to make some moves happen! Start with _tested_ Model-layer code that represents the current state of the board and each move in the game. How can we navigate through the game, move by move? How could we back up a step? Start over? Skip to the finish?

Use the **Starting Point** provided and [write tests with `mocha` and `chai` _in the browser_](http://mochajs.org/#running-mocha-in-the-browser) for the API described; put the `mocha` boilerplate in a _new_ file called `tests.html`. The tests should really have their own file, too; let's call it `js/tests.js`. What happens when you use `browser-sync` to view `tests.html`...? Maybe link some `<scripts>`, and don't forget the `chai`!

Feel free to use `tracer` bullets and [interactive debugging](http://discover-devtools.codeschool.com/chapters/4) to help you understand the internal state of the application, but don't leave breakpoints or tracer bullets lying around in your submitted code, please. Always _start_ with "EnglishScript" -- pseudocode -- that explains your intent, so you have _something_ to submit.

#### BEAST MODE

The next step is wiring up that core game logic to the visual representation of the board in HTML. How can we update the HTML -- the View-layer -- when a change occurs in the Model-layer? How can we signal the Model-layer that an interactive event -- clicking a button -- has occurred in the View-layer? That sounds like View Helpers and Controllers to me!

Write pseudocode for some of the Controllers -- Event Listeners and their associated callbacks -- and View Helpers -- Functions that _just_ update the View. We'll need both of them to make this ship sail!

#### NIGHTMARE MODE

Can you write _tested code_ for those View Helpers? How would you even write tests for that? Hmm... Give it a swing and document what approach you took in code comments. You'll may run into some difficulty; don't bulldog it. Write up your experience and what challenges you encountered.

#### Starting Point

```javascript
(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    // TODO: Fill me in!
  ]; // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += board[rank][file] || ' |';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    function applyMove(from, to){
      // You should write something in here...
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
```
