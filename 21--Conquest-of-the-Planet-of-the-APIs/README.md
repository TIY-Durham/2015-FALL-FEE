# 21 -- Conquest of the Planet of the APIs

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Tools on Tuesday

* **There's something horribly wrong with your GitHub profile...**
  * First I need a volunteer...
  * Let's take a look at those libraries we're using...
  * What version of jQuery are we using? Modernizr? normalize.css?
  * Anything else? How would I even know?
* **How do I upgrade this old @$$ version of jQuery?**
  * How do I know what version of jQuery I'm even using?
  * Where can I find the _latest_ version of jQuery?
  * Do I really have to keep track of all that?
  * [`bower`](https://bower.io) is to the browser what `npm` is to CLI JavaScript...?
* [How do I install `bower`](http://bower.io/#install-bower)?
  * It's a _command_, right? So `npm install`...!
  * Now what does _that_ do? `bower --help`
  * Time to upgrade that jQuery: `bower install jquery`
  * And where did `bower` install that? How do I link it?
  * Do I commit my `bower_components` directory?
  * Not if I `bower init` and `bower install --save`...!
  * Need more practice? What about `modernizr`...?
  * Now how do link `modernizr` now?
  * Ready for one more? `bower install --save lodash`
* **I am not a `<template>`...! I am a HTML element!**
  * What is [template processing](http://en.wikipedia.org/wiki/Template_processor)?
  * How can [lodash](http://lodash.com) help me?
  * Why would I ever _use_ that? Say I had a list of repositories...
  * ...and some HTML for one of them that contained some placeholders.
  * How could I generate the _correct_ HTML for a single repository, given that "template" and that data?

## Assignment

```markdown
* **Yak-Shaving**
  * _WIP Issue_: `21 -- YOUR NAME`
  * _WIP Branch_:
    * `USERNAME.github.io`
      * `journal-week-5`
      * `release--0.0.1`
      * `feature--responsive-specs`
      * `feature--responsive-grid`
      * **BEAST MODE** `feature--responsive-layout`
    * `TIY-Github`
      * `release--0.0.3`
      * `feature--profile-template`
      * `feature--repo-list-placeholders`
      * `feature--repo-list-template`
      * **BEAST MODE** `feature--activity-layout`
      * **BEAST MODE** `feature--activity-placeholders`
      * **NIGHTMARE MODE** `feature--activity-templates`
  * _WIP Files_:
    * `USERNAME.github.io:release--0.0.1`
      * `specs/`
        * `full--desktop.png` -- alphabetically first
        * `full--tablet.png`
        * `full--mobile.png` -- but start here
        * `*.png` -- to Skitch it up!
      * `src/`
        * `scss/`
          * `_grid.scss` -- Don't Overthink It!
          * `main.scss` -- `@import "grid";` will do
        * `grid.html` -- to show off your `_grid.scss` of course!
        * `index.html` -- if you're ambitious enough for **BEAST MODE**
    * `TIY-Github:release--0.0.3`
      * `.gitignore`
        * add `bower_components`!
      * `bower.json` -- via `bower init`
        * dependencies via `bower install --save`:
          * `jquery`
          * `lodash`
          * `modernizr`
          * `normalize.css`
      * `src/`
        * `js/main.js` -- where does all that JavaScript go even?
        * `scss/*.scss` -- in case there's more (S)CSS to write...
        * `index.html` -- using our `bower_components` and new `<template>` tags!
* **Journal Week 5**
  * [ ] Reflective
    * [ ] 2 :1+: given
    * [ ] 2 :1+: received
  * [ ] Tutorial
    * [ ] 2 :1+: given
    * [ ] 2 :1+: received
  * [ ] Resource
    * [ ] 2 :1+: given
    * [ ] 2 :1+: received
* **Don't Stop Skitching**
    * [ ] Chose a blog layout _and **linked** to it_
    * [ ] Skitched it at three views: desktop, tablet, mobile
    * [ ] And uploaded to `specs/`
* **GitHub Revolution Evolution**
  * [ ] All Your Data is Belong To Us
  * [ ] Templatize me, Cap'n!
  * **BEAST MODE** - Fill in that `<template>`...
```

### Journal, Week 5
You know the routine: work on your reflective, tutorial, and resource entries. Then give 2 x :+1:s and get 2 x :+1:s for each.

### Don't Stop Skitching

**MERGE YOUR PRs** for open features and your release; please be sure to update your version number at the end of each release.

In your `USERNAME.github.io` repo, create a new branch called `release--0.0.1`. Yesterday's **BEAST MODE** becomes today's normal. If you need a refresher:

> If you were designing a blog, what would you want it to look like? Check out some templating sites like [ThemeForest](http://themeforest.net/) and [WrapBootstrap](https://wrapbootstrap.com/) and find a template you like. **DO NOT BUY IT.** Instead, check out the demos and Skitch the layout you decide on. Be sure to Skitch it for different responsive views as well. Then upload the Skitches to `specs/` in your `USERNAME.github.io` repo. You'll be building this soon!

Create a branch called `feature--responsive-specs` for your work on this part. _Review those sketches with a peer and incorporate their feedback!_

### Don't Overthink It!

Now give yourself a refresher on [that "Don't Overthink It Grid" approach](https://css-tricks.com/dont-overthink-it-grids/). Now that you've had some time with Sass, I bet [the SCSS he wrote](http://codepen.io/chriscoyier/pen/eGcLw) will make a lot more sense.

Once you've merged your last feature branch into the release, open a _new_ branch named `feature--responsive-grid`. Create a copy of `index.html` named `grid.html` in `src/` that _just_ contains the HTML you need for a simple 12-column grid system. Write the SCSS for that in `src/scss/_grid.scss` and link it into `main.scss` _above_ all your other files.

#### BEAST MODE

When will then be now? Soon!

Since you need an _additional_ challenge, how about get started on the responsive layouts for your blog theme? Create a feature branch named `feature--responsive-layout` and build your basic responsive layouts using your grid styles and classes for _all three views_. Don't go crazy! Just focus on the wrappers and major layout blocks!

### GitHub Revolution Evolution

This revolution is far too static. It's time to evolve... Let's start using _your profile data_ for these exercises!

#### All Your Data is Belong To Us

In a new feature branch named `feature--profile-template`, use [`jQuery.getJSON`](https://api.jquery.com/jQuery.getJSON) to get the _your data_ that you cached from the API. Remember: fetch the _cached_ data in `api/github/`, _not_ the live API... _yet._ Then use _just_ jQuery to replace the placeholder values -- `{{login}}` and `{{company}}`, etc -- with your API data.

It would be _better_ to use `lodash.template` in conjunction with jQuery... Copy your profile HTML into a `<template>` tag with an `id`, get the contents of that tag with jQuery and feed that to `lodash.template`, capturing the results in a variable. What _type_ is the value in that variable? What can you do with it? Answer in comments on your _WIP Issue_.

#### Templatize me, Cap'n!

Create a new branch from `release--0.0.2` named `feature--repo-list-placeholders` for your work. Convert your markup for _one_ repository list into a reusable chunk: the basic markup that _all_ the repositories need. Then, replace the text with placeholders -- `{{name}}`, `{{stars}}` -- that match the API data fields these values come from.

When you're done, reviewed, and merged, open a new branch called `feature--repo-list-templates` and wrap all of that placeholder-laden markup in a `<template>` tag. Give it a descriptive (and unique!) `id` attribute so you can pick them out of the DOM with jQuery.

Pluck the HTML contents of the `<template>` tag and pass it through `lodash.template`. Assign the result of to a variable! Again, what is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item? What do we need to _give_ that value to do that?

Now do it!

#### BEAST MODE

But wait! Isn't there _more_ data? If you check out the Reference Implementation for the "Activity" tab, you'll note a very familiar-looking layout. Is that a... _Vertical Timeline!?_

Use the techniques you've just learned to put together a layout for the timeline using _your_ activity data in a branch named `feature--activity-layout`. Then give yourself a `<template>` with placeholders to work from in `feature--activity-placeholders`. Finally, use jQuery and lodash to fill the timeline with activity data from your `activity.json` feed in a branch named `feature--activity-templates`. Good luck!
