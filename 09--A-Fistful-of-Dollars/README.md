# 09 -- A Fistful of Dollars

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* The Case For and Against jQuery
  * Why does jQuery even exist?
  * jQuery demo via CodePen
  * Replace jQuery with Zepto
* How do I even jQuery?
  * Link jQuery via CDN (a la CodePen)
  * Refactor Nested Accordion to jQuery / Zepto
* How do I analyze a reference implementation?
  * First [take a picture](http://mrcoles.com/full-page-screen-capture-chrome-extension/), it'll last longer...
  * Annotate visually with [Skitch](https://evernote.com/skitch/)!
  * Start scribbling!
* What can I draw? What _should_ I draw?
  * Boxes correspond to box model elements...
  * Use arrows or call outs to identify fonts, colors, and spacing...
  * Export and save your annotations to your project!
  * Repeat as necessary for more details.

## Assignment

```markdown
* **Yak Shaving**
  * [ ] Create a new _WIP Issue_ in the class repo
    * [ ] named `09 -- YOUR NAME`
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a new _WIP Branch_ in:
    * [ ] `TIY-Assignments` named `09--fistful-of-dollars` from `master`
  * [ ] Create or update the following _WIP Files_:
    * [ ] in `USERNAME.github.io` under branch `journal-week-2` (`USERNAME.github.io:journal-week-2`)
      * [ ] `journal-week-2.md` (or your already descriptive name)
    * [ ] in `TIY-Assignments` under branch `09--fistful-of-dollars`
      * in folder `NestedAccordion/`
        * [ ] `css/styles.css`
      * in folder `VerticalTimeline/`
        * [ ] `css/styles.css`
      * in folder `MultiColumnForm/`
        * [ ] `css/styles.css`
      * in folder `CheatSheets/`
        * [ ] `CSS.md`
    * [ ] in `StudentRoster` under branch `master` (_not_ `patch-X`)
      * `*.md` i.e. ALL THE FILES
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-2` into `master`
    * [ ] `TIY-Assignments` from `09--fistful-of-dollars` into `master`
    * [ ] `StudentRoster` from `USERNAME:master` into `TIY-Durham:master`
* **Journal, Week 2**
  * [ ] Rough draft!
  * [ ] :+1: x2!
  * [ ] Extra topics in `parking-lot.md`!
* **Reading CSS**
  * [ ] `margin-*`
  * [ ] `padding-*` 
  * [ ] `border-*` 
  * [ ] `max-*` 
  * [ ] `min-*` 
  * [ ] `box-sizing`
* **Githubbing to Know You**
  * [ ] Updated from `upstream:master`
  * [ ] Edited _everyone_...
  * [ ] Pushed and PR'd (izzat a word?)
  * [ ] ZOMG CONFLICTS!
  * [ ] **BEAST MODE** Resolve ALL THE THINGS!
* **Coloring the Blueprints**
  * **Nested Accordion**
    * [ ] Positioning and layout!
    * [ ] Fonts and text!
    * [ ] Colors!!
    * [ ] Tidy it up.
    **Beast Mode**
      * [ ] Get those arrows working
    **Nightmare Mode** 
      * [ ] Responsive!
  * `Responsive Multicolumn Form`
    * [ ] Positioning and layout - in mobile view!
    * [ ] Fonts and text!
    * [ ] Colors!!
    * [ ] Tidy it up.
    **Beast Mode**
      * [ ] Desktop view
    **Nightmare Mode**
      * [ ] Responsive!
  * `Vertical Timeline`
    * [ ] Positioning and layout!
    * [ ] Fonts and text!
    * [ ] Colors!!
    * [ ] Tidy it up.
    **Beast Mode**
      * [ ] Round those corners
    **Nightmare Mode**
      * [ ] Responsive!
```

### Journal, Week 2

Begin the drafting process, like we've done the last two weeks. This time, as you think of topics that are related to your experience last week but that don't fit into your main journal, write them down in a file called `parking-lot.md` and start developing them with bulleted notes, an outline, stream of consciousness or just short rough drafts. You'll need some topics to pick from for next week... maybe even two.

### Reading CSS

Tonight, focus on the [Box Model properties](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) as we saw them used in class today. Pay careful attention to `box-sizing` and how it changes the math of the rendering model. You should cover the `margin-*`, `padding-*` and `border-*` properties, the `max-*` and `min-*` properties, and `box-sizing` property, at a minimum. All of these properties accept [a numeric length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) in [various units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Units) that you should know about. Also pay special attention to [the caveat about inches and DPI](https://developer.mozilla.org/en-US/docs/Web/CSS/length#CSS_units_and_dots-per-inch). Computers are hard.

### GitHub-ing to Know You: The Great Train Wreck Caper

Tonight, try to create some merge conflicts. Make some edits in pairs and open a comparison across your two forks. See if you can chase the Big Green Button away. Experiment. Pick different parts of the files to edit and see what conflicts arise. By Thursday, everyone should have filled out everyone's files for the first section. Let the train wrecks begin!

#### BEAST MODE

When _everyone_ edits _ALL THE THINGS_, we'll have an epic train wreck. Can you _resolve_ all these conflicts and push the resolved code back to Github? Check out the free _Pro Git_ book and document your sources for future reference.

### Coloring the Blueprints

_Merge your `08` branch via the Big Green Button_, then create a new _WIP Branch_ named `09--a-fistful-of-dollars`. On your local machine, check out the `master` branch and `git pull` to update your local copy. Then check out your _new_ branch to get to work! If you're looking for a challenge, all of those steps can be conducted via the CLI...

#### Nested Accordions

Ah, our old friend. You've got the JavaScript to make the clicking work via jQuery; now it's time to work on the CSS. You should start with some Skitch-ing, though. Open the reference implementation and take one full-page screen shot with [our first tool](http://mrcoles.com/full-page-screen-capture-chrome-extension/). Put that into your `NestedAccordion/` folder as a file named `full-page.png` and `git add` and `git commit` it. Then open it in [Skitch](https://evernote.com/skitch/) and mark up the relevant parts. Focus on styles that appear to alter the text, colors, borders, indentation, and general layout. Export pieces regularly and save them into your project, too.

Starting from your specs, write CSS selectors and rules in `css/styles.css` to emulate the reference implementation. _Don't touch the HTML!_ Use the wonky `class` and `id` names you're given, but feel free to experiment with your own colors or [web fonts](http://google.com/fonts/) (the reference uses "Lato" at 300, 400, and 700 weights). Start with the general layout of the elements and commit often as you make progress. Then incorporate additional rules incrementally.

##### BEAST MODE

By now you've realized that the HTML for those nested accordions is none other than a plain `<ul>` and a gang of `<li>` tags in fancy costumes! Those arrows to the left of the title, though... Those don't seem... natural. Not to mention that they keep... twitching whenever your mouse gets close to them. You'll need to learn something about `:hover` states to make the colors change, and you'll need to discover the power of the `::before` pseudo-element to make the arrows work.

##### NIGHTMARE MODE

Did you notice how the layout and text changes _ever so slightly_ when the browser window gets smaller? It's as if the layout is _responding_ to the size of the window... How can you make the page responsive like it is in the demo? If you're still eager for more, start your research on **Responsive Web Design** concepts and start documenting the point(s) at which the layout appears to change and what changes.

#### Responsive Multi Column Form

Like in **Nested Accordion**, take baby steps to replicate the reference implementation, starting with Skitch-ing. Shrink the window until you find the _smallest_ layout, which also happens to be the simplest. We'll call this the "mobile view" of the page, since it's roughly equivalent to what you'd get if you viewed it on a mobile phone. It should look something like this:

![Mobile View](http://i.imgur.com/ahql4Ua.png)

Skitch the general layout, paying attention to the invisible boxes and columns within the design, then move on to text, colors, and borders. Follow the same process as **Nested Accordion**: saving the full-page version first, then slicing out detailed sections with Skitch. Add and commit them all to your repo. 

Once you have a decent idea of the styles you'll need to correct, start looking for the HTML elements you'll need to apply those styles to. Write simple sanity-check style rules in `css/styles.css` at first to test your selectors, like setting the `background-color` to `fuscia` for example. You might need to do some research on styling `<form>` elements, since that can be a little tricky, particularly that auto-hiding text inside... What's _that_ about?

##### BEAST MODE

So that's surprisingly singly-columnar for a multi-column form, wouldn't you say? If you expand the window back out to the next largest layout, you'll note that _part_ of the form lays out into two columns. A little larger, and the form lays out into three columns. Let's call those "tablet" and "desktop" views respectively. Make two more CSS files in `css/` called `tablet.css` and `desktop.css` and link them into `index.html`. Can you write styles in `tablet.css` that generate the two-column-kinda layout?

#### Vertical Timeline

Now let's move on to our _new_ friend: Vertical Timeline. Like the other two, start out this one with a full-page screenshot of "desktop" size, Skitch that to identify text, color, and border and layout styles. Include some guesses about the _size of fonts_, the widths of the lines and borders, and the appropriate lengths and units for the boxes. Your only deliverable for this one is the specs, but see **BEAST MODE** if you want a head start on... Oh, wait, I don't want to give away the surprise!

##### BEAST MODE

Like **Nested Accordion**, this layout makes use of some subtle decorative touches: the caret on the text block, the icons hanging out over the vertical line... you might even consider the vertical line itself merely decorative. So as in **Nested Accordion**, you'll need to learn some more about `::before` and it's twin `::after` to implement those properly. You should also note that several of these boxes seem to be missing their corners... the icons are totally enclosed in circles, even! How do you make a box look like a circle?

Write your findings in `css/styles.css` for your **Vertical Timeline** as extended code comments... Why not just single-line comments? Can you find out why?

##### NIGHTMARE MODE

This layout also has some subtle differences as the window size shrinks... at first. But watch out, mobile! Skitch the differences between desktop and tablet sizes, then re-Skitch the whole mobile experience. Is that even possible with the HTML you're given?
