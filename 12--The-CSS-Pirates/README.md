# 12 -- The CSS Pirates

## Rituals (~2h)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things** (~30m)
* **Retrospective** (~15m)
* **Parking Lot Topics** (~15m)

## Parking Lot Review (~1h)

* [What have we covered so far?](https://github.com/TIY-Durham/2015-FALL-FEE/wiki/Parking-Lot)
* [Where are we going next?](https://github.com/TIY-Durham/2015-FALL-FEE/wiki/Course-Timeline)


## Assignment

```markdown
* **Yak-Shaving**
  * Create a _WIP Issue_ in the class repo:
    * [ ] named `12 -- YOUR NAME`
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
    * [ ] in `USERNAME.github.io` from `journal-week-2` into `master`
    * [ ] in `TIY-Assignments` from `11--grid-bad-ugly` into `master`
    * [ ] in _your_ `StudentRoster` named `resolving-conflicts` from _your_ `master`
  * [ ] Create a _WIP Branch_ in:
    * [ ] `USERNAME.github.io` named `journal-week-3` from `master`
    * [ ] `TIY-Assignments` named `12--css-pirates` from `master`
  * [ ] Create or update the following _WIP Files_ in:
    * [ ] in `USERNAME.github.io` under branch `journal-week-3` (`USERNAME.github.io:journal-week-3`)
      * [ ] `journal-week-3.md` (or your already descriptive name)
      * [ ] `tutorial-week-3.md` (or your already descriptive name)
    * [ ] in `NestedAccordian`:
      * [ ] `index.html`
      * [ ] `css/styles.css`
      * [ ] `js/scripts.css`
    * [ ] in `MultiColumnForm`
      * [ ] `index.html`
      * [ ] `css/styles.css`
      * [ ] `js/scripts.css`
  * [ ] Create a GitHub repo named `TIY-Chessboard`
    * [ ] Include a basic `README.md` in it
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
      * [ ] `REPONAME` from `branch-name` into `master`
      * in folder `CheatSheets/`
        * [ ] `html.md`
* **Journal Week 3**
  * [ ] Rough draft - reflective 
  * [ ] Rough draft - tutorial 
* **Reading HTML***
  * [ ] Flag in the sand: `about/html.md`
  * [ ] Explain the structure of the tag
  * [ ] Non-word characters of the tag
  * [ ] Review and add tags from HTML5 Boilerplate `index.html`
    * [ ] `<html>`?
    * [ ] `<head>`?
    * [ ] `<body>`?
  * [ ] Categorized your tags as block-level or inline?
  * **BEAST MODE** - So. Many. Lists.
  * **NIGHTMARE MODE** - Forms! Glorious forms!
* **Install-Fest!**
  * [ ] Open `TIY-Assignments` in Terminal and `pwd`!
  * **Welcome to the Sassy Revolution!**
    * [ ] Install `node-sass` _globally_: `npm install --global node-sass`
    * [ ] What happened to your `package.json` file? Why?
    * [ ] Well, try with that `--save` flag, maybe?
    * [ ] Output of `which node-sass`...?
    * [ ] Explanation of `node-sass --help`...?
  * [ ] **Yeoman, Ho!**
    * [ ] More _global_ installs: `npm install --global yo generator-h5bp`
    * [ ] Still no changes to `package.json`...?
    * [ ] Output of `which yo`...?
    * [ ] Output of `which generator-h5bp`...?
    * [ ] What does that mean about 'yo'?
    * [ ] What does that mean about `generator-h5bp`?
    * [ ] Explanation of `yo --help`...?
 * **Blueprints: Shaving Private Ryan**
    * [ ] Goodbye, Blueprints...clear out `NestedAccordion` and `MultiColumnForm`
    * [ ] Now let's replace the html on `index.html` with [H5BP](https://html5boilerplate.com/)
    * [ ] Does it work (i.e. not break) with `browser-sync`?
 * **Yak-Shaving Chess**
 * **Git-Hubbing to Know You: Merge Conflicts**
```

### Journal, Week 3+!

This week, you should produce not one but _two_ journal entries. No worries, because you've got all those ideas backlogged in your `parking-lot.md`, right? (Right?) Yes, but to get _two_ entries out in a week, you'll either have to learn to write faster or learn to write more efficiently. Maybe you need to spend less time drafting or more time planning? Perhaps you should timebox yourself and just release whatever you've written at the end of the timebox? You could always just forget about proofreading and editing... [just write!](http://john.do/today/)

All of the topics from the last three weeks are still fair game. We want _one reflective post_ -- review an event, assignment, or lecture from the last three weeks that includes _lessons learned_ or bright/dim/blocker -- **AND** _one tutorial-style post_ -- explain _one small thing_ to me like we've never seen it before: a tool, trick, or technique you've learned how to use. _Include code!_

Your reflective journal should have a name like `journal-week-3.md`, and your tutorial entry should be `tutorial-week-3.md` or `how-to-do-something-small.md`.

### Reading HTML: Block vs Inline

Come on, you didn't think that I'd forget, did you? This week is all about writing HTML, so you'll need to use [the HTML section of MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) (or the same section in Dash) to research and document the tags you'll meet in `about/html.md` (no, I won't make you write it out). Remember, this is _your_ reference, first and foremost, but it's also a part of your portfolio! Hiring managers _love_ to see self-learning resources...!

First, create a new markdown file in your `CheatSheets` repo. Name this file `html.md`. This is where you will update your HTML cheatsheet.

For today, aim for the following targets:

*Identify block vs inline elements, permissible content, permissible parents, and important attributes. Additionally, you MUST include:
* `<html>`
* `<head>`
* `<body>`
* Explain the basic structure of a tag. Include a dissection of the non-word characters used (like brackets, etc), the words inside the brackets, why some tags have other tags in them and how to write them with and without contents.
* Next, dissect the tags used in `index.html` in the [HTML5 Boilerplate](http://html5boilerplate.com) project. Don't gloss over those weirdo ones like `<!DOCTYPE>` or `<!-- ... -->` with contents (check out [Conditional Comments on Wikipedia](http://en.m.wikipedia.org/wiki/Conditional_comment) for some help).
* Categorize the tags you document as block-level or inline tags and identify the type of content that is valid within them, if any. Include documentation for any included attributes (like `checked` for `<input type="checkbox">`).

_Don't Repeat Yourself, but be thorough!_ Expand your entries if you run across a different usage of a tag you've already documented. There are three attributes that apply universally to _all_ tags. As you identify them, move them into their own section at the top of your document.

BEAST MODE -- Include _all_ the list-describing elements such as `<li>`, `<dt>` and their appropriate siblings and parents.

NIGHTMARE MODE -- Include _all_ the `<form>` and `<input>` elements and appropriate children, noting the differences between `type` attribute values; don't omit `<fieldgroup>` or `<legend>`... They'll come up.

### Install-Fest!

### Blueprints: Shaving Private Ryan

You've written the JavaScript for the Blueprints, you've written the CSS for the Blueprints. You know what's coming next, right? The HTML, of course. 

Today, we're only going to focus on two of the Blueprints: Nested Accordion and Multi-Column Form.

#### Nested Accordion

Select all the content in the `index.html` file of `NestedAccordion` and delete it. That's right, wipe it clean. You should be left with a completely blank page. Terrifying! That's ok, we have [HTML5 Boilerplate](https://html5boilerplate.com/) to help us out.

#### Multi-Column Form

### Would You Like to Play a Game?: Yak-Shaving Chess

For our big project this week, we'll be building a chess-playing application... well, kind of. Start by creating a _new_ repo in Github called `TIY-Chessboard` with a basic `README.md` file and `CC0` license (or whatever, if you have opinions). Read [the doubly-indexed `Array` example from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_a_two-dimensional_array).

### GitHubbing to Know You: Merge Conflicts
