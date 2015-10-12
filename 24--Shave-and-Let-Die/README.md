# 24 -- Shave and Let Die

## Rituals (~1h 30m)

* **Standup Meeting** (~5m)
* **Homework Review** (5m x 6pairs ~= 45m?)
* **Three Little Things** (~30m)

## Lecture (~1h 30m)

* **Etsy.com and the Etsy API** (~30m)
* **Shave that Yak Together!** (~30m)
* **Project Planning** (~30m)

## Afternoon Grok (~30m) @ 14:30

## Assignment

```markdown
* [ ] **Yak Shaving**
  * [ ] _WIP Issue_
    * [ ] link to PRs in `USERNAME.github.io`:
      * from `journal-week-6` into `master`
      * **BEAST MODE** from `release--*` into `master`
      * **BEAST MODE** from `feature--*` into `release--*`
    * link to PRs in `TIY-GitHub`:
      * [ ] from `release--*` into `master`
      * [ ] from `feature--responsive-yaks` into `release--*`
      * **BEAST MODE** from `feature--*` into `release--*`
    * link to PRs in `TIY-Catalog`:
      * [ ] from `feature/planning-*` into `TIY-Durham:develop`
      * [ ] from `TIY-Durham:develop` into `develop`
  * [ ] _WIP Branch_
    * `USERNAME.github.io`
      * [ ] `journal-week-6`
      * **BEAST MODE** `release--*`
      * **BEAST MODE** `feature--*`
    * `TIY-GitHub`
      * [ ] `release--*` from `master`
      * [ ] `feature--responsive-yaks` from `release--*`
      * **BEAST MODE** `feature--*` from `release--*`
    * `TIY-Catalog`
      * [ ] `feature/planning-*` from `develop`
  * [ ] _WIP Files_
    * `USERNAME.github.io:journal-week-6`
      * `_posts/`
        * Reflective Outline
        * Tutorial Outline
        * Resource Post (done)
    * `TIY-GitHub:release--*`
      * `specs/` -- what's different?
    * `TIY-Catalog:feature/planning-*`
      * `specs/` -- Skitch _your_ features!
* [ ] **And the Beat Goes On**
  * _Outline_ for Reflective Journal on Week 6
  * _Outline_ for Tutorial Journal
  * _Draft_ for Resource Journal, due Tuesday!
* [ ] **Reading APIs: Etsy**
* [ ] **Shaping Up With Angular JS** -- Speed Reading!
* [ ] **From GitHub With Love**
  * Shave that Angular Yak...! That's gonna smart...
  * **BEAST MODE** Get some more features merged!
  * **NIGHTMARE MODE** Get to 1.0!
* [ ] **Shave and Let Die**
  * Pick a feature, _plan_ a feature!
  * Got some User Stories? How about an Issue for that?
  * Better get some checkboxes on that...
  * Don't forget to add your `specs/`!
  * Hey, aren't you supposed to link that Issue?
```

### And the Beat Goes On

You know the drill by now, don't ya? 1 reflective journal, 1 tutorial journal, 1 resource (bookmark) journal in a branch of your `USERNAME.github.io` repo called `journal-week-6`... which should be _from_ `master` with a PR back _into_ `master`. Since you've now got such a nice place to put all those `_posts/`, why not put 'em there?

Reminder about format:

* A **Reflective Journal** is _NOT_ a play-by-play of the last week, it's a reflection on what you've learned and how you've been challenged and grown. It shouldn't be more than 3 to 5 paragraphs; mention and link to your projects for the week!
* A **Tutorial Journal** starts with a clear introduction that explains what you're about to tell the reader, framing the problem appropriately, moves to a step-by-step walkthrough (with screens and code-snippets) of the process, and finishes by reiterating what problem they solved and how.
* A **Resource Journal** gives a link to a _specific_ external resource with a brief explanation of what the reader will find there; think of it as a commit message tied to a bookmark.

If you're linking your **Resource Journal** to the top-level page of some API documentation, you're doing it wrong. Drill down to a specific piece of the documentation instead and explain why and when it's useful.

If you have more than 5 steps, your **Tutorial Journal** might be too long for our time constraints. Try splitting it up into a series of posts that you can continue working on and put any additional ideas in your parking lot for later.

#### BEAST MODE

Bet you've still got some work on that awesome template, don't you? Why not start working on another incremental release in the meantime? Maybe just a _tiny_ feature?

### Reading APIs: Etsy

As you can tell, we'll be working with [the Etsy API documentation](https://www.etsy.com/developers/documentation) this week to build out our catalog. Prepare yourself to answer the following questions about the API; more coming tomorrow!

* **How do I make API requests?**
  * What is the base URL for all requests?
  * Are there any headers or query parameters required?
  * What kind of response should I expect?
* **How does the API handle authentication?**
  * Do I _need_ to authenticate? with user credentials?
  * What can I do with an unauthenticated request?
  * How can I authenticate my request? (what methods)

### Shaping Up with Angular JS

Throughout the week, you'll be assigned a piece of [_Shaping Up with Angular JS_ on CodeShool](https://www.codeschool.com/courses/shaping-up-with-angular-js) to work through. For tonight, play through the _entire course_ by watching the videos and just taking the answers on the challenge. Type them yourself -- quickly -- to move forward. Take a screenshot of your badge for the course when you complete and attach it to your _WIP Issue_.

### From GitHub With Love

Last week you built out your GitHub profile and realized... _Github doesn't use breakpoints_. There are _no_ Media Queries whatsoever. [Use the Devive Inspector in Chrome Dev Tools](https://developer.chrome.com/devtools/docs/device-mode) to switch your [User-Agent (UA) identifier](https://en.wikipedia.org/wiki/User_agent) to a mobile device and reload into a whole new world. That's _adaptive_ rather than _responsive_, and that's a problem.

_Let's fix it!_

Your _solo_ assignment for the week is to make your GitHub profile _responsive_ by adding Media Queries... and a little invention. Tonight, document the modifications you'll need to make in your `specs/` folder. Cut a new `release--*` branch from `master` and a new branch from _that_ called `feature--responsive-yaks` for this work.

#### BEAST MODE

If you're looking for trouble, maybe you should clean up that GitHub profile a little in some additional feature branches? Remember, _use as little markup as you need_ and pick classes and tags that _convey meaning_.

### Planning is Important!

This week we're going to build a couple of pages from [Etsy.com](https://etsy.com), and that means we need some yaks shaved! Fork [the class project](https://github.com/TIY-Durham/TIY-Catalog) and then clone your fork locally. Pick a feature from our User Story list and claim it in the Slack channel. Convert it to an Issue in the main repo and assign it to yourself. Could use some more details... Maybe a checklist...

Create a feature called `feature/planning-YOUR-FEATURE`, where `YOUR-FEATURE` is the name of your feature, of course. Skitch some screenshots of your feature in `specs/` and open a PR back to `TIY-Durham:develop`.

Logistically, you'll be working in 3-person teams this week. Form teams yourselves, but run them by us for approval. Try to work with folks that you haven't already worked with.

We should start with [the "Trending" page](https://www.etsy.com/trending) but quickly explore [a single "Product Detail" page](https://www.etsy.com/listing/85834922/). Etsy also  [lists products that match a search result](https://www.etsy.com/search) and
[curates their own "Featured Collections"](https://www.etsy.com/featured/kids-and-babies-costumes). Let's see how far we can get!

#### Install-fest!

We've got new tools this week -- [GulpJS](http://gulpjs.com) and a host of plugins. You should already have installed GulpJS globally, but if not, go ahead and do so. No need to assign them as dependencies _yet_... we'll do that together.
