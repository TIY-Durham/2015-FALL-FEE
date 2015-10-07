# HALFTIME

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `HALFTIME -- YOUR NAME`
    * link to PRs in `USERNAME.github.io`
    * link to PRs in `TIY-Assignments`
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-5`
      * `release-0.0.2` from `master`
      * `feature--remodeling` from `release--0.0.2`
      * `feature--*` from `release--0.0.2`
    * `TIY-Assignments`
      * `release--0.0.0` from `master`
      * `feature--yak-shaving` from `release--0.0.0`
      * `feature--*` from `release--0.0.2`
  * _WIP Files_:
    * `USERNAME.github.io:release--0.0.2`
      * `_drafts/` -- for any WIP files...
      * `_posts/` -- your completed posts
      * `src/`
        * `scss/*.scss`
        * `js/*.js`
        * `index.html`
      * `bower.json`
      * `package.json`
    * `TIY-Assignments:release--0.0.2`
      * `DropDownMenu` / `SlideOutMenu` / `ResponsiveIcons` / `ResponsiveGrid` -- starting with `yo h5bp`
        * `scss/`
          * `main.scss`
          * `_grid.scss`
          * `_FEATURE.scss` -- where `FEATURE` is a feature name
        * `specs/` -- with Skitches, of course!
        * `.gitignore` -- ignoring ALL THE THINGS!
        * `bower.json` -- from `bower init` and `bower install`
        * `package.json` -- from `npm init` and `npm install`
        * `index.html` -- with links to all the `bower`-installed packages
* **HALFTIME Journal**
  * [ ] **Three's Company**
  * [ ] **Build It Out**
  * [ ] **Time for some remodeling!**
* **Blueprints Everywhere!**
  * [ ] Yaks Shaved
  * [ ] Some MFing HTML & SCSS
  * **BEAST MODE** - MORE BLUEPRINTS!
```

### HALFTIME Journal

#### Three's Company

How're those drafts going? Get a final draft done for your reflection and resource entries, then keep working on your tutorial. Make sure you get those 2 :+1:s and give 2 :+1:s!

#### Build It Out

Not really a _writing_ assignment, per se... Let's make that `USERNAME.github.io` repo into a _real_ blog site. We'll have to do a little remodeling, and you're gonna need some paint. First, _merge your existing PRs_ and remember to _bump the version number_ in `release--0.0.1` before merging to `master`!

Before you get going, _make your own checklist_ describing the Features you're going to build to make your template come to life. Wait, what's a Feature? Glad you asked!

> A Feature is a complete and distinct piece of the functionality or experience of a piece of software. The smallest, indivisible part of an interaction is a Feature.

In the terms of any web-based interface, a Feature _definitely_ includes HTML and CSS and _usually_ involves JavaScript. In terms of a _responsive_ website, any Feature _also_ requires Media Queries, since each _component_ -- [Brad Frost's "organisms" in "Atomic Design"](http://bradfrost.com/blog/post/atomic-web-design/#oorganisms) -- probably has responsive behavior. _Don't leave your MQs until the end unless you want to cry!_ :cry:

Each feature that you identify has some Baby Steps to build it: MF'g HTML, basic layout, responsive-ness, interactivity. Break each down into its own checklist and record them in your _WIP Issue_. Lord knows you've had some examples to work from.

#### Time for some remodeling!

Create a new branch called `release--0.0.2` from `master`. Check out that branch, and create a `feature--remodeling` branch based on it to do this initial work in. _Commit after every step!_

1. Move all your old journal entries and tutorials into a new directory called `_posts/`; stick your in-progress journal entries and "parking lot" in `_drafts/`.
1. Use your `init` commands to create `bower.json` and `package.json` files if you haven't already.
1. Use `bower` to upgrade the versions of `jquery`, `modernizr`, and `normalize.css`... don't forget to replace the links in `index.html`!
1. Add a `start` task to `package.json` that runs `browser-sync` and opens your `src/index.html` file.

Push your branch to GitHub and open a PR into `release--0.0.2` for review. _Please review each other's work carefully!_ Making a mistake at this point may derail you for a while... Merge your approved PR and update your local `release--0.0.2` branch.

#### To the feature lists!

Now that you've got _those_ yaks shaved, it's time to start on the _real_ build-out. Pick one of the Features you planned -- the navigation bar, one of the post blocks, the sidebar or even a _part_ of the sidebar -- and create a branch based on `release-0.0.2` called `feature--FEATURE-NAME` where `FEATURE-NAME` describes the part you're working on, e.g. `feature--sidebar-profile` or `feature--main-column`. Commit _something_ -- a comment declaring intent -- into that branch and push it to GitHub so you can open a PR.

Open a PR into `release-0.0.2` named after that Feature and paste the checklist for that Feature into the description. Check the items off as you work, and commit _often_ using [descriptive, imperative commit messages](http://chris.beams.io/posts/git-commit/). If you're committing a horde of files or a wall of changes at once, you're doing it wrong. Read up on and try using `git add --patch` and `git add --interactive` to make your commits smaller, even when you've edited a ton of different things.

When you finish your feature and complete your checklist, solicit peer review of your work and merge it. If you complete your checklist _before_ you finish your feature, try adding those invisible items to your checklist. If you get stuck on a part of a feature, work on another one. Don't be afraid of having multiple feature branches open at once; you'll regularly have multiple "in-progress" branches while working on a team.

### Blueprints Everywhere!

You've met four of the Blueprints so far: `MultiColumnForm`, `NestedAccordion`, `VerticalTimeline`, and  `ViewModeSwitch`. But there's others out there, too, and it's time to tackle them -- in pairs.

You've been (mostly) randomly assigned a partner from the class to work with through the weekend. You and your partner will work together to build all four of the following layouts, but each of you is only responsible for one layout from each category.

##### Dollar (`$`) Menu

* [Horizontal Drop-Down Menu](http://tympanus.net/codrops/2013/03/05/horizontal-drop-down-menu/)
* [Horizontal Slide-Out Menu](http://tympanus.net/codrops/2013/05/17/horizontal-slide-out-menu/)

##### McGriddles

* [Responsive Icon Grid](http://tympanus.net/codrops/2013/07/01/responsive-icon-grid/)
* [Responsive Full Width Grid](http://tympanus.net/codrops/2013/04/17/responsive-full-width-grid/)

If one partner chooses the **Horizontal Drop-Down Menu** and **Responsive Full-Width Grid**, the other partner gets **Horizontal Slide-Out Menu** and **Responsive Icon Grid**. You each get _one from each category_... got it? Stay with your partner; the two layouts are similar enough that you'll have more success working together than apart.

Write your plan down for each project in your _WIP Issue_ that includes yak shaving and a list of features. Make checklists. Put your feature checklists on the PRs for each feature branch as you proceed.

Tonight, craft your plan and get started on both projects, starting with MF'g HTML and some basic layout with Sass. A responsive grid will probably help. Remember to give yourself a container!

Create a branch called `release--0.0.0` in your `TIY-Assignments` repo and get to shaving those yaks. Create folders for your new Blueprints, and start them with `yo h5bp`, `bower init` and `npm init`. Tell `git` to ignore stuff. All those kind of things that we keep doing over and over again. Man, a checklist sure would be nice about now...

After you review that with your partner and merge, get started on a _new_ release -- `release--0.0.1` -- that will contain the first parts of your new Blueprints: MF'g HTML and basic layout, using your grid in SCSS, of course. Create feature branches for those and add your plan to the PR for each. Merge when you have shown your _working code_ to your partner.

#### BEAST MODE

If you need a head start on tomorrow, start creating and merging feature branches. Your partner should serve as your second eyes for approving PRs to merge. Move at your own pace, and don't leave your buddy behind!

#### NIGHTMARE MODE

Not enough for you? Then try these on for size, but make sure your partner is on board. You get one, they get one.

* [Quotes Rotator](http://tympanus.net/codrops/2013/03/29/quotes-rotator/)
* [Full Width Image Slider](http://tympanus.net/codrops/2013/02/26/full-width-image-slider/).

You'll need all your skills so far to complete this Blueprint challenge! No one has completed it yet...
