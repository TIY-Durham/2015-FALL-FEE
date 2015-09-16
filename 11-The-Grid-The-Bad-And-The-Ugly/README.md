# The Grid, The Bad, and the Ugly

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

Grid-Based Layout in CSS

## Assignment

```markdown
* [ ] **Yak Shaving**
  * [ ] Create a new _WIP Issue_ in the class repo
    * [ ] named `11 -- YOUR NAME`
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a new _WIP Branch_ in:
    * [ ] `TIY-Assignments` named `11--the-grid-the-bad-and-the-ugly` from `master`
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
    * [ ] `TIY-Assignments` from `11--the-grid-the-bad-and-the-ugly` into `master`
* [ ] **Finishing the Blueprints**
  * [ ] **Multi-Column Form**
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
    * [ ] On `styles.css`:
      * [ ] How can all these stylesheets co-exist? What happens to desktop and tablet when a user is on their phone? Explain!
    * **BEAST MODE** - Pixel perfection!
    * **NIGHTMARE MODE** - Write a media query for XL monitors!
  * [ ] **Vertical Timeline**
    * [ ] Got `styles.css`?
    * [ ] And `mobile.css`?
    * [ ] `tablet.css`?
    * [ ] `desktop.css`?
    * [ ] And they're all linked to `index.html` correctly?
    * [ ] Committed and pushed to GitHub!
    * Let's make this timeline vertical!:
      * [ ] Move those desktop specific styles where they belong!
      * [ ] Skitch that mobile view (burninate that screenshot!)
    * And let's build that mobile view:
      * [ ] The font gets smaller
      * [ ] And the boxes!
      * [ ] And all the queries are written
    * **BEAST MODE** - Perfect the `desktop.css` layout
  * [ ] **View Mode Switch**
    * [ ] Got `styles.css`?
    * [ ] And `mobile.css`?
    * [ ] `tablet.css`?
    * [ ] `desktop.css`?
    * [ ] And they're all linked to `index.html` correctly?
    * [ ] Committed and pushed to GitHub!
    * [ ] First view! The Grid!
      * [ ] Hm those `margin`s look tricky...
      * [ ] Maybe I need some `padding`?
      * [ ] Align the text correctly
      * [ ] And those images
      * [ ] Not to mention those toggle buttons!
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

#### Multi-Column Form

First, verify that you've got your `styles.css`, `mobile.css`, `tablet.css`, and `desktop.css` in your `css` folder of your `MulticolumnForm` folder. Make sure your common styles are in `styles.css`, while your device specific styles are in their respective stylesheets. If you haven't written your common styles yet, now is the time to do that.

Now that everything is in place, it's time to finish `desktop.css`. This is the traditional view, when there are three columns on the screen. You'll need to use all sorts of css magic to achieve this, like `floats` and other positioning elements. As always, use baby steps. How can you create the columns? How can you make them line up so neatly, equal distance apart?

Remember, you're _only_ writing the css that applies to `desktop.css`. All styles shared between the three views should be in `styles.css`. And there's no reason to touch the HTML!

Like last night's **Beast Mode**, add commentary to your _WIP Issue_ about the three responsive stylesheets and their shared `styles.css` sibling. How do you think the three CSS files interact? How can they "live in harmony" together?

##### BEAST MODE

Have you heard of the term "pixel perfect" before? Pixel perfect can mean a lot of things, but here we're talking about perfectly matching _your_ layout to the original one -- down to the last pixel. 

For Beast Mode, try to emulate the original Multicolumn Form as closely as possible. Consider `font-*` properties, colors, and especially the distances around and between the elements. What tools are at your disposal to help you in this endeavor? That's right, time to have a chat with our buddy Dev Tools.

##### NIGHTMARE MODE

There might be giants...giant monitors, that is. (Have you seen the ones in the instructor office?) Do some research about designing for larger monitors. How do you write XL media queries? Do you even need to? What would Multicolumn Form look like on a giant screen? Create a `xlarge.css` stylesheet and incorporate your newfound knowledge in the styles there. Can you make the site giant monitor ready?

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
