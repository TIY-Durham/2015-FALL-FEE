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
      * [ ] `css/styles.css`
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
    * **BEAST MODE** - Pixel perfect! :shipit:
    * **NIGHTMARE MODE** - Mobile ready and in the correct stylesheet!
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

For Vertical Timeline, you'll again want to check that you've got your `styles.css`, `mobile.css`, `tablet.css`, and `desktop.css` in your `css` folder within your `VerticalTimeline` directory. If you still need to write your common styles, do so in `styles.css`. 

Last night you got those pesky decorative touches finished. Tonight, you'll move all the styles that _only_ apply to the desktop view to your `desktop.css` stylesheet. Then, like last night's Beast Mode, show us your [skills of an artist](http://www.homestarrunner.com/sbemail58.html) and Skitch the mobile view. 

Now, can you _build_ the mobile view...?? There's some dark magics involved here. You'll have to work with `max-width` and `::before` for sure. And what can you do to `font-size` to make it shrink for mobile view?

##### BEAST MODE

Like Multi-Column Form, Beast Mode tonight is making the `desktop.css` view pixel perfect. What font faces, sizes, and colors do you need? How can you make the layout fit the specs from the original? Try to match your version as closely to the original as possible.

#### View Mode Switch

Last night, you should have done your yak-shaving and Skitched View Mode Switch. Now it's time to bring this monster to life!

View Mode Switch has three distinct views, which means four stylesheets: `styles.css` for shared styles, then `mobile.css`, `tablet.css`, and `desktop.css` for their respective views. Make those, and put them in the `css` folder of your `ViewModeSwitch` directory.

Now, focus on the shared styles for `styles.css` and what styles you need for `desktop.css`. Start with the grid. Focus on the selectors and properties you'll need for the _grid layout_ of the site. Hint: you'll need to break into your css toolbox for properties like `max-*`, `min-*`, and pseudo-elements like `::before`, among others. And don't forget the `font-*` properties!

After you've got the grid set, align the text, then the images. Be careful! You might find they pop your grid out of whack. Just keep adjusting until it's back. Don't forget those toggle buttons in the upper-right hand corner, either. Wire them up to your JavaScript!

Now, it's called View Mode _Switch_ for a reason, right? Time to switch that layout to list view! Still working with your `desktop.css` view, build out the list view for the site. You'll need a grid here, too, but with different positioning properties. Wait, if there's a grid view and a list view, how can they share the same css stylesheet...? 
##### BEAST MODE

Pixel perfect the grid view! Work with your `max-*` and `min-*` properties, as well as `padding-*` and `margin-*` properties to snap that grid in place. Finish off with stylings, like your typography elements.

##### NIGHTMARE MODE

In addition to being a cool example of grid layouts, [View Mode Switch](http://tympanus.net/Blueprints/ViewModeSwitch/) is a responsive site. Don't believe me? Grab the edge of your browser window and shrink...shrink...shrink some more. Boom! Tablet and mobile views!

For Nightmare Mode, try building the mobile view of the grid layout. Stick the styles specific to mobile in your `mobile.css` stylesheet.
