# 28 -- The Man With the Golden GitHub

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `28 -- YOUR NAME`
    * Links to PRs in:
      * `USERNAME.github.io`
        * `journal-week-7` into `master`
        * `feature/*` into `remodeling`
        * `remodeling` into `master`
* [ ] **Journal, Week 7**
  * created `journal-week-7` from `master`
  * flag in the sand for:
    * reflective journal
    * tutorial journal
    * bookmark journal
  * created feature branch x3: `git flow feature start`
* [ ] **Reading APIs: Firebase & Restangular**
  * **Firebase REST API**
    * What operations does the Firebase REST API support?
    * Do I need to authenticate with Firebase to read or create data?
    * What format does Firebase expect data to be in?
  * **Restangular**
    * How do I configure a REST-ful API like Github?
    * How would I request a list of...
      * ...Repos for the class Org?
      * ...Issues for the class Repo?
      * ...Issues for a specific Milestone?
  * **`ngRouter`**
    * How do I define...
      * ...a route for my application with `ngRouter`?
      * ...dynamic pieces (params) to routes?
      * ...the template to load for a route?
      * ...the controller to trigger for a route?
    * How do I retrieve...
      * ...the params from a route in a controller?
      * ...the controller for a route in the view?
* [ ] **Don't Stop Believing**
* [ ] **Angularize GitHub**
```

### Journal, Week 7: Any Way You Want It

Welcome to Week 8! Let's have a look back on Week 7 and your experience as Team Leaders. In your reflective journal this week, relate what you _observed_ working _as_ Team Lead yourself and working _with_ a Team Lead. No need to name anyone; worry about what you've _learned_ later. Get someone who _wasn't_ on your team to review for you this week.

I'm sure there are some valuable tools and techniques you've leared over the last 7 weeks... How about a short tutorial journal? CSS grids are awesome? Write about 'em! Using Sass as a programming language? Tell us how! Just figured out how to make that tabbed panel interface _exactly right_? Share with the world!

While we're on the subject of tools, drop us a bookmark to one of them and write a little paragraph-long **tl;dr** on it.

### Reading APIs: Firebase & Restangular

#### Firebase REST

We'll need somewhere to save our data for this week's application, and we don't have a ready API that can provide the data for us. Looks like we'll have to make our own with Firebase! Start with [the Firebase REST API docs](https://www.firebase.com/docs/rest/) and delve into the supporting documentation as necessary.

 * What operations does the Firebase REST API support?
 * Do I need to authenticate with Firebase to read or create data?
 * What format does Firebase expect data to be in?

#### Restangular

While we could totally use `$http` to interact with our Firebase apps, [the Restangular library](https://github.com/mgonto/restangular) makes interacting with [REST-ful APIs](https://en.wikipedia.org/wiki/Representational_state_transfer) _much_ easier. The whole API for Restangular fits in a single `README`, so start looking over that.

 * How do I configure a REST-ful API like Github?
 * How would I request a list of...
   * ...Repos for the class Org?
   * ...Issues for the class Repo?
   * ...Issues for a specific Milestone?

#### `ngRouter` aka `angular-route`

The simplest library for routing URLs to Controller code and loading templates is `ngRouter`, which comes as the `angular-route` package from Bower. Take some time to review the API for `$routeProvider` and the examples in the official documentation.

 * How do I define...
   * ...a route for my application with `ngRouter`?
   * ...dynamic pieces (params) to routes?
   * ...the template to load for a route?
   * ...the controller to trigger for a route?
 * How do I retrieve...
   * ...the params from a route in a controller?
   * ...the controller for a route in the view?

### Don't Stop Believing...

Not quite done with your `USERNAME.github.io` layout? Identify at least 3 features that you intend to complete this week. Create or continue using `feature/*` branches with PRs into `remodeling`. Solicit peer reviews and merge your PRs as you go. Open a PR from `remodeling` into `master` so you can release your progress at the end of the week.

### Angularize GitHub!

Help me write this yak-shaving assignment, @al-the-x Wan Kenobi, you're my only hope.
