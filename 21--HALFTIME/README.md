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
  *  _WIP Branch_:
    * `USERNAME.github.io:remodeling`
    *  `TIY-Assignments:halftime`
  * _WIP Files_:
    * `USERNAME.github.io`
      * `_drafts/`
      * `_posts/`
      * `index.html`
      * `css/main.css`
      * `js/main.js`
      * `bower.json`
      * `package.json`
    * `TIY-Assignments`
      * `FullWidthTabs/`
      * `MultiColumnForm/`
      * `NestedAccordion/`
      * `QuotesRotator/`
      * `VerticalTimeline/`
      * `ViewModeSwitch/`
      * `.gitignore`
      * `package.json`
      * `bower.json`
      * `README.md`
* **HALFTIME Journal**
  * [ ] Time for some `remodeling`...
  * [ ] Moving day, `_posts`...!
  * [ ] You got that `yo h5bp`?
  * [ ] Bower and NPM, back in the saddle.
  * [ ] Browser? Sync'd.
  * [ ] Skitched that layout?
  * [ ] Breakpoints?
  * [ ] Made a plan...
  * [ ] Wrote it down...
  * [ ] Broke it up...
* **Blueprints Everywhere!**
  * [ ] Burnin' down the house!
  * [ ] Yo. H5BP, yo. Hey, yo, H5BP.
  * [ ] Skitchers gonna Skitch.
  * [ ] Planners gonna plan.
  * [ ] Yak shaved.
```

### HALFTIME Journal

Not really a _writing_ assignment, per se... Let's make that `USERNAME.github.io` repo into a _real_ blog site. We'll have to do a little remodeling, and you're gonna need some paint.

#### Remodeling

Create a new branch called `remodeling` from `master`. Check out that branch and do this initial work in there, committing after every step. Open a PR and put your **HALFTIME Journal** checklist in the description.

1. Move all your old journal entries and tutorials into a new directory called `_posts/`; stash your in-progress journal entries in `_drafts/`.
1. Use Yeoman to scaffold HTML5 Boilerplate.
1. Use your `init` commands to create `bower.json` and `package.json` files.
1. Add a `npm start` task to `package.json`.

#### Planning

Choose one of the _responsive_ themse from [Wrap Bootstrap](http://wrapbootstrap.com), [ThemeForest](http://themeforest.net/search?category=static-site-generators), or another source as a _reference implementation._ Skitch out the layout and identify the breakpoints. Identify and _document_ what you are and are NOT going to build in a checklist on your PR. Make individual issues in your repo for the big chunks (features) and link them to the PR. Remember that your selected template is just a reference!

More instructions tomorrow!

### Blueprints Everywhere!

I've given you six different obstacle courses: `FullWidthTabs`, `MultiColumnForm`, `NestedAccordion`, `QuotesRotator`, `VerticalTimeline`, `ViewModeSwitch`. Start by committing a _complete deletions_ of those projects into `master`. You heard me: `git rm -rf TIY-Assignments/*/`. Kill those suckers and push your changes. Almost feels good, doesn't it?

Pick three of the six to rebuild. Create a branch called `halftime` and get to shaving those yaks. Start with H5BP, Bower and NPM. Tell `git` to ignore the package folders. Create a `specs/` folder in each, Skitch the layout and identify the breakpoints. Write your plan down for each project in a separate issue in your repo. Checklists are encouraged. All of your tools are at your disposal.

#### BEAST MODE

Didn't I say there were six of these? _Yep._ Three breakpoints each? _Most likely._ **bringgit.**
