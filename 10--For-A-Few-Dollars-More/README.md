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
**Yak Shaving**
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
**Journal, Week 2**
  * [ ] Final Draft, First Revision
  * [ ] Peer reviewed by 2 people
  * [ ] Final Draft, 2nd Revision
  * [ ] Peer reviewed by 2 people
  * [ ] 2x :+1:s
**Reading CSS**
  * [ ] Flag in the sand: `font-*` properties
  * [ ] Flag in the sand: `text-*` properties
  * [ ] Flag in the sand: `line-*` properties
  * [ ] 2 new properties fully documented!
  * [ ] 5 new properties!
  * [ ] 8 new properties!
  * [ ] 10 new properties!
**Laying the Blueprints**
  * **Nested Accordion**
      * [ ] What happens to the color of the arrow when I `:hover`?
      * [ ] And now get the arrow to change direction.
      * **Beast Mode** It's so...responsive! Document it.
  * **Responsive Multi Column Form**
      * [ ] Comment out that `styles.css`...
      * [ ] And replace it with `mobile.css`
      * [ ] And `tablet.css`
      * [ ] Annnnd `desktop.css`
      * [ ] Made `mobile.css`, `tablet.css`, and `desktop.css` files in your `ResponsiveMultiColumnForm` folder
      * [ ] And committed them to GitHub.
      * [ ] Now: Build it! Mobile first.
      * **Beast Mode** - iPad ready! Skitch and build the tablet view.
      * **Nightmare Mode** - And now for those tethered to their monitors.
  * **Vertical Timeline**
      * [ ] Link to `mobile.css`
      * [ ] And `tablet.css`
      * [ ] Annnnd `desktop.css`
      * [ ] Made `mobile.css`, `tablet.css`, and `desktop.css` files in your `VerticalTimeline` folder
      * [ ] And committed them to GitHub.
      * [ ] Now, in `styles.css`, write some extended commentary on those designs
        * [ ] Those edges!
        * [ ] Those carets!
        * [ ] Those lines!
        * [ ] And those circles!!
      * **Beast Mode** - Make it mobile ready!
  * **View Mode Swich**
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

#### Nested Accordions

If you didn't complete last night's Beast Mode, it's time to do that. If you've forgotten, here's a refresher. Those arrows to the left of the title? Strange magic. How can you replicate that weird twitching they do whenever your mouse gets close? You'll need to learn something about `:hover` states to make the colors change, and you'll need to discover the power of the `::before` pseudo-element to make the arrows work.

##### Beast Mode

Did you notice how the layout and text changes _ever so slightly_ when the browser window gets smaller? It's as if the layout is _responding_ to the size of the window... How can you make the page responsive like it is in the demo? If you're still eager for more, start your research on **Responsive Web Design** concepts and start documenting the point(s) at which the layout appears to change and what changes. Do this in an extended comment in your `styles.css` file.

#### Responsive Multicolumn Form

Like last night's Beast mode, tonight you'll be building out Responsive Multicolumn Form. 

First, time for some more house cleaning. Comment out the link to your `styles.css` from your `index.html` and replace it three more: `mobile.css`, `tablet.css`, and `desktop.css`. Wait, how can you link to three different `.css` files...?

Once you've got that figured out, create the files for `mobile.css`, `tablet.css`, and `desktop.css` in your `css/` folder. Hmmmm, what could those names mean? 

Now, look at the mobile view. This should match the view you Skitched out last night. If you expand the window back out to the next largest layout, you'll note that _part_ of the form lays out into two columns. A little larger, and the form lays out into three columns. These are your "tablet" and "desktop" views.

You'll need to build out the mobile view you Skitched last night. You will do this on your `mobile.css` stylesheet.

Like always, take baby steps with this. Use your work from last night to guide you. What elements need to be in place to create that view? What about positioning? Sizing? **Note:** While working in the mobile view, you'll want to comment out your `tablet.css` and `desktop.css` views. This isn't too important tonight, but it's a good habit to get into. 

Commit your work to GitHub early and often!

##### Beast Mode

That `tablet.css` stylesheet sure looks pretty bare. What if you...build out the tablet view? Time to move that window to the layout that shows two columns. Skitch it, then build it.

##### Nightmare Mode

Build it for the desktop!

#### Vertical Timeline

Time for Vertical Timeline! First, get ready with some yak-shaving. Add three links to your `index.html` in the right place: `mobile.css`, `tablet.css`, and `desktop.css`. Then create the files for `mobile.css`, `tablet.css`, and `desktop.css` in your `css/` folder inside your `VerticalTimeline` folder.

You'll also be tackling last night's Beast Mode. There's some subtle decorative challenges you need to work with: the caret on the text block, the icons hanging out over the vertical line... you might even consider the vertical line itself merely decorative. So as in **Nested Accordion**, you'll need to learn some more about `::before` and it's twin `::after` to implement those properly. You should also note that several of these boxes seem to be missing their corners... the icons are totally enclosed in circles, even! How do you make a box look like a circle? 

Write your findings in `css/styles.css` for your **Vertical Timeline** as extended code comments... Why not just single-line comments? Can you find out why?

##### Beast Mode

Now can you build it...in mobile view??

#### View Mode Switch

Just when you thought you'd escaped View Mode Switch. Ha! You'll never get away from it.

Tonight, you're going to do all the View Mode Switch yak-shaving. If you haven't already, you need to delete the linked `.css` from your `index.html`. Then, create your own css file named `styles.css`. Then update the `index.html` to link to your new `styles.css`. Commit the deletions and your new file.

Now, it's time to get Skitching! Take one full-page screen shot with [our first tool](http://mrcoles.com/full-page-screen-capture-chrome-extension/). Put that into your `ViewModeSwitch/` folder as a file named `full-page.png` and `git add` and `git commit` it. Then open it in [Skitch](https://evernote.com/skitch/) and mark up the relevant parts. Focus on styles that appear to alter the text, colors, borders, indentation, and general layout. Export pieces regularly and save them into your project, too.
