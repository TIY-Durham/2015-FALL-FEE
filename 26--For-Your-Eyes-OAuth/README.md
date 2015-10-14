# 26 -- For Your Eyes OAuth

## Rituals (~1h)

* **Standup Meeting** (~5m)
* **Code Review** (~45m)
* **Intermission** (~10m)

## Agenda (~1h)

* **Git with the Flow!**
  * Ready to take branching to the next level?
  * First, we create a _new_ branch called `develop` based on `master`.
  * All `feature--*` branches merge into `develop` via PRs.
  * To merge `develop` into `master`, we cut a new `release` branch.
  * Don't forget to bump the version number!
  * And tag `master` when that branch is merged with the version number.
  * Holy automation, Batman, isn't there a better way?
  * `brew install git-flow-avh`
  * `git flow init`
* **Even more Angular JS...**
  * Attaching data to the View? Use the `$scope` service... for now.
    * in `src/js/main.js`: `.run(function($scope){ })`
    * Attach some data to the `$scope` as keys...
    * ...and watch the placeholders update automatically.
    * Even if we introduce a little delay with `setTimeout`?
    * Crud. Gottta kick over the `$digest` cycle manually. Lame.
    * This seems like a pretty common problem...
  * What about my JSON data? Can I use `jQuery.getJSON` like before?
    * Yes, but `$scope` isn't _that_ magical: `$apply` or forcing a `$digest` is lame.
    * So yes-but-no. Use [`$http`](https://docs.angularjs.org/api/ng/service/$http) instead...
    * ...and mind the gap: `then` callbacks get something different.

## Project Planning (~30m)

* What have we completed?
* What do we work on next?
* What is in the way?

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_ with links to:
    * your PRs in `USERNAME.github.io`
    * your PRs in `TIY-GitHub` for features and releases
    * your PRs in `TIY-Catalog` for `feature--*` into `develop`
  * _WIP Branch_:
    * `USERNAME.github.io:journal-week-6`
    * `TIY-GitHub`:
      * `release--*` -- if you're ready for another release
      * `feature--*` -- for any new features
    * `TIY-Catalog`:
      * `feature--*` -- for any feature you're working on
* [ ] **Journal, Week 6**
  * Resource BEEN DONE.
  * Reflective done by Thu!
  * Tutorial drafting...
* [ ] **Reading APIs: Etsy**
* [ ] **Shaping Up with Angular JS**
  * Level 2 complete (again)!
  * Level 3 complete!
  * Pics or it didn't happen!
* [ ] **The Man with the Golden GitHub**
* [ ] **Etsy Goes Marching On**
```

### Journal, Week 6

You know what to do. Tomorrow you should have your final draft of your **Reflective** journal and some rough drafts for your **Tutorial** journal. Your **Reosource** post was done already. Right?

### Reading APIs: Etsy

The data from your page has to come from _somewhere_ in the API, right? Well, the trick here is that the way the data is represented in the API may not precisely match the way it's presented on the page. You'll want to research the following questions:

* For the product list (category) page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* On the product detail page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* Identified for each:
  * API endpoint
  * required query params
  * additional params needed (`fields`, `includes`)
  * sample data returned

Make a sample request using [Postman](http://getpostman.com) or `curl` to inspect real responses from the API to verify your hypotheses from the documentation. These findings could be valuable to your team!

### Shaping Up with Angular JS: Round 2

Continuing with our exercise with Angular JS, work through levels 2 (again) and 3 of _Shaping Up_ on CodeSchool. Try to work through the challenges on your own, but don't get bogged down.

### The Man With the Golden GitHub

Keep building your _Responsive_ GitHub page. Tonight, try to get the tablet view done. After merging, cut a new `release--*` branch from `master` and a new branch from that called `feature--responsive-tablet`.

### Etsy Goes Marching On

**Time to switch Team Leads!**

If you're the _new_ lead, no coding for you! You must support the other two team members with planning, API reading, data analysis, and code review. Look over their shoulders and help them avoid painful syntax errors and split your time between them. There's plenty to do without writing anything.

If you _were_ the lead, pick up one of the existing, open tasks _before_ starting a new task. That doesn't have to be the new lead's old task, either. If your third teammate is stuck on something: trade. Rely on your _new_ Team Lead for direction and support.

Between the three of you, you should tackle  _at least one feature per person with HTML, (S)CSS, and some Angular JS placeholders_. With your new knowledge of the Etsy API and the `$http` service, load some data from your cache in `apis/etsy/` and pull it into your page to replace some placeholders.
