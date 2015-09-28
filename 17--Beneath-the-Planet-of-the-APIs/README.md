# 17 -- Beneath the Planet of the APIs

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
    * [ ] `USERNAME.github.io` named `journal-week-4` from `master`
    * [ ] `TIY-Assignments` named `17--beneath-the-planet-of-the-APIs` from `master`
    * [ ] `TIY-GitHub` named `yak-shaving` from `master`
* [ ] Create or update the following _WIP Files_ in:
    * `USERNAME.github.io:journal-week-4`
      * `journal-week-4.md` or something creative
      * `tutorial-week-4.md` or something creative
    * `TIY-Assignments:17--beneath-the-planet-of-the-APIs`
      * `CheatSheets/GitHubAPI.md` -- Did you have a **Starting Point**?
* [ ] Add comments to your _WIP Issue_ with links to your PRs in:
    * [ ] `USERNAME.github.io` from `journal-week-4` into `master`
    * [ ] `TIY-Assignments` from `17--beneath-the-planet-of-the-APIs` into `master`
    * [ ] `TIY-GitHub` from `yak-shaving` into `master`
* **Journal, Week 4**
  * [ ] Outline for _reflective_!
  * [ ] Outline for _tutorial_!
  * [ ] Peer review x2!
  * [ ] Reviewed peers x2!
* **Reading APIs**
  * What are the endpoints for fetching...
    * the profile data for a user?
    * the organizations a user belongs to?
    * the repositories a user has created?
    * a filtered list of repositories?
    * a sorted list of repositories?
    * public events for a user?
  * When fetching public events for a user...
    * How many results are returned by default?
    * What limitations exist on fetching _more_ results?
    * What is the basic structure of the results?
    * What fields are included in each result?
    * What are the data types for each field?
    * What are some of the different values for the `type` field?
* **Github Revolution, Part 2**
  * [ ] Skitched them mobiles!
  * [ ] Mobile Features
    * [ ] `feature/mobile-tabs`
    * [ ] `feature/mobile-profile-details`
    * [ ] `feature/mobile-popular-repos`
    * [ ] `feature/mobile-contrib-repos`
    * [ ] `feature/mobile-repos-repo-list` :angry:
    * [ ] `feature/mobile-repos-repo`
  * [ ] Desktop Features
    * [ ] `feature/desktop-profile-details`
    * [ ] `feature/desktop-2-columns`
    * [ ] `feature/desktop-tabs`
    * [ ] `feature/desktop-contribs-repo-list`
    * [ ] `feature/desktop-repos-repo-list`
    * [ ] `feature/desktop-repos-repo`
    * [ ] `feature/desktop-repos-repo-graph` :imp:
    * [ ] `feature/desktop-contrib-graph` :itsatrap:
    * [ ] `feature/desktop-contrib-activity` :notsure:
  * [ ] **Spec my feature?**
    * [ ] Help from the left on...
    * [ ] Help from the right on...
    * [ ] Helped the left on...
    * [ ] Helped the right on...
```

### Journal, Week 4+

Last night you brainstormed topics. Now it's time to choose two -- one for your reflective entry and one for your tutorial. Outline both entries, then get them reviewed by your peers. Be sure to review theirs, too!

### Reading APIs: Github

Tonight, focus on the following questions about the Github API, which will be important as you build out your profile:

* What are the endpoints for fetching...
  * the profile data for a user?
  * the organizations a user belongs to?
  * the repositories a user has created?
  * a filtered list of repositories?
  * a sorted list of repositories?
  * public events for a user?
* When fetching public events for a user...
  * How many results are returned by default?
  * What limitations exist on fetching _more_ results?
  * What is the basic structure of the results?
  * What fields are included in each result?
  * What are the data types for each field?
  * What are some of the different values for the `type` field?


### Github Revolution, Part 2

You skitched all those breakpoints already, right? Except that _Github doesn't use breakpoints_. There are _no_ Media Queries whatsoever. Switch your User-Agent (UA) identifier to a mobile device and reload... That's _adaptive_ rather than _responsive_, and that's a problem. Let's fix it.

Your assignment for the weekend is to build out HTML and CSS for a _responsive_ Github profile. Start Mobile-First and expand to desktop. I've suggested some features for you, in case you need guidance. Feel free to add your own, break down the ones provided, or just write your own set.

#### Spec my feature?

To get a feel for "too much vs not enough planning", help your neighbors with two features by writing the plans for their feature in an issue in their `TIY-Github` repository. Also solicit help from them on two of your own features. Review their plans carefully and give them honest feedback on the work. Don't wait for the perfect plan, but if you require more details than you were given while you're working, ask for more details while you work on something else.

When you're writing specs, be sure to include images from Skitch or Preview (or whatever) with markup. You can attach them directly to the Issue, and Github will happily hold on to them for you.
