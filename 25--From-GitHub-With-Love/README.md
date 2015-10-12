# 25 -- From GitHub with Love

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Three Little Things** (~30m)

## Agenda

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
    * in `src/index.html`: `ng-app="module-name"`
    * What happened to all our placeholders?
  * Attaching data to the View? Use a Controller...
    * in `src/js/main.js`: `.controller('MainController', function(){ })`
    * in `src/index.html`: `ng-controller="MainController"`
    * What goes inside the Controller?
    * Attach data to `MainController`... But how?
    * Add `as app` to `ng-controller` directive...
    * ...and change placeholders.
  * What about my JSON data? Can I use `jQuery.getJSON` like before?
    * Yes, but what is `this` inside of `then`...?
    * Yes, but no. Use [`$http`](https://docs.angularjs.org/api/ng/service/$http) instead...
    * Well, that was different... Try `.success` instead.
* **Intermission**
* **Shave that Yak...**
  * `yo gulp-webapp`
    * `tree | less`
    * `package.json`
    * `bower.json`
    * `gulpfile.babel.js` (WTF?)
      * What is `babel`? AKA `npm home babel`
      * [JavaScript is an ogre...](https://en.wikipedia.org/wiki/ECMAScript)
      * [Ogres are like onions...](http://shaunlebron.github.io/solar-system-of-js/#0)
      * Welcome to [ES6 / ES2015 / hell](https://babeljs.io/docs/learn-es2015/)
    * Okay, but can you read it?
      * `gulp serve`
      * `gulp serve:test`
      * `gulp html` (aka `build`)
      * `gulp serve:dist`
  * `bower install --save angular`
    * in `app/scripts/main.js`:
      * define module `tiy-gradebook`
      * define controller `MainController`
    * in `app/index.html`:
      * attach `tiy-gradebook` with `ng-app` directive
      * attach `MainController as app` with `ng-controller` directive

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  * _WIP Branch_:
  * _WIP Files_:
* [ ] **And the Beat Goes On**
  * _Rough Draft_ for Reflective Journal on Week 6
  * _Rough Draft_ for Tutorial Journal
  * _Final Draft_ for Resource Journal, due Tuesday!
* [ ] **READING**
  * checkpoints
* **Shaping Up with Angular JS**
  * [ ] Completed Level 1!
  * [ ] Completed Level 2!
  * [ ] Pics or it didn't happen!
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
  * **What is a `Taxonomy` Resource?**

### Shaping Up With Angular JS

Last night was a (very) quick tour of the course. Tonight is reinforcement: play through (as in, try to complete without help) levels 1 and 2. You've got a lot to do tonight, so don't spend too much time here. If you get stuck, buy the answer and move on. Tomorrow you'll do the same with levels 2 (again) and 3. It'll come back around.
