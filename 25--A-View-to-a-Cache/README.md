# 25 -- A View to a Cache

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Three Little Things** (~30m)

## Agenda

* **Progress Review**
* **Git with the Flow!**
  * Ready to take branches to the next level?
  * First, we create a _new_ branch called `develop` based on `master`.
  * All `feature--*` branches merge into `develop` via PRs.
  * To merge `develop` into `master`, we cut a new `release` branch.
  * Don't forget to bump the version number!
  * And tag `master` when that branch is merged with the version number.
* **Hello, Angular JS!**
  * What is Angular JS?
    * Client-side JavaScript Framework
    * 2-way Data Binding: Reactive View
    * Modular, Service-Oriented Architecture
    * Dependency Injection FTW!
  * How do I use it?
    * `bower install --save angular`
    * `wiredep -s index.html`
    * in `src/js/main.js`: `angular.module('module-name', [ ])`
    * Maybe add a callback with a tracer bullet? Anything yet?
    * in `src/index.html`: `ng-app="module-name"`
    * What does _that_ do for me? Placeholders anyone...?
  * Attaching data to the View? Use the `$scope` service... for now.
    * in `src/js/main.js`: `.run(function($scope){ })`
    * Attach some data to the `$scope` as keys...
    * ...and watch the placeholders update automatically.
  * What about my JSON data? Can I use `jQuery.getJSON` like before?
    * Yes, but `$scope`
    * Yes, but no. Use [`$http`](https://docs.angularjs.org/api/ng/service/$http) instead...
    * Well, that was different... Try `.success` instead.
* **Intermission**
* **Project Planning, Part 2**

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
* [ ] **And the Beat Goes On**
  * _Rough Draft_ for Reflective Journal on Week 6
  * _Rough Draft_ for Tutorial Journal
  * _Final Draft_ for Resource Journal, due Tuesday!
* [ ] **Reading APIs: Etsy**
* [ ] **Shaping Up with Angular JS**
  * [ ] Completed Level 1!
  * [ ] Completed Level 2!
  * [ ] Pics or it didn't happen!
* [ ] **For Your GitHub Only**
* [ ] **Etsy Goes On**
```

### Journal, Week 6
Keep writing! Tomorrow you should have your final draft of your **Resource** journal and rough drafts for your **Reflective** and **Tutorial** journals.

### Reading APIs: Etsy

Here's another batch of questions to guide your research on the Etsy API. Chances are high that you'll get asked these questions in class tomorrow or that you'll need them for your homework.

  * **What Resource in the API represents...**
    * an individual product?
    * a group or collection of products?
    * images associated with a product?
    * sizes and colors for a product?
  * **What actions and endpoints exist for each of these Resources?**
  * **What parameters do each endpoint require or accept?**
  * **What fields are returned for each Resource, specifically:**
    * an individual product?
    * a group or collection of products?
  * **What _additional_ fields can be requested for each?**

### Shaping Up With Angular JS

Last night was a (very) quick tour of the course. Tonight is reinforcement: play through (as in, try to complete without help) levels 1 and 2. You've got a lot to do tonight, so don't spend too much time here. If you get stuck, buy the answer and move on. Tomorrow you'll do the same with levels 2 (again) and 3. It'll come back around.

### For Your GitHub Only

Keep building your _Responsive_ GitHub page. Last night's BEAST MODE is tonight's NORMAL. Clean up that GitHub profile a little in some additional feature branches. Remember, _use as little markup as you need_ and pick classes and tags that _convey meaning_.

### Etsy Goes On

Elect a single Team Lead for tonight. Formulate a group plan of attack for building out _at least one feature per person_ with HTML, (S)CSS, and some Angular JS placeholders, but with one catch: **the Team Lead cannot write any code.** His or her job is to pair up with each of the other two, lead code reviews, and ensure the submitted work matches the joint plan. That person _also_ has work to do _outside_ of this project, so resist the temptation to make a ton of headway at the expense of your team.

The Team Lead role will rotate, so you'll definitely get a chance to be one. If that's you this time around, don't waste your time waiting around for code to review: refine the plan, document the API for the next phase of development, pro-actively pair up with your teammates... make the most of your time to maximize _their_ productivity.
