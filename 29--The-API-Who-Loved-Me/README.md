# 29 -- The API Who Loved Me

## Rituals (~45m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)

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
* [ ] **Journal, Week 7: Any Way You Want It**
  * Feature 1: Complete!
  * Feature 2: Started!
  * Feature 3: Planned!
* [ ] **Reading APIs: Github Issues**
  * What credentials do I need to authenticate with the Github API?
  * How can I provide authentication credentials to Github?
* [ ] **Don't Stop Believing**
* [ ] **GitHub Revolution: Angular Edition**
```

### Journal, Week 7: Any Way You Want It

Welcome to Wednesday! Tomorrow your bookmark and reflective entries are due. Get each peer reviewed by two people and peer review two more.

### Reading APIs: Github Issues & Firebase Auth

Please answer any of the questions from Monday that you didn't get to and additionally refresh your memory (and notes) on how authentication works with the Github API by answering these questions:

  * What credentials do I need to authenticate with the Github API?
  * How can I provide authentication credentials to Github?

[Firebase](http://firebase.io) is a DataBase as a Service (DBaaS) tool that can act as a ReSTful API for our Angular JS front-end applications. It also has a free hosting tier for client-only applications like ours and a JavaScript authentication library to make integrating with OAuth providers -- like Google, Facebook, and GitHub -- _much easier_. We don't need the API parts _yet_, but read up on [Authentication with Firebase](https://www.firebase.com/docs/web/guide/user-auth.html), specifically [authenticating with GitHub](https://www.firebase.com/docs/web/guide/login/github.html).

  * How can I use Firebase to authenticate with GitHub?
  * What type of information will Firebase require from me to integrate with GitHub?
  * What credentials will Firebase provide me when I have successfully authenticated?
  * How and where do I need to use those credentials?

### Don't Stop Believing... Continued.

Finish up the three features you identified for ` USERNAME.github.io`. Be sure you're using `feature/*` branches with PRs into `remodeling` and open a PR from `remodeling` into `master`.

### GitHub Revolution: Angular Edition

Tonight, we need to learn about submitting forms with Angular and fetching from and _pushing to_ a _real_ API. At the bottom of your GitHub profile page, create placeholder templates for comments and a comment form like we see on every GitHub Issue. When the page loads, fetch all the comments for your _WIP Issue_ from the GitHub API and display them in the comment template. When someone submits the comment form, add that comment to your _WIP Issue_ via the API _and_ display it in the list of comments. It should look and work _exactly_ like the comment form on your _WIP Issue_! Hmm...

#### BEAST MODE

If you haven't figured it out yet, you're going to need to authenticate in order to create those comments. A simple solution would be to ask the user for credentials right in the comment form, but do you really want to ask for their username and password every time? Should you _ever_ ask for someone's password? Use Firebase Auth to authenticate with GitHub instead, and use the credentials you get to send the API request.

#### NIGHTMARE MODE

Have you ever noticed that GitHub seems to _update itself_? When I post a new comment on an Issue, it _automatically_ appears on everyone else's screen, as long as they're still connected to the internet. How did they do that? Can you find out where in the API this activity is published?
