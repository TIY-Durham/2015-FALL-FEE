# 19 -- Dawn of the Chessboard

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_
    * link to PRs in:
      * [ ] `USERNAME.github.io`
      * [ ] `TIY-Chessboard`
  * _WIP Branch_
    * [ ] `USERNAME.github.io:tutorial-week4`
    * [ ] `TIY-Chessboard:19--world-war-chess`
  * _WIP Files_
    * in `USERNAME.github.io:tutorial-week-4` or whatever
    * in `TIY-Chessboard:19--world-war-chess`
      * `js/`
        * `controllers.js`
        * `main.js` -- in case something breaks
        * `tests.js` -- Controllers are hard to test
      * `index.html` -- wire 'em up!
* [ ] Journal, Week 4
  * [ ] Tutorial written!
* [ ] **World War Chess**
```

### World War Chess

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
