# 10 -- For a Few Dollars More

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* All you need is a Nested Accordion...
  * Volunteer your Skitch notes, will ya?
  * What's different? Let's make a plan!
  * Basic styling: margins, padding, font size, etc
  * Time to UPGRADE with [Google Web Fonts](http://google.com/fonts)
  * How about some colors?
* That Vertical Timeline, though...
  * Who can Skitch?
  * What's different? Make dat plan!
  * Basic layout: `float` vs `position`
    * What can I `position`? How do I position it?
    * How does that help? Is there a simpler solution?
    * Which problems does `float` solve? Which does it create?
    * And _that's_ how you `clear` a room...!
  * What's left? Have we made progress?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * [ ] Create a new _WIP Issue_ in the class repo
    * [ ] named `10 -- YOUR NAME`
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a new _WIP Branch_ in:
      * [ ] `TIY-Assignments` named `10--for-a-few-dollars-more` from `master`
  * [ ] Create or update the following _WIP Files_:
    * [ ] in `USERNAME.github.io` under branch `journal-week-2` (`USERNAME.github.io:journal-week-2`)
      * [ ] `journal-week-2.md` (or your already descriptive name)
    * [ ] in `TIY-Assignments` under branch `10--for-a-few-dollars-more`
      * in folder `ReponsiveMultiColumnForm/`
        * [ ] `css/mobile.css`
        * [ ] `css/tablet.css`
        * [ ] `css/desktop.css`
      * in folder `VerticalTimeline/`
        * [ ] `css/mobile.css`
        * [ ] `css/tablet.css`
        * [ ] `css/desktop.css`
      * in folder `ViewModeSwitch/`
        * [ ] `css/styles.css`
      * in folder `CheatSheets/`
        * [ ] `CSS.md`
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
      * [ ] `USERNAME.github.io` from `journal-week-2` into `master`
      * [ ] `TIY-Assignments` from `10--for-a-few-dollars-more` into `master`
* [ ] **Journal, Week 2**
  * [ ] Final Draft, First Revision
  * [ ] Peer reviewed by 2 people
  * [ ] Final Draft, 2nd Revision
  * [ ] Peer reviewed by 2 people
  * [ ] 2x :+1:s
* [ ] **Reading CSS**
  * [ ] Flag in the sand: `font-*` properties
  * [ ] Flag in the sand: `text-*` properties
  * [ ] Flag in the sand: `line-*` properties
  * [ ] 2 new properties fully documented!
  * [ ] 5 new properties!
  * [ ] 8 new properties!
  * [ ] 10 new properties!
* [ ] **Laying the Blueprints**
  * [ ] **Nested Accordion**
    * [ ] Got dat CSS, son...
    * [ ] The arrow goes `::before` the text, see?
    * [ ] Harmony in `cornflowerblue`...
    * [ ] South by South... East.
    * **Beast Mode** It's so...responsive! Document it.
  * [ ] **Multi-Column Form**
    * [ ] Added that `mobile.css`
    * [ ] And `tablet.css`
    * [ ] Annnnd `desktop.css`
    * [ ] All three created and linked in `index.html`!
    * [ ] Committed and pushed to GitHub!
    * [ ] We build it `mobile.css` first...!
    * [ ] How 'bout them iPads? `tablet.css` GO!
    * [ ] Where did "mobile" go?
    * **BEAST MODE** - And now for those tethered to their monitors.
  * [ ] **Vertical Timeline**
    * [ ] Link to `mobile.css`
    * [ ] And `tablet.css`
    * [ ] Annnnd `desktop.css`
    * [ ] This step seems familiar...
    * [ ] Committed and pushed to GitHub.
    * In `styles.css`, how will we make:
      * [ ] Those edges!
      * [ ] Those carets!
      * [ ] Those lines!
      * [ ] And those circles!!
      * [ ] Anything else?
    * **Beast Mode** - What will we need to make it mobile?
  * [ ] **View Mode Swich**
      * [ ] Create your `styles.css` file in the `ViewModeSwitch` folder
      * [ ] Commit it and push to GitHub
      * [ ] Link it in the `index.html`
      * [ ] Skitch it!
      * [ ] Commit the Skitch.
      * [ ] Then mark up the relevant parts.
```

### Journal, Week 2

You should be working on your Final Draft (in a couple revisions) for tomorrow. Make sure you have some peers review your work and get your 2x :+1: ...and some extra eyes to pick out spelling and grammar mistakes! While you're reviewing the work of others, thoughtfully reflect on their journal and leave them a positive comment, a potential improvement or constructive criticism, and a **tl;dr** summary on their PR, even if someone else has already written something. You need _at least_ 2x :+1:'s... don't settle for the minimum.

### Reading CSS

Tonight, focus on the typographic elements of CSS: `font-*`, `text-*`, `line-*`, and don't forget `color`! Pay special attention to the units that you can employ when defining rules for `font-size` or `line-height` and document what the percentage values are relative to.

As you encounter CSS properties in the assignments that you _haven't_ documented yet, add them to your documentation file... even if it's just a flag in the sand. If you're running into them, though, chances are you'll need to know what they do soon enough.

### Laying the Blueprints

Just when you thought that last night's assignment was too much, here comes BEAST MODE again! Someone's trash is someone else's treasure, and yesterday's HARD is today's NORMAL.

#### Nested Accordions

First step: CSS. If you still have holes from yesterday's assignment, fill them in. Next: BEAST MODE... from yesterday. If you've forgotten... Those arrows to the left of the title? Strange magic. They're not "standard" bullets, are they? You'll need to learn about [the `::before` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Abefore) and [pick a nice arrow character](http://www.amp-what.com/unicode/search/arrow) to use (hint: use the CSS value), although pretty much _anything_ would be better than the standard bullets.

Once you've got anything besides a standard bullet, how can you replicate that weird twitching whenever your mouse gets close? You'll need to use your new Chrome Dev Tools powers and learn something about `:hover` states to make the colors and the arrow change.

##### BEAST MODE

If BEAST MODE got upgraded to Normal Mode, what happened to NIGHTMARE MODE? You guessed it...

> Did you notice how the layout and text changes _ever so slightly_ when the browser window gets smaller? It's as if the layout is _responding_ to the size of the window... How can you make the page responsive like it is in the demo? If you're still eager for more, start your research on **Responsive Web Design** concepts and start documenting the point(s) at which the layout appears to change and what changes. Do this in an extended comment in your `styles.css` file.
> -- **NIGHTMARE MODE**, **Nested Accordion**, _09 -- Fistful of Dollars_

#### Multi-Column Form

First, time for some more house cleaning. Add three more CSS files to your `css/` directory and `<link>` them into your `index.html` _below_ your `styles.css` file. Name them `mobile.css`, `tablet.css`, and `desktop.css`. Wait, how can you link to three different CSS files at once? What's _that_ gonna do?

Now, look at the reference implementation at its smallest size: the "mobile" view. This should match the view you Skitched out last night. Recall that if you expand the window a bit, _part_ of the form lays out into two columns. A little larger, and the form lays out into three columns. These are your "tablet" and "desktop" views, respectively.

You'll note that there are some characteristics of the design that are consistent across all three views: fonts, colors, borders, etc. Those will _stay_ in your `styles.css` file. There are some layout properties, though, that change depending on what view we're looking at. Move the styles that _only_ apply to the "mobile" view into `mobile.css`, the first stylesheet applied after `styles.css`. Start writing styles in `tablet.css` that match the "tablet" view.

Like always, take baby steps with this. Use your work from last night to guide you. What elements need to be in place to create that view? What about positioning? Sizing? As you go, you should be aware of styles that are duplicated in `mobile.css` and `tablet.css`... Can we DRY our CSS?

_Commit your work to GitHub early and often!_

While you're working on `tablet.css`, what do you see happening to your "mobile" layout? Write some observations as comments in your _WIP Issue_.

##### BEAST MODE

Surely you see where this is leading? Write styles in `desktop.css` that _only_ apply to the "desktop" view. What happens to the "tablet" view? Add some more commentary to your _WIP Issue_ about this... Got any hypotheses about how these three CSS files can live together in harmony?

#### Vertical Timeline

Time for Vertical Timeline! First, get ready with some yak-shaving. Add three `<link>` tags to your `index.html` just _below_ your `styles.css` file for the following _new_ stylesheets in your `css/` folder: `mobile.css`, `tablet.css`, and `desktop.css`. Be sure to create the files, too!

Write extended comments (`/* */`) or, better, docblocks in your `styles.css` file that identify the CSS properties and selectors we'll need to make Vertical Timeline work. The font, color, and background styles should be pretty easy for you, so spend time on the layout instead. Pay careful attention to the subtle decorative challenges you need to work with: the caret on the text block, the icons hanging out over the vertical line, the vertical line iteself.

As in **Nested Accordion**, you'll need to learn about `::before` and it's twin `::after` to implement those properly. You should also note that several of these boxes seem to be missing their corners... the icons are totally enclosed in circles, even! How do you make a box look like a circle? And yes, this is yesterday's BEAST MODE.

##### BEAST MODE

Have you analyzed what this layout looks like in a mobile size? Preposterous! There's no way those two things can be related! Skitch the mobile view of the **Vertical Timeline** and add those images to your repo. You've got `mobile.css` and `desktop.css` files now. Move your notes that _only_ apply to the desktop view into `desktop.css`, leaving the ones that apply to _both_ in `styles.css`...

#### View Mode Switch

Just when you thought you'd escaped View Mode Switch. Mua ha ha! You'll never get away.

Tonight, you're going to do all the View Mode Switch yak-shaving. If you haven't already, you need to delete the linked `.css` from your `index.html`. Then, create your own css file named `styles.css`. Then update the `index.html` to link to your new `styles.css`. Commit the deletions and your new file.

Now, it's time to get Skitching! Take one full-page screen shot with [our first tool](http://mrcoles.com/full-page-screen-capture-chrome-extension/). Put that into your `ViewModeSwitch/` folder as a file named `full-page.png` and `git add` and `git commit` it. Then open it in [Skitch](https://evernote.com/skitch/) and mark up the relevant parts. Focus on styles that appear to alter the text, colors, borders, indentation, and general layout. Export pieces regularly and save them into your project, too.
