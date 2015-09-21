# 13 - The Pirates of Pen-Sass

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* CSS is Dead, Long Live Sass
  * Sass Demo via Sassmeister
  * Build Nested Accordion
* Compiling Sass via `node-sass`
  * Install `node-sass` _globally_ (you did that already, right?)
  * Rename `styles.css` to `styles.scss`...
  * Run `node-sass` on plain old CSS to get...?
  * Refactor ugly CSS into better Sass
* So who now is this Yeoman fellow?
  * Start with an empty directory...
  * Run `yo h5bp` and a few questions later...
  * `git status` and... Holy Boilerplate, Batman!
  * Digging in a little...
  * Now RTFM.

## Assignment

```markdown
* **Yak-Shaving**
* **Journal, Week 3**
  * [ ] Reflective Post
    * [ ] Rough Draft!
    * [ ] Peer Review x2!
    * [ ] Final Draft!
    * [ ] Peer Review x 2!
  * [ ] Tutorial Post
    * [ ] Rough Draft!
    * [ ] Peer Review x2!
    * [ ] Final Draft!
    * [ ] Peer Review x2!
* **Reading HTML**
  * [ ] List types galore!
    * [ ] `<ul>` and `<ol>` are easy...
    * [ ] WTF is a `<dl>` anyway?
    * [ ] Any others?
    * **BEAST MODE**-  `<forms>` in formation
    * **NIGHTMARE MODE** - Experiment away! Muahaha!
* **Still Working on the Blueprints**
* **Chessboard: Welcome Back to the Grid, User**
```

### Journal, Week 3

Why are you reading this? 2x journal entry! Chop chop! You should have a draft of both entries by tomorrow. Don't forget to have _at least_ two people read, critique, and approve.

### Reading the HTML: 'Cause the Lists Are Gonna List, List, List, List, List

### Reading HTML

Easy part: list elements. You know `<ul>` and `<ol>`, but are there others? Make sure you get the tags that go _inside_ the list elements _and_ any pertinent attributes (you know what those are now, right?) for those tags. 

Include _all_ the list-describing elements such as `<li>`, `<dt>` and their appropriate siblings and parents. There are only about 6 of them, if you don't count the _experimental_ tags like `<menu>`.

#### BEAST MODE

Include _all_ [the Interactive Form elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms), like `<form>`, `<input>`, `<label>` and the rest, noting the differences between `type` attribute values; don't omit `<fieldgroup>` or `<legend>`... They'll come up.

#### NIGHTMARE MODE


### Still Working on the Blueprints

Skitch the Reference Implementations with an eye for the HTML elements we'll need to represent the page, but don't peek at the Element Inspector unless you _really_ get stumped! Use those guidelines to start building a MFg Website version of each: _just semantic HTML!_

#### BEAST MODE 

Start writing Sass (don't worry if it's basically CSS) for your MFg Websites, based on your previous observations from CSS Week. Don't worry about matching the crazy class names or id's from the Reference Implementation. Make your own _semantic_ names instead!

#### NIGHTMARE MODE
Try _compiling_ your Sass to CSS with that `node-sass` trick. If you manage to generate CSS files, might as well link them into your `index.html` documents.

### Chessboard: Welcome _Back_ To the Grid, User

Build an 8 by 8 responsive grid of squares (equal height and width) using semantic HTML. Include rank (8-1) and file (a-h) markers above and beside the grid. Create a bank of buttons duplicated along the bottom and the top of the grid that include "start over", "go back", "play / pause", "go forward", "to the end" buttons, centered on the page.

#### BEAST MODE 

Place markers that represent the chess pieces on each square of the grid with black on top, white on the bottom. Doing so should not affect the proportions of the grid. The size of the pieces should adjust with the size of the viewport.

#### NIGHTMARE MODE 

Wire up the buttons to print their function to the console when clicked. The `play / pause` button should start printing `"next move"` to the console every second -- "playing" -- until clicked again --"paused". Clicking the button a third time resumes "playing".
