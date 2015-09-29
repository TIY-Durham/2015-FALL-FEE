# 18 - Escape from the Planet of the APIs

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

## Assignment

```markdown
* **Yak-Shaving**
  * [ ] Create a _WIP Issue_ in the class repo
  * [ ] **MERGE ALL YOUR OPEN PRs!**
  * [ ] Create a _WIP Branch_ in:
    * [ ] `TIY-Assignments` named `18--escape-from-apis` from `master`
    * [ ] `TIY-GitHub` named `release--0.0.2` from `master`
* [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.GitHub.io:journal-week-4`
      * `journal-week-4.md` or something creative
      * `tutorial-week-4.md` or something creative
    * `TIY-Assignments:18--escape-from-apis`
      * `CheatSheets/GitHubAPI.md`
    * `TIY-GitHub:release--0.0.2`
      * `src/`
        * `scss/custom.scss`
        * `js/main.js`
        * `index.html`
    * `TIY-GitHub:yak-shaving`
      * `apis/`
        * `github/`
          * `users/`
            * `USERNAME.json` -- from the API!
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.GitHub.io` from `journal-week-4` into `master`
    * [ ] `TIY-Assignments` from `18--escape-from-apis` into `master`
    * `TIY-GitHub`
      * [ ] from `release--0.0.2` into `master`
      * [ ] from `feature--list-placeholders` into `release--0.0.2` (MERGED)
      * [ ] from `feature--list-templates` into `release--0.0.2` (MERGED)
      * [ ] from `feature--active-repository` into `release--0.0.2` (MERGED)
* **Journal, Week 4**
  * [ ] Draft for _reflective_!
  * [ ] Draft for _tutorial_!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* **Reading APIs**
  * How can I use the Github API to...
    * get all the comments for a particular issue?
    * add a comment to an issue?
  * How can I use the jQuery API to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
  * How can I use the Lodash API to...
    * replace placeholders with values from an object?
    * repeat code for every item of an array?
* **GitHub Revolution**
  * [ ] `feature--list-placeholders`
  * [ ] `feature--list-templates`
  * [ ] `feature--active-repository`
```

### Journal Week 4

You know the drill: reflective entry draft, tutorial entry draft, 2x :+1: for each. You got this.

### Reading APIs

Here's your next batch of questions for the Github API, which you'll need for the last leg of our Github Revolution:

* How can I use the Github API to...
  * get all the comments for a particular issue?
  * add a comment to an issue?

And since libraries like jQuery and Lodash have feelings... I mean _APIs_, too, read through some of the documentation to answer these questions:

* How can I use [the jQuery API](http://api.jquery.com) to...
    * get the HTML contents of an element?
    * create a _new_ HTML element?
    * add an HTML element to the page?
* How can I use [the Lodash API](http://lodash.com/docs/) to...
  * replace placeholders with values from an object?
  * repeat code for every item of an array?

### GitHub Revolution, Part 3: Attack of the Octocat

Start by creating a _new_ branch named `release--0.0.2` from `master` in your `TIY-GitHub` repository. Like last night, all of your work will be on _feature_ branches.

#### Twirl Your Moustache

Time to get to templating. Go back to the MF'g HTML profile column you finished last night. Start by replacing _one_ of your list items with placeholders that match where in the API data these values originate. Put this work in the `feature--list-placeholders` branch.

When you're done, reviewed, and merged, open a new branch called `feature--list-templates` and wrap all of that placeholder-laden markup in `<template>` tags. Give them descriptive (and unique!) `id` attributes so we can pick them out of the DOM with jQuery.

Pluck the HTML contents of each `<template>` tag and pass it through the `template` function in Lodash. Don't forget to assign the result of each to a variable! What is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item?

#### Complete the Page

Last night, we wrote the MF'g HTML and (S)CSS to get the _outermost_ layout elements, as well as the left column. It's time for your next "feature": the larger section on the right. Specifically the Featured Repositories tab.

![right side](https://github.com/TIY-Durham/2015-FALL-FEE/blob/master/17--Beneath-the-Planet-of-the-APIs/octocat--repositories--full.png)

Create another new branch based on `release--0.0.2` called `feature--active-repo`. Then look at the Skitches you placed in your `/specs` folder Monday night.

Now, build out the right section as if the user was on the active _Repository_ tab.

Like last night, push this branch to GitHub and open a PR as soon as you have a commit. Then merge it when you're finished (enough) and have gotten two code reviews. Then `git pull` the updates into your local `release--0.0.2` branch.

#### Now Tell Me Who Are You

Now it's time to fetch your _own_ data. Why? Just trust me, you'll need it.

First, save the JSON data from the GitHub API for your own username. Remember where that is? Here's a hint: `https://api.github.com/users/USERNAME`. Make sure you get the list of repositories that belong to your username, as well. Those live in `https://api.github.com/users/USERNAME/repos`. And finally, get your most recent public activity. You can find that here: `https://api.github.com/users/USERNAME/events/public`.

Now, save the data in a file and directory named after _your username_ just just like you did for Octocat on Monday.

#### BEAST MODE
All that cool moustache replacement that you did for the left column? Time to do it for the right!
