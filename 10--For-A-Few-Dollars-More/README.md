# 10 -- For a Few Dollars More

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

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
      * in folder `NestedAccordion/`
        * [ ] `css/styles.css`
      * in folder `VerticalTimeline/`
        * [ ] `css/styles.css`
      * in folder `MultiColumnForm/`
        * [ ] `css/styles.css`
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
  * **Responsive Multi Column Form*
  * **Vertical Timeline**
  * **View Mode Swich**
```

### Journal, Week 2

You should be working on your Final Draft (in a couple revisions) for tomorrow. Make sure you have some peers review your work and get your 2x :+1: ...and some extra eyes to pick out spelling and grammar mistakes! While you're reviewing the work of others, thoughtfully reflect on their journal and leave them a positive comment, a potential improvement or constructive criticism, and a **tl;dr** summary on their PR, even if someone else has already written something. You need _at least_ 2x :+1:'s... don't settle for the minimum.

### Reading CSS

Tonight, focus on the typographic elements of CSS: `font-*`, `text-*`, `line-*`, and don't forget `color`! Pay special attention to the units that you can employ when defining rules for `font-size` or `line-height` and document what the percentage values are relative to.

As you encounter CSS properties in the assignments that you _haven't_ documented yet, add them to your documentation file... even if it's just a flag in the sand. If you're running into them, though, chances are you'll need to know what they do soon enough.

### Laying the Blueprints

#### Nested Accordions

First, time for some more house cleaning. Comment out the link to your `styles.css` from your `index.html` and replace it three more: `mobile.css`, `tablet.css`, and `desktop.css`. Wait, how can you link to three different `.css` files...?

Once you've got that figured out, create the files for `mobile.css`, `tablet.css`, and `desktop.css` in your `css/` folder. Hmmmm, what could those names mean? Responsive web design! You'll be creating the css for mobile, tablet, and desktop views of the same Nested Accordions site.

Like always, take baby steps with this. First, shrink the browser window to the "mobile" view and make sure you Skritch it. Now, decide what elements need to be in place to create that view. What pesky media queries might you need to get that layout? What about positioning? Sizing? **Note:** While working in the mobile view, you'll want to comment out your `tablet.css` and `desktop.css` views so you don't accidentally overwrite your `mobile.css` styles. Commit your work to GitHub early and often!! 

Once mobile view is set, make the window a little larger until the layout visibly changes. That's your "tablet view", which you'll create on `tablet.css`. After you're finished with tablet view, make the window larger still. Whoa! That big new layout? That's "Desktop view", and you'll create that on `desktop.css`. Again, take it slow. First, Skritch the view you're working on. Then, comment out the other two stylesheets and figure out what css you need for the view you're working on.

In addition, if you didn't complete last night's Beast Mode, it's time to do that. If you've forgotten, here's a refresher. Those arrows to the left of the title? Strange magic. How can you replicate that weird twitching they do whenever your mouse gets close? You'll need to learn something about `:hover` states to make the colors change, and you'll need to discover the power of the `::before` pseudo-element to make the arrows work.

#### Responsive Multicolumn Form

Like last night's Beast mode and tonight's Nested Accordions, tonight you'll be building out Responsive Multicolumn Form. 

So that's surprisingly singly-columnar for a multi-column form, wouldn't you say? If you expand the window back out to the next largest layout, you'll note that _part_ of the form lays out into two columns. A little larger, and the form lays out into three columns. These are your "tablet" and "desktop" views.

Like Nested Accordions, you'll need to build out mobile, tablet, and desktop views. You will do this on your `mobile.css`, `tablet.css`, and `desktop.css` stylesheets.

#### Vertical Timeline

Time for Vertical Timeline! Like the other new Blueprints tonight, you'll be building out the mobile, tablet, and desktop views on separate `mobile.css`, `tablet.css`, and `desktop.css` sheets.

You'll also be tackling last night's Beast Mode. There's some subtle decorative challenges you need to work with: the caret on the text block, the icons hanging out over the vertical line... you might even consider the vertical line itself merely decorative. So as in **Nested Accordion**, you'll need to learn some more about `::before` and it's twin `::after` to implement those properly. You should also note that several of these boxes seem to be missing their corners... the icons are totally enclosed in circles, even! How do you make a box look like a circle?

#### View Mode Switch
