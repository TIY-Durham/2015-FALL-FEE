# 20 -- Escape From the Planet of the APIs

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **QUIZ!** (~15m)
* **Retrospective** (~15m)
* **Parking Lot Topics** (~15m)

## Parking Lot Review

## Agenda

* The Chessboard is dead, long live the Chessboard
* Vive la GitHub Revolution
* lodash

## Assignment

```markdown
* **Yak-Shaving**
 * [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.GitHub.io:journal-week-5`
      * `journal-week-5.md` or something creative
      * `tutorial-week-5.md` or something creative
      * `resource-week-5.md` or something creative
  * [ ] `TIY-GitHub` named `release--0.0.2` from `master`
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
            * `TIY-GitHub`
              * [ ] from `release--0.0.2` into `master`
              * [ ] from `feature--list-placeholders` into `release--0.0.2` (MERGED)
              * [ ] from `feature--list-templates` into `release--0.0.2` (MERGED)
              * [ ] from `feature--active-repository` into `release--0.0.2` (MERGED)
* **Journal, Week 5**
  * [ ] draft of reflective journal
  * [ ] draft of tutorial journal
  * [ ] draft of resource journal
* **GitHub Revolution**
  * [ ] `feature--list-placeholders`
  * [ ] `feature--list-templates`
  * [ ] `feature--active-repository`
```

### Journal, Week 5

Welcome to Week 6!

In addition to your reflective journal entry and your tutorial journal entry this week, also share a bookmarked URL to a tool or article. That sounds easy, doesn't it? But wait, there's more... Write a paragraph _explaining_ the resource you're linking to and why it was helpful. Give us the **tl;dr** on that article or just the important parts of the documentation: installation, usage, why it exists. Keep it simple.

### GitHub Revolution, Part 3: Attack of the Octocat

Start by creating a _new_ branch named `release--0.0.2` from `master` in your `TIY-GitHub` repository. Like last week's GitHub Revolution, all of your work will be on _feature_ branches.

#### Twirl Your Moustache

Time to get to templating. Go back to the MF'g HTML profile column you finished last week. Start by replacing _one_ of your list items with placeholders that match where in the API data these values originate. Put this work in the `feature--list-placeholders` branch.

When you've reviewed and merged, open a new branch called `feature--list-templates` and wrap all of that placeholder-laden markup in `<template>` tags. Give them descriptive (and unique!) `id` attributes so we can pick them out of the DOM with jQuery.

Pluck the HTML contents of each `<template>` tag and pass it through the `template` function in Lodash. Don't forget to assign the result of each to a variable! What is the _type_ of the value returned by `lodash.template`? How can we use that value to print -- i.e. `console.log` -- the HTML for a single repo list item?

#### Complete the Page

Last week, we wrote the MF'g HTML and (S)CSS to get the _outermost_ layout elements, as well as the left column. It's time for your next "feature": the larger section on the right. Specifically the Featured Repositories tab.

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
