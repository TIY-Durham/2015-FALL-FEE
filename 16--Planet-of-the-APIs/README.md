# 16 -- Planet of the APIs

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things** (~30m)
* **Grok Topics** (~15m)

## Monday Grok

## Assignment

```markdown
* **Yak-Shaving**
 * [ ] Create a _WIP Issue_ in the class repo:
   * [ ] named `XX -- YOUR NAME` where `YOUR NAME` is, well... your name.
   * [ ] with this checklist as the description
* [ ] **MERGE ALL YOUR OPEN PRs!**
* [ ] Create a _WIP Branch_ in:
  * [ ] `TIY-Assignments` named `16-planet-of-the-apis` from `master`
* [ ] Create or update the following _WIP Files_ in:
  * `TIY-Assignments:16-planet-of-the-apis`
    * `folder/`
      * `filename.ext`
    * `filename.ext`
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `TIY-Assignments` from `16-planet-of-the-apis` into `master`
* **Journal, Week 4**
  * [ ] Created Markdown files for _both_ journal types!
  * [ ] Flag in the sand for _reflective_!
  * [ ] Flag in the sand for _tutorial_!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* **Reading APIs: GitHub**
  * [ ] Create `CheatSheets/GitHubAPI.md`
  * [ ] Start with the **Starting Point**
  * [ ] Add items to this checklist for The Questions
  * [ ] Get to checkin' off boxes!
* [ ] **CODING**
  * checkpoints
* [ ] **INSTALLING**
```

### Journal, Week 4

Same routine as last week, folks: 1 reflective journal, 1 tutorial-style journal. If you stalled on these last week, don't try to "catch up"... **PICK SMALLER TOPICS.**

### Reading APIs

We're going to get _very_ familiar with the Github API this week. Start reading [the documentation](http://developer.github.com/v3) and answering the following questions. You can [find the **Starting Point** in `GitHubAPI.md`](GitHubAPI.md):

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

Additionally, you'll want to understand the `Promise` interface and how `XmlHttpRequest` works. Even though we'll be using `jQuery.ajax` in class, the documentation for it is somewhat arcane. You might try reading [the docs for the `window.fetch` polyfill](https://github.com/github/fetch) and [the docs for `Q`](https://github.com/kriskowal/q), the easiest-to-understand library out there. There's [official documentation for `Promise` in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), as well.


### CODING ASSIGNMENT
