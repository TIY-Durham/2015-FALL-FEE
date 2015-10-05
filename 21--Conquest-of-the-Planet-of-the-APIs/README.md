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
* [ ] **GitHub Revolution**
  * [ ] `feature/repo-list-placeholders`
    * [ ] Repos got names, yo.
    * [ ] What about a description?
    * [ ] My god, it's full of stars...
  * [ ] `feature/repo-list-template`
    * [ ] Convert to `<template>`!
    * [ ] Can I see your `id`, please?
    * [ ] Eat that `<template>`!
    * [ ] Now spit it back out!
  * **BEAST MODE** - Fill in that `<template>`...
```

### Journal, Week 5
You know the routine: work on your reflective, tutorial, and resource entries. Then give 2 x :+1:s and get 2 x :+1:s.

### GitHub Revolution

#### Templatize me, Cap'n!

Convert your markup for each repository list into reusable list-item pieces. Start by replacing _one_ of your repo list items with placeholders -- `{{repo.name}}`, `{{repo.stars}}` -- that match where in the API data these values originate. Put this work in the `feature/repo-list-placeholders` branch.

When you're done, reviewed, and merged, open a new branch called `feature/repo-list-templates` and wrap all of that placeholder-laden markup in `<template>` tags. Give them descriptive (and unique!) `id` attributes so we can pick them out of the DOM with jQuery.

Pluck the HTML contents of each `<template>` tag and pass it through the `template` function in Lodash. Don't forget to assign the result of each to a variable! What is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item?

#### BEAST MODE

If you can _print_ the HTML for a list item, can you add that HTML to the page? Anywhere? What about _in the right place_...?
