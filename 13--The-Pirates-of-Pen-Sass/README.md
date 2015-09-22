# 13 - The Pirates of Pen-Sass

## Rituals (~1h 30m, 10:30am)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

* CSS is Dead, Long Live Sass
  * Build Nested Accordion in [SassMeister](http://sassmeister.com)
    * Need copy? Use [your favorite ipsum](http://meettheipsums.com)
    * Start with a MF'g Website
    * Don't write CSS, write Sass!
  * What does _that_ produce?
* Compiling Sass via `node-sass`
  * Install `node-sass` _globally_ (you did that already, right?)
  * Grab some existing CSS... say, Vertical Timeline?
  * Rename `styles.css` to `styles.scss`...
  * Run `node-sass` on plain old CSS to get...?
  * Refactor ugly CSS into better Sass
* So who now is this Yeoman fellow?
  * Start with an empty directory...
  * `yo h5bp` and a few questions later...
  * `git status` and... Holy Boilerplate, Batman!
  * Digging in a little...
  * Now RTFM.

## Assignment

```markdown
* **Yak-Shaving**
 * [ ] Create a _WIP Issue_ in the class repo:
  * [ ] named `13 -- YOUR NAME` where `YOUR NAME` is, well... your name.
  * [ ] with this checklist as the description
* [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] in `TIY-Assignments` from `12--css-pirates` into `master`
* [ ] Create a _WIP Branch_ in:
  * [ ] `TIY-Assignments` named `13--pirates-of-pen-sass` from `master`
* [ ] Create or update the following _WIP Files_ in:
  * in `USERNAME.github.io:journal-week-3`
    * [ ] `journal-week-3.md` or another descriptive name
    * [ ] `tutorial-week-3.md` or another descriptive name
  * in `TIY-Assignments:13--pirates-of-pen-sass`
    * [ ] `CheatSheets/HTML.md`
    * [ ]
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-3` into `master`
    * [ ] `TIY-Assignments` from `13--pirates-of-pen-sass` into `master`
* **Journal, Week 3**
  * [ ] Reflective Post
    * [ ] Rough Draft!
    * [ ] Peer Review x2!
    * [ ] Reviewed Peers x 2!
  * [ ] Tutorial Post
    * **Rough Draft**
      * [ ] Intro: What is the problem, why do I care?
      * [ ] Step 1: Setting up, installing, etc...
      * [ ] Step 2: Here's the solution...
      * [ ] Step 3: What did it do?
      * [ ] Outro: Summarize the problem and solution; dem links tho!
    * [ ] Peer Review x2!
    * [ ] Reviewed Peers x2!
* **Reading HTML**
  * [ ] List types galore!
    * [ ] `<ul>` and `<ol>` are easy...
    * [ ] WTF is a `<dl>` anyway?
    * [ ] Any others?
  * **BEAST MODE** -- `<form>` up!
  * **NIGHTMARE MODE** -- Experiment away! Muahaha!
* **Blueprints: MF'g Website Edition**
  * **Nested Accordion**
    * [ ] Skitchin' for the HTML!
    * [ ] Looks like a list of some sort...
    * [ ] My favorite kind of copy is the copy I don't have to write...
    * [ ] Yo, dawg. I heard you like lists, so I put some lists inside your lists...
    * [ ] You didn't forget that those were just headings, right?
    * **BEAST MODE** -- Let the Sass Games begin!
    * **NIGHTMARE MODE** -- You mean you want it to _work?_
  * **Multi Column Form**
    * [ ] Skitch yo' bad self...
    * [ ] Lots of practice typing text fields...
    * [ ] Weren't those supposed to go into a column eventually?
    * [ ] Oh, look, here's a bunch more text fields...
    * [ ] Finally, a drop-down menu!
    * [ ] Y'know this form really should have a radio button or two.
    * [ ] No checkboxes, either? We can fix that...
    * [ ] Yeah, but there's still a bunch more text fields.
    * [ ] How about a `<button>` at the bottom?
    * **BEAST MODE** -- Now make it _Sassy!_
    * **NIGHTMARE MODE** -- Oh, yeah, that `node-sass` thing again...
* **Blueprints: Sassy Remix Edition**
  * **Vertical Timeline**
    * [ ] Extract a descendent selector?
    * [ ] Run the `node-sass` command, Luke!
    * [ ] Nest some `margin` or `padding` properties?
    * [ ] Try throwing some `&` on those `:hover` or `::before` selectors?
    * [ ] Check out your progress!
  * **View Mode Switch**
    * [ ] There's _gotta_ be a descendent selector in _here_ somewhere...
    * [ ] Feel that `node-sass` spirit!
    * [ ] Nesting properties feels a little... weird.
    * [ ] I still don't get the `&`...
    * [ ] Done, maybe?
* **Chessboard: Welcome Back to the Grid, User**
  * [ ] The journey of an 8x8 grid begins with a single square.
  * [ ] Not technically a grid, but maybe deserving of some labels?
  * [ ] How about some buttons to nowhere?
  * [ ] Time for some CSS. Square layout anyone?
  * [ ] So about that grid... 2x2 to start?
  * [ ] How hard could those colors be?
  * [ ] Step it up to 3x3? How about 4x4?
  * [ ] Should just be scaling up from there...
  * **BEAST MODE** -- What's a chessboard without pieces?
  * **NIGHTMARE MODE** -- Would you like to _play_ a game?
```

### Journal, Week 3

Why are you reading this? 2x journal entry! Chop chop! You should have a draft of both entries by tomorrow. Don't forget to have _at least_ two people read, critique, and approve.

### Reading the HTML: 'Cause the Lists Are Gonna List, List, List

Easy part: list elements. You know `<ul>` and `<ol>`, but are there others? Make sure you get the tags that go _inside_ the list elements _and_ any pertinent attributes (you know what those are now, right?) for those tags.

Include _all_ the list-describing elements such as `<li>`, `<dt>` and their appropriate siblings and parents. There are only about 6 of them, if you don't count the _experimental_ tags like `<menu>`.

#### BEAST MODE

Include _all_ [the Interactive Form elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms), like `<form>`, `<input>`, `<label>` and the rest, noting the differences between `type` attribute values; don't omit `<fieldgroup>` or `<legend>`... They'll come up.

#### NIGHTMARE MODE

There are lots of experimental elements like `<datalist>`, `<menu>`, `<dialog>`, etc. What are they? What do they do? Can you even use them?? Include compatibility notes for each element.

### Blueprints: MF'g Website Edition

Skitch the Reference Implementations for **Nested Accordion** and **Multi Column Form** with an eye for the HTML elements we'll need to represent the page, but don't peek at the Element Inspector unless you _really_ get stumped! Use those guidelines to start building a "MFg Website" version of each: _just semantic HTML!_

But, hey, you're gonna need copy, right? Why write all that copy yourself, when you can [pick your favorite ipsum](http://meettheipsums.com) instead? No one really liked that "Oat cake tootsie roll" anyway. Since you're giving the copy a little personal touch, why not put your own spin on the form, too? The fields have been left the same, but the `name`'s and `<label>`'s have been changed to protect the innocent.

#### BEAST MODE

Start writing Sass (don't worry if it's basically CSS) for your MF'g Websites based on your previous observations from last week. Don't worry about matching the crazy class names or id's from the Reference Implementation; make your own _semantic_ names instead!

#### NIGHTMARE MODE

Try _compiling_ your Sass to CSS with that `node-sass` trick. If you manage to generate CSS files, might as well link them into your `index.html` documents... BUT DON'T COMMIT THEM! Ask me why...

### Blueprints: Sassy Remix Edition

Start refactoring your CSS for **Vertical Timeline** and **View Mode Switch** into nested Sass rules. Run the command `node-sass --output-style expanded --output css/ scss/*.scss` to convert your Sass files back into CSS files in the `css/` directory. Remember to read the error messages when you get them...! If you linked your `*.scss` files into `index.html` last night, link the CSS files you just generated instead. Open your layouts with `browser-sync start --server --directory` and refactor away!

### Chessboard: Welcome _Back_ To the Grid, User

Build an 8 by 8 responsive grid of squares (equal height and width) using semantic HTML and some CSS. Include markers for rank ("8" through "1") and file ("a" through "h") above, below and on each side of the grid. The squares on the grid should alternate colors between dark and light colors, your discretion, but the upper-left and bottom-right squares should be light.

Create a bank of buttons beneath the grid that include "rewind", "step back", "play / pause", "step forward", and "fast forward" buttons, as on the Reference Implementation. Get as fancy as you want to with colors, button styles, and icons. Maybe it's even a good time to check out [Font Awesome](https://fortawesome.github.io/Font-Awesome/)? _Don't over-think this part!_

#### BEAST MODE

Place markers that represent the chess pieces on each square of the grid with "black" on top, "white" on the bottom. Doing so should not affect the proportions of the grid. The size of the pieces should adjust with the size of the viewport. You might need to do some research on Chess to recognize the names, abbreviations, and pictures of the pieces.

#### NIGHTMARE MODE

Wire up the buttons to print their "name" to the console when clicked, e.g. `"step forward"`. The "play / pause" button should start printing `"next move"` to the console every second -- "playing" -- until clicked again -- "paused". Clicking the button a third time should resume "playing". [The `setInterval` browser function](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) will help.
