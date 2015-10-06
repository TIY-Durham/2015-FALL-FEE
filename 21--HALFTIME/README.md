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
      * `MultiColumnForm/`
      * `NestedAccordion/`
      * `VerticalTimeline/`
      * `ViewModeSwitch/`
      * `.gitignore`
      * `package.json`
      * `bower.json`
      * `README.md`
* **HALFTIME Journal**
* **Blueprints Everywhere!**
  * [ ] Burnin' down the house!
  * [ ] Yo. H5BP, yo. Hey, yo, H5BP.
  * [ ] Skitchers gonna Skitch.
  * [ ] Planners gonna plan.
  * [ ] Yak shaved.
```

### HALFTIME Journal

#### Three's Company

How're those drafts going? Get a final draft done for your reflection and resource entries, then keep working on your tutorial. Make sure you get those 2 :+1:s and give 2 :+1:s!

#### Build It Out

Not really a _writing_ assignment, per se... Let's make that `USERNAME.github.io` repo into a _real_ blog site. We'll have to do a little remodeling, and you're gonna need some paint.

#### Remodeling

Create a new branch called `release--0.0.2` from `master`. Check out that branch and do this initial work in there, committing after every step. Open a PR and put your **HALFTIME Journal** checklist in the description.

1. Move all your old journal entries and tutorials into a new directory called `_posts/`; stash your in-progress journal entries in `_drafts/`.
1. Use your `init` commands to create `bower.json` and `package.json` files if you haven't already.
1. Add a `npm start` task to `package.json`.

Now that you've got those yaks shaved, it's time to start on the remodeling. Pick one of your features -- the navigation bar, one of the post blocks, the sidebar -- and create a branch _based on `release-0.0.2`_ called `feature/FEATURE-NAME` where `FEATURE-NAME` describes the part you're working on, e.g. `feature/sidebar` or `feature/main-column`.

Commit often while you work, and open a PR _into `release-0.0.2`_ as soon as you can. When you finish a feature, i.e. you complete your checklist, solicit peer review of your work and merge it. If you get stuck on a part of a feature, work on another one. Don't be afraid of having multiple branches open at once; you'll regularly have multiple "in-progress" branches on a team.

### Blueprints Everywhere!

I've given you four different obstacle courses: `MultiColumnForm`, `NestedAccordion`, `VerticalTimeline`, and  `ViewModeSwitch`. Start by committing a _complete deletions_ of those projects into `master`. You heard me: `git rm -rf TIY-Assignments/*/`. Kill those suckers and push your changes. Almost feels good, doesn't it?

Pick two of the four to rebuild. Create a branch called `halftime` and get to shaving those yaks. Start with H5BP, Bower and NPM. Tell `git` to ignore the package folders. Create a `specs/` folder in each, Skitch the layout and identify the breakpoints. Write your plan down for each project in a separate issue in your repo. Checklists are encouraged. All of your tools are at your disposal.

#### BEAST MODE

Didn't I say there were four of these? _Yep._ Three breakpoints each? _Most likely._ **bringgit.**
