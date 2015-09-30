# 18 - Night of the Living Chessboard

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)

## Agenda

_"Chess is coming to get you...again!"_

## Assignment

```markdown
* **Yak-Shaving**
  * [ ] Create a _WIP Issue_ in the class repo
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a _WIP Branch_ in:
    * [ ] `TIY-Assignments` named `18--night-of-the-chessboard` from `master`
* [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.GitHub.io:journal-week-4`
      * `journal-week-4.md` or something creative
      * `tutorial-week-4.md` or something creative
    * `TIY-Assignments:18--night-of-the-chessboard`
      * `CheatSheets/GitHubAPI.md`
* in `TIY-Chessboard:chess-2.0`
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.GitHub.io` from `journal-week-4` into `master`
    * [ ] `TIY-Assignments` from `18--night-of-the-chessboard` into `master`
    * [ ] `TIY-Chessboard:chess-2.0`
* **Journal, Week 4**
  * [ ] Draft for _reflective_!
  * [ ] Draft for _tutorial_!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* **Reading APIs**
  * How can I use the Github API to...
    * get all the comments for a particular issue?
    * add a comment to an issue?
  * How can I use the jQuery API to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
  * How can I use the Lodash API to...
    * replace placeholders with values from an object?
    * repeat code for every item of an array
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

### Journal Week 4

You know the drill: reflective entry draft, tutorial entry draft, 2x :+1: for each. You've got this.

### Reading APIs

Here's your next batch of questions for the Github API, which you'll need for the last leg of our Github Revolution:

* How can I use the Github API to...
  * get all the comments for a particular issue?
  * add a comment to an issue?

And since libraries like jQuery and Lodash have feelings... I mean _APIs_, too, read through some of the documentation to answer these questions:

* How can I use [the jQuery API](http://api.jquery.com) to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
* How can I use [the Lodash API](http://lodash.com/docs/) to...
  * replace placeholders with values from an object?
  * repeat code for every item of an array?

### The Chessboard: It's Baaaaaack.

_"Chess won't stay dead."_

Time for a reboot. Chess won't defeat us! We're trying again, and this time, we'll win.

First, reset your `tests.js` and `main.js`. Wipe everything clean, except your 8x8 grid.

Use the **Starting Point** provided and [write tests with `mocha` and `chai` _in the browser_](http://mochajs.org/#running-mocha-in-the-browser) for the API described; put the `mocha` boilerplate in a _new_ file called `tests.html`. The tests should really have their own file, too; let's call it `js/tests.js`. What happens when you use `browser-sync` to view `tests.html`...? Maybe link some `<scripts>`, and don't forget the `chai`!

Start with _tested_ Model-layer code that represents the current state of the board and each move in the game. How can we navigate through the game, move by move? How could we back up a step? Start over? Skip to the finish?

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
