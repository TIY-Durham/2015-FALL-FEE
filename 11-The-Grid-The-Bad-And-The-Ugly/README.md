# The Grid, The Bad, and the Ugly

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

### Yesterday's Weather...

* All you need is a Nested Accordion... estimate :tomato: :tomato: :tomato:, actual ???
  * Volunteer your Skitch notes, will ya?
  * What's different? Let's make a plan!
  * Basic styling: margins, padding, font size, etc
  * Time to UPGRADE with [Google Web Fonts](http://google.com/fonts)
  * How about some colors?
* That Vertical Timeline, though... :tomato: :tomato: :tomato: :tomato:
  * Who can Skitch?
  * What's different? Make dat plan!
  * Basic layout: `float` vs `position`
    * What can I `position`? How do I position it?
    * How does that help? Is there a simpler solution?
    * Which problems does `float` solve? Which does it create?
    * And _that's_ how you `clear` a room...!
  * What's left? Have we made progress?

### Is Today's Forecast!

* Flip that View Mode Switch
  * What is [Grid-Based Design](https://en.wikipedia.org/wiki/Grid_(graphic_design))?
    * components: rows, columns, gutters
    * measurements: absolute column units
    * proportions: [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio)
  * What is the _default_ layout of HTML elements?
  * How do I [layout HTML elements in a grid with CSS](https://css-tricks.com/dont-overthink-it-grids/)?
    * container elements with minimal styles as "rows"
    * floating elements with fixed `width` as "columns"
    * [the clearfix hack](https://css-tricks.com/snippets/css/clear-fix/)
  * How does [Grid-Based Design relate to Responsive Web Design](http://www.responsivegridsystem.com/)?
    * Research:
      * [_Grid Systems in Graphic Design_ by Josef Müller-Brockmann](http://www.amazon.com/Grid-Systems-Graphic-Design-Communication/dp/3721201450)
      * [_A Brief History of Grids_ on Graphics.com](http://www.graphics.com/article-old/brief-history-grids)
    * Prior Art:
      * [960.gs](http://960.gs/) -- Not responsive...
      * [Unsemantic CSS](http://unsemantic.com/) -- kinda dated...
      * [Skeleton CSS: Grid](http://getskeleton.com/#grid)
      * [Pure CSS: Grid](http://purecss.io/grids/)
      * [Bootstrap: Grid](http://getbootstrap.com/css/#grid)
      * [Zurb Foundation: Grid](http://foundation.zurb.com/grid.html)
    * Build it yourself!
      * [_Don't Overthink It Grids_ by Chris Coyier](https://css-tricks.com/dont-overthink-it-grids/)

## Assignment

```markdown
* [ ] **Yak Shaving**
  * [ ] Create a new _WIP Issue_ in the class repo
    * [ ] named `11 -- YOUR NAME`
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a new _WIP Branch_ in:
    * [ ] `TIY-Assignments` named `11--grid-bad-ugly` from `master`
  * [ ] Create or update the following _WIP Files_:
    * in folder `ReponsiveMultiColumnForm/`
      * [ ] `css/mobile.css`
      * [ ] `css/tablet.css`
      * [ ] `css/desktop.css`
      * [ ] `css/styles.css`
    * in folder `VerticalTimeline/`
      * [ ] `css/mobile.css`
      * [ ] `css/tablet.css`
      * [ ] `css/desktop.css`
      * [ ] `css/styles.css`
    * in folder `ViewModeSwitch/`
      * [ ] `css/mobile.css`
      * [ ] `css/tablet.css`
      * [ ] `css/desktop.css`
      * [ ] `css/styles.css`
    * in folder `TodoMVC/`
      * [ ] `js/app.js`
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-2` into `master` (MERGED)
    * [ ] `TIY-Assignments` from `11--grid-bad-ugly` into `master`
* [ ] **Finishing the Blueprints**
  * [ ] **Multi-Column Form**
    * [ ] Shave the yak...
      * [ ] Got `styles.css`?
      * [ ] And `mobile.css`?
      * [ ] `tablet.css`?
      * [ ] `desktop.css`?
      * [ ] And they're all linked to `index.html` correctly?
      * [ ] Committed and pushed to GitHub!
    * Time to multi-column this form! In `desktop.css`:
      * [ ] Get the first column on there
      * [ ] Then the second
      * [ ] And the third! It's multi!
    * [ ] Peace, love and stylesheets: HOW?
    * **BEAST MODE** - Pixel perfection!
    * **NIGHTMARE MODE** - Write a media query for XL monitors!
  * [ ] **Vertical Timeline**
    * [ ] It's not gonna shave itself...
      * [ ] Got `styles.css`?
      * [ ] And `mobile.css`?
      * [ ] `tablet.css`?
      * [ ] `desktop.css`?
      * [ ] And they're all linked to `index.html` correctly?
      * [ ] Committed and pushed to GitHub!
    * Let's make this Timeline Vertical!:
      * [ ] Move those desktop specific styles where they belong!
      * [ ] Skitch that mobile view (burninate that screenshot!)
    * And let's build that mobile view:
      * [ ] The font gets smaller
      * [ ] And the boxes!
      * [ ] And all the queries are written
    * **BEAST MODE** - Perfect the `desktop.css` layout
  * [ ] **View Mode Switch**
    * [ ] What, you think we forgot?
      * [ ] Got `styles.css`?
      * [ ] And `mobile.css`?
      * [ ] `tablet.css`?
      * [ ] `desktop.css`?
      * [ ] And they're all linked to `index.html` correctly?
      * [ ] Committed and pushed to GitHub!
    * [ ] Welcome back to The Grid, User.
      * [ ] Hm those `margin`s look tricky...
      * [ ] Maybe I need some `padding`?
      * [ ] Align the text correctly
      * [ ] And those images
      * [ ] Not to mention those toggle buttons
      * [ ] Buttons now wired to my JavaScript!
    * [ ] Second view! The List!
      * [ ] How does it differ from the grid view?
      * [ ] It's kind of like the grid, too...
      * [ ] Work on those `margin`s
      * [ ] And `padding`
      * [ ] Then get the text on there
      * [ ] And the images
      * [ ] Still working with the JavaScript!
    * [ ] And both views are squishy!
    * **BEAST MODE** - Responsiveness implemented: columns changed, hidden, and more.
    * **NIGHTMARE MODE** - Pixel perfect! :shipit:
* [ ] Attack of the Killer TodoMVC
    * [ ] So I need a function right...
    * [ ] And maybe some array  methods...
    * [ ] And definitely an event handler...
    * [ ] Annnnd a `console.log`...
    * [ ] ...to make it output to the console!
      * [ ] Output captured!
      * [ ] And included in my _WIP Issue_
  * **BEAST MODE** - Add items to the display...IN YOUR BROWSER.
```

### Finishing the Blueprints

The end is in sight! You've made, built, colored, and planned the blueprints. Time to polish them up! The main concepts you're tackling this weekend is how to apply different styles to the same elements depending on _context_. In **Multi-Column Form** and **Vertical Timeline**, the context is _device-specific_: the browser has to selectively apply certain styles based on specific criteria determined by the size of the viewport. In **View Mode Switch**, the elements contributing to the layout don't change, but the arrangement of them is dependent on criteria altered by JavaScript: the class name of an ancestor.

#### Multi-Column Form

First, verify that you've got your `styles.css`, `mobile.css`, `tablet.css`, and `desktop.css` in the `css` folder of your `MulticolumnForm` folder. Make sure your common styles are in `styles.css`, while your device specific styles are in their respective stylesheets. If you haven't refactored your common styles yet, now is the time to do that.

Now that everything is in place, it's time to finish `desktop.css`. This is the traditional view, when there are three columns on the screen. Use the CSS magic we saw in class today to achieve this: `float`-ing columns inside a self-`clear`-ing row. As always, use baby steps. Which elements represent the columns? How much distance is between them? How can you split that distance equally?

Remember, you're _only_ writing the css that applies to the "desktop" view in `desktop.css`. All styles shared between the three views should be in `styles.css`. Don't try to jump straight to that step, though: red-green-refactor! Finally, there should be _no_ changes to your HTML file; use the HTML you're given to produce the layout.

How can you make these three (nay, four!) stylesheets work together in harmony? If you haven't already, you'll need to research [using Media Queries to constrain the CSS applied to the page](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). In this case, the criteria is the size of the viewport, and the _simplest_ way to apply those criteria to each stylesheet would be to use the `media` attribute of the `<link>` tag... But do as you will!

##### BEAST MODE

Have you heard of the term "pixel perfect" before? Pixel perfect can mean a lot of things, but here we're talking about perfectly matching _your_ layout to the original one -- down to the last pixel.

For BEAST MODE, try to emulate the Reference Implementation as closely as possible. Consider `font-*` properties, colors, and especially the distances around and between the elements. What tools are at your disposal to help you in this endeavor? Surely there's [a Chrome extension that could help](http://www.welldonecode.com/perfectpixel/) lying around somewhere...

##### NIGHTMARE MODE

We live in an age of giants... giant monitors, that is. Have you seen the ones in the instructor office? If you're looking for more of a challenge, do some research about targeting _large_ screens. How do you write _that_? Do you even need to? What would **Multi-Column Form** look like on a _giant screen_? Create a `cinema.css` stylesheet and distill your new-found knowledge into styles there. Can you make your site "giant monitor friendly"?

#### Vertical Timeline

Be sure to have those four CSS files in `css/` and linked in `index.html`: `styles.css`, `mobile.css`, `tablet.css` and `desktop.css`. Have you noticed the differences between "desktop" and "tablet" yet? Refactor your `styles.css` to only contain the _common_ styles and put the desktop-specific styles in `desktop.css`. Then, start working on the "mobile" view.

First show us your ["skills of an artist"](http://www.homestarrunner.com/sbemail58.html) and Skitch the mobile view. Now, can you _build_ the mobile view? There's some dark magics involved here. You'll have to add some `max-width` Media Queries and _override_ some styles from `desktop.css` for sure. And what can you do to `font-size` to make it shrink for mobile view?

##### BEAST MODE

Pixel perfect: make your layout match your screenshot of the reference implementation _precisely_. What font faces, sizes, and colors do you need?

#### View Mode Switch

Last night, you should have done your yak-shaving and Skitch-ing. Now it's time to bring this monster to life!

For this layout, let's just focus on the "desktop" view of the bottles in both "grid" and "list" mode.

View Mode Switch has three distinct views, which means four stylesheets: `styles.css` for shared styles, then `mobile.css`, `tablet.css`, and `desktop.css` for their respective views. Make those, and put them in the `css` folder of your `ViewModeSwitch` directory.

Now, focus on the shared styles for `styles.css` and what styles you need for `desktop.css`. Start with the grid. Focus on the selectors and properties you'll need for the _grid layout_ of the site. Hint: you'll need to break into your css toolbox for properties like `max-*`, `min-*`, and pseudo-elements like `::before`, among others. And don't forget the `font-*` properties!

After you've got the grid set, align the text, then the images. Be careful! You might find they pop your grid out of whack. Just keep adjusting until it's back. Don't forget those toggle buttons in the upper-right hand corner, either. Wire them up to your JavaScript!

Now, it's called View Mode _Switch_ for a reason, right? Time to switch that layout to list view! Still working with your `desktop.css` view, build out the list view for the site. You'll need a grid here, too, but with different positioning properties. Wait, if there's a grid view and a list view, how can they share the same css stylesheet...?

Make sure your layout is _squishy_, not static. It shouldn't fall apart when the site gets smaller. 

##### BEAST MODE

In addition to being a cool example of grid layouts, [View Mode Switch](http://tympanus.net/Blueprints/ViewModeSwitch/) is a responsive site. Don't believe me? Grab the edge of your browser window and shrink...shrink...shrink some more. Boom! Tablet and mobile views!

For Beast Mode, add reponsiveness to the layout. You might need to change your column numbers, maybe even hide columns for certain views...

##### NIGHTMARE MODE

Pixel perfect _both_ views. Work with your `max-*` and `min-*` properties, as well as `padding-*` and `margin-*` properties. Finish off with stylings, like your typography elements.

### Attack of the Killer TodoMVC

Like a Killer Tomato, ToDoMVC is back. When we last left our intrepid Todo app, you'd created the User Stories for the app in your `TodoMVC/js/app.js` file. This weekend, you're going to build the _first_ User Story.

```javascript
// User Stories
// I can add a task to my todo list so that I can remember to do it later.
```

For NORMAL MODE, you'll need to capture the user input and then `console.log` that input. Take a screenshot of the output and include it in your _WIP Issue_.

Don't be afraid to refine your original User Story. Also spend some time thinking through what you might need to use to implement this task. Think back to _days_ ago and all the useful tricks you've learned like `addEventListener`, as well as fun array methods like `.push`. 

For an extra challenge, consider flexing your newfound [jQuery](https://api.jquery.com/) muscles for this task.

##### BEAST MODE

You've successfully logged the output in `console.log`. Now you need to log the item..._in the display_. This is one tough tomato.
