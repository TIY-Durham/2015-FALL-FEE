# 08 -- Once Upon a Time on the Web

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Weekly QUIZ!** (~15m)
* **Parking Lot Topics** (~15m)
* **Homework Review** (~30m)

## Parking Lot Review

## Agenda

Install-Fest!

* jQuery
* Skitch
* Lodash?

## Assignment

```markdown
* **Yak Shaving**
  * [ ] Create a _WIP Issue_ in the class repo:
    * [ ] named `08 -- YOUR NAME` where `YOUR NAME` is, well... your name.
    * [ ] with this checklist as the description
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create or update a _WIP Branch_ in:
    * [ ] `USERNAME.github.io` named `journal-week-2` from `master`
    * [ ] `TIY-Assignments` named `08--once-upon-a-time` from `master`
  * [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.github.io` in branch `journal-week-2`
      * `journal-week-2.md` (or some other creative name)
    * `TIY-Assignments` in branch `08--once-upon-a-time`
      * `NestedAccordion/`
        * `css/*.css` -- delete everything!
        * `css/styles.css` -- where did this come from?
        * `index.html` -- update them `<link>`s
      * `ViewModeSwitch/`
        * `css/*.css` -- clear out, partner!
        * `css/styles.css` -- I need to make this?
        * `index.html` -- un-break my `<link>`s
      * `MultiColumnForm/`
        * `css/*.css` -- can you guess?
        * `css/styles.css` -- created!
        * `index.html` -- fix me, please!
      * `VerticalTimeline/` -- downloaded
        * `css/*.css` -- death to CSS!
        * `css/styles.css` -- got this
        * `index.html` -- aftermath
      * `TodoMVC/`
        * `js/app.js` -- start writing EnglishScript!
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-2` into `master`
    * [ ] `TIY-Assignments` from `08--once-upon-a-time` into `master`
    * [ ] `StudentRoster` from `USERNAME:master` into `TIY-Durham:master`
* **Journal, Week 2**
  * [ ] Brainstorming/Outline
  * [ ] 1x :+1: + feedback!
  * [ ] 2x :+1: + feedback!
* **Reading CSS**
  * **We can rebuild them...**
    * [ ] _CLOSED THAT LAST PR!_
    * [ ] Checked out `master` in `TIY-Assignments`
    * [ ] Updated `master` from GitHub with `git pull`
    * [ ] Created _WIP Branch_ from `master`
    * [ ] `ReadingJavaScript/README.md => CheatSheets/JavaScript.md`
    * [ ] Created and committed `CheatSheets/CSS.md`
    * [ ] Pushed to GitHub and opened _new_ PR!
  * **Ready to be ready...**
    * [ ] Read _Learn Layout_ and noted CSS properties
    * [ ] Documentation start!
    * [ ] First 2 properties!
    * [ ] Up to 5 properties!
    * [ ] And then there were 8!
    * [ ] All 10 in the bag!
* **GitHubbing to Know You**
  * [ ] Updated local `master` from `upstream:master`
  * [ ] Resolved conflicts...? WHY!?
  * [ ] Created new issue in `student-roster`...
* **TodoMVC and You!**
  * **What does it do? How does it do it?**
    * [ ] I can add a task to my todo list so that I can remember to do it later.
    * [ ] I can edit a task on my todo list so that I can correct typos.
    * [ ] I can mark a task as complete so that I remember that I have done it.
    * [ ] I can mark a completed task as incomplete so that I actually complete it this time.
    * [ ] I can delete a task from my todo list so that I don't have to see it any more.
    * [ ] I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
    * [ ] I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
  * **BEAST MODE** -- Stubbing the Night Away!
```

### Journal, Week 2

Start on your next journal entry, reflecting on the things you've learned from last week. While the full article is due on Thursday again, you should have _something_ for tomorrow: an outline, some bullet points, even a super sloppy Rough Draft. You need to give us the **tl;dr** on your journal entry during homework review. The suggested topics from last week are still valid, but here are some others:

* Describe the MVC pattern of software design, as you understand it.
* Explain the principle of Encapsulation and give some examples from your own code.
* How does scoping work in JavaScript programs? How do the `function` and `var` keywords affect it?

### Reading CSS

Let's do a little remodeling. I'll be honest: I never liked that `ReadingJavaScript` name. Let's clean up a bit. First, make sure you merge your open PR and update your local `master` branch from GitHub. Then, create your _new WIP Branch_ with CLI `git`. Next, let's use [a _new_ `git` command to rename some stuff: `git mv`](http://git-scm.com/docs/git-mv):

    git mv ReadingJavaScript/README.md CheatSheets/JavaScript.md

Your `git status` should reveal that you have staged changes waiting to be committed: a rename. Commit those changes into your _WIP Branch_ and push them to GitHub. That's enough to open a PR...!

Good news! No more _JavaScript_ definitions... Now we've got CSS! First read [Learn Layout](http://learnlayout.com) -- don't sweat, it's less than an hour -- and make some notes on the CSS properties that are used. You should be able to get at least 10. Look them up in [the MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and start building your cheat sheet for CSS in `CheatSheets/CSS.md`

For some more in-depth explanation of what CSS is, how it works, and what it's good for, check out [the MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS). You'll run across a lot of new properties and examples that you can use in your documentation, which we'll be adding to throughout the week.


#### Starting Point

```markdown
# Reading CSS

## Selectors

## Properties

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
```

### Githubbing to Know You: Now It's Personal

No two people can exist in this world without conflict. It's in our nature. So, too, with software. We learned some nifty conflict resolution techniques that might help you in future assignments... possibly in this one! Update your local copy of the roster from _upstream_ (you remember what that is, right?) and then try to merge in one of our problem children. You'll need to add their fork as a remote, fetch and attempt a merge. When you run into conflict (and you will), resolve the conflict with the techniques we discussed. If that doesn't work, ask the Internet; it may know something about conflict.

When you're all de-conflicted, push your results up to your fork and open a new PR. We'll see how you did on Tuesday, and you'll get a _new_ assignment due on Thursday.

### TodoMVC and You!

Read about [CRUD and BREAD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) and [User Stories](https://en.wikipedia.org/wiki/User_story) to help guide you on the path to specification enlightenment. Using [the reference implementation](http://todomvc.com/examples/vanillajs/) as a demo, break down the functionality of the application into baby steps and write them as code comments in `TodoMVC/js/app.js`. _Be as simple and specific as possible!_

_Start with the User Stories provided in your **Starting Point** below._

#### BEAST MODE

Start translating those Baby Steps into _empty Function definitions_: just the names, parameters, and an appropriate doc-block that describe the expected inputs, outputs and side-effects of the Function. These are called ["stubs"](https://en.wikipedia.org/wiki/Method_stub) in programming and can help specify the system to be built.

#### Starting Point

```javascript
// User Stories
// I can add a task to my todo list so that I can remember to do it later.
// I can edit a task on my todo list so that I can correct typos.
// I can mark a task as complete so that I remember that I have done it.
// I can mark a completed task as incomplete so that I actually complete it this time.
// I can delete a task from my todo list so that I don't have to see it any more.
// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
```
