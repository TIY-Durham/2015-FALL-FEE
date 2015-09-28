# 16 -- Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things** (~30m)
* **Grok Topics** (~15m)

## Mini-Design Lecture??

## Monday Grok

## Assignment

```markdown
* **Yak-Shaving**
  * [ ] Create a _WIP Issue_ in the class repo
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a _WIP Branch_ in:
    * [ ] `USERNAME.github.io` named `journal-week-4` from `master`
    * [ ] `TIY-Assignments` named `16--planet-of-the-apis` from `master`
    * [ ] `TIY-GitHub` named `yak-shaving` from `master`
  * [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.github.io:journal-week-4`
      * `journal-week-4.md` or something creative
      * `tutorial-week-4.md` or something creative
    * `TIY-Assignments:16-planet-of-the-apis`
      * `CheatSheets/GitHubAPI.md` -- Did you have a **Starting Point**?
      * `ProductPage/` -- use `yo h5bp` in here...
        * CREATE: `specs/` -- for Skitching the following:
          * `full--desktop.png`
          * `full--mobile.png`
          * `full--tablet.png`
        * RENAME: `css/main.css` to `scss/main.scss`
    * `TIY-GitHub:yak-shaving`
      * `apis/`
        * `github/`
          * `users/`
            * `octocat.json` -- from the API!
      * `dist/`
        * `.gitignore` -- ignoring _everything_
      * `specs/` -- for the Skitching!
        * `octocat--full.png`
        * `octocat--*.png` -- whatever you want to call them
        * `USERNAME--full.png`
        * `USERNAME--*.png` -- more of the same
      * `src/` -- starting with H5BP...!
        * CREATE: `css/.gitignore` -- read my lips, no new CSS files
        * RENAME: `css/main.css` to `scss/main.scss`
        * CREATE: `scss/custom.scss`
        * `index.html` -- no errors, please
      * `package.json` -- via `npm init`; _not_ in `src/`
  * [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-4` into `master`
    * [ ] `TIY-Assignments` from `16--planet-of-the-apis` into `master`
    * [ ] `TIY-GitHub` from `yak-shaving` into `master`
* **Journal, Week 4**
  * [ ] Flag in the sand for _reflective_!
  * [ ] Flag in the sand for _tutorial_!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* **Reading APIs: GitHub**
  * [ ] Create `CheatSheets/GitHubAPI.md`
  * [ ] Start with the **Starting Point**
  * [ ] Add items to this checklist for The Questions
  * [ ] Get to checkin' off boxes!
* **GitHub Revolution**
  * [ ] **Yak Shaving** complete!
  * [ ] We gotta **Sass it up...!**
  * [ ] Time for some **API Gymnastics**!
  * [ ] Now just **Skitch this profile**!
```

### Journal, Week 4

Same routine as last week, folks: 1 reflective journal, 1 tutorial-style journal. If you stalled on these last week, don't try to "catch up"... **PICK SMALLER TOPICS.** Give yourself a flag in the sand tonight: brainstorm topics (_plural_) for each, pick one and put the rest in your `parking-lot.md` for another time.

### Reading APIs

We're going to get _very_ familiar with the GitHub API this week. Start reading [the documentation](http://developer.github.com/v3) and answer the following questions. You can [find the **Starting Point** in `GitHubAPI.md`](GitHubAPI.md):

* How does the API handle authentication?
  * Do I need to authenticate?
  * What can I do with an unauthenticated request?
  * How can I authenticate my request? (3 ways)
* How do I ask the API for...
  * The profile information for a specific user?
  * The repository listing for a specific user?
  * The recent, public activity for a specific user?
* Is there a limit to the number of requests I can make?
  * Is there a way of extending that limit?
  * What happens when I hit the limit?
* What if there is a _lot_ of data returned?
  * How can I ask for more (or less) data from a request?
  * How do I know that there is more data available?

Additionally, you'll want to understand [the `Promise` interface](http://www.html5rocks.com/en/tutorials/es6/promises/) and [how `XmlHttpRequest` and "Ajax" techniques work](http://teamtreehouse.com/library/ajax-basics). We'll be using [`jQuery.ajax`](http://api.jquery.com/jQuery.ajax/), but the documentation for it is somewhat arcane. There's [official documentation for `Promise` in the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), or you might try [the documentation for Kris Kowal's `Q` library](http://documentup.com/kriskowal/q/), possibly the best (and best documented) `Promise` library out there. There's a _lot_ of other resources on the web about `Promise`, though.

### Github Revolution

This week, you're building a GitHub profile page populated with data from the GitHub API. We'll start with [the profile page for Octocat](https://github.com/octocat) as a reference implementation, but our finished project will be [a template engine](https://en.wikipedia.org/wiki/Template_processor) that can produce a profile page for _anyone_.

#### Yak Shaving

Create a new repository called `TIY-GitHub`, populated with a `README.md` and `LICENSE` file. This will get you a `master` branch with a single commit in it. Create a _WIP Branch_ named `yak-shaving` that you'll do your work in. Create a new `package.json` file _at the top of the project_ using `npm init`, then save and install some _development_ dependencies with `npm install --save-dev`: `mocha`, `chai`, `browser-sync` and `node-sass`.

In the `scripts` key, add a `start` task that will run `browser-sync` and a `sass` task that will convert `scss/main.scss` into `css/main.css`, just like we did for `TIY-Chessboard` and the Blueprints last week. We don't have any Sass to convert yet or any HTML to serve up, so let's get on that.

Create a directory called `src/` and run `yo h5bp` _from within the `src/` directory_. You don't need the docs; they're on the internet. If you run into problems running `yo h5bp`, _ask for help_. As you've done before, rename `css/main.css` to `scss/main.scss`. Try running the `sass` task with `npm run sass`, but you'll probably get an error message complaining that the input file -- `scss/main.scss` -- doesn't exist. Didn't we just rename that? What's going on?

#### Sass it up...

The `node-sass` command is running from wherever the `package.json` file is, which is correct, but the `scss/` and `css/` directories aren't directly adjacent, are they? Where are they located _relative_ to `package.json`? What if you adjust the path for `scss/main.scss` to `src/scss/main.scss` in your `sass` task? Does `npm run sass` work any better now? Where did it output the CSS to? What do you need to correct?

Before, we just edited `main.scss` with our custom styles, but let's put our custom styles in a better place this time. Make a file called `_custom.scss` _in the `scss/` directory_ (mind the underscore). Then open `main.scss` and put the following around line 97 (the "Author's Custom Styles" section):

```scss
@import 'custom'; // What no underscore? NO! No underscore!
```

Give yourself a tracer bullet in `custom.scss` and re-run that `sass` task. What happened? Did your tracer bullet "fire"? It should have... Ask for help if it didn't! Can you find something on the internet that explains what underscores in SCSS filenames do... or _don't_ do? Maybe related to `@import`, too?

#### API Gymnastics

Next, we need to fetch some data. Save [the JSON data from the GitHub API for Octocat](https://api.github.com/users/octocat) into the file `api/github/users/octocat.json`: that's a file named `octocat.json` inside a folder named `users/` inside a folder named `github/` inside a folder named `apis/`.

There's more data being used to construct Octocat's profile than is just in `octocat.json`, though. We need [a list of the repositories that belong to Octocat](https://api.github.com/users/octocat/repos); those should live in a file named `repositories.json` inside of _a directory named `octocat`_.

We also need [the most recent public activity for Octocat](https://api.github.com/users/octocat/events/public) in a file next to `repositories.json` called `activity.json`. If you looked at a `tree` of `apis/` it should look like this:

* `apis/`
  * `github/`
    * `users/`
      * `octocat/`
        * `activity.json`
        * `repositories.json`
      * `octocat.json`

For **BEAST MODE** you'll do the same for _your_ profile data using the API. Save the data in a file and directory named after _your username_, just like above.

#### Skitch this Profile

Grab a screenshot of Octocat's profile page and save it to `specs/octocat--full.png`. Break down the layout into pieces with Skitch and export them with the same prefix into `specs/`. For example, `specs/octocat--repositories.png` might be the **Repositories** section or `specs/octocat--contributions.png` is a good name for the **Contributions** section. Make _lots_ of these, and break down the big sections into smaller pictures for the various pieces. You'll be building the HTML, (S)CSS, _and_ JavaScript for this page, so document your images heavily!
