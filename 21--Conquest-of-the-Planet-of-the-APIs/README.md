# 21 -- Conquest of the Planet of the APIs

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda
* lodash
* **I am not a `<template>`...! I am a HTML element!**
  * What is [template processing](http://en.wikipedia.org/wiki/Template_processor)?
  * How would I build that with jQuery?
  * Why would I ever _use_ that?

## Assignment

```markdown
* **Yak-Shaving**
  * _WIP Issue_: `21 -- YOUR NAME`
    *  _WIP Branch_:
      * `USERNAME.github.io:journal-week-5`
      * `TIY-Github`
        * `develop`
        * `feature/*`
  * _WIP Files_:
    * `USERNAME.github.io`
      * reflective journal
      * tutorial journal
      * bookmark journal
    * `TIY-Github`
      * `src/`
        * `index.html`
        * **`scss/main.scss`**
        * **`scss/*.scss`**
        * **`css/.gitignore`**
        * **`js/main.js`**
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
    * [ ] Chose a blog layout
    * [ ] Skitched it at three views: desktop, tablet, mobile
    * [ ] And uploaded to `/specs`
* **GitHub Revolution Evolution**
  * [ ] All Your Data is Belong To Us
  * [ ] Templatize me, Cap'n!
  * **BEAST MODE** - Fill in that `<template>`...
```

### Journal, Week 5
You know the routine: work on your reflective, tutorial, and resource entries. Then give 2 x :+1:s and get 2 x :+1:s for each.

### Don't Stop Skitching

**MERGE YOUR PRS.** In your USERNAME.github.io repo, create a new branch called `release--0.0.1`. Yesterday's BEAST MODE becomes today's NORMAL MODE. If you need a refresher:

>If you were designing a blog, what would you want it to look like? Check out some templating sites like [ThemeForest](http://themeforest.net/) and [WrapBootstrap](https://wrapbootstrap.com/) and find a template you like. **DO NOT BUY IT.** Instead, check out the demos and Skitch the layout you decide on. Be sure to Skitch it for different responsive views as well. Then upload the Skitches to `/specs` in your `USERNAME.github.io` repo. You'll be building this soon!

### GitHub Revolution Evolution

#### All Your Data is Belong To Us

Use `jQuery.getJSON` to get the data that you fetched from the API onto your page. Fetch the _cached_ data in `api/github/`, _not_ the live API. Next, replace all of the text in your page with placeholders -- `{{login}}` or `{{repo-name}}` -- that you'll eventually replace with data from the API. Finally, use jQuery to replace the placeholder values with your data.

And while we're at it, didn't you fetch your own data from the API, too? What if you replaced your placeholders with _that_ data instead? Could you do both? Provide a `<select>` element that allows you to _choose_ which data to load.

Create and work in feature branches for each step: `feature/fetching-data`, `feature/adding-placeholders`, `feature/replacing-placeholders`. Merge them down into `develop` as you finish each.

#### Templatize me, Cap'n!

Create a new branch from `release--0.0.2` named `feature--repo-list-placeholders` for your work. Convert your markup for each repository list into reusable list-item pieces. Start by replacing _one_ of your repo list items with placeholders -- `{{repo.name}}`, `{{repo.stars}}` -- that match where in the API data these values originate. Put this work in the `feature/repo-list-placeholders` branch.

When you're done, reviewed, and merged, open a new branch called `feature/repo-list-templates` and wrap all of that placeholder-laden markup in `<template>` tags. Give them descriptive (and unique!) `id` attributes so we can pick them out of the DOM with jQuery.

Pluck the HTML contents of each `<template>` tag and pass it through the `template` function in Lodash. Don't forget to assign the result of each to a variable! What is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item?

#### BEAST MODE

If you can _print_ the HTML for a list item, can you add that HTML to the page? Anywhere? What about _in the right place_...?
