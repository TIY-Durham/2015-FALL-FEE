# Stack Undertow

## Description

As students, you have spent a lot of time on StackOverflow.  However, now that you've been in the class long enough to have a few developer nightmares ("I just can't find the right answers!!!"), you've decided that it's time to build an improved version, and you've recruited students from another class to aid you in your quest.

## Objectives

After completing this assignment, you should...

* Be able to work from a set of existing user stories
* Be able to work in parallel with another team of developers
* Be able to write an API specification with a second team of developers
* Know how to integrate work across multiple codebases
* Gain experience resolving ambiguities in requirements and assumptions built into two different code bases

### Front End Objectives

After completing this assignment, you should...

* Be able to contribute to the design of a database and Domain Model
* Know how to write a User Interface (UI) for an API specification
* Gain experience writing reactive UIs with Angular JS

### Rails Objectives

After completing this assignment, you should...

* Be able to design a database and ReSTful API to support a range of features
* Know how to build an API to provide data to a reactive User Interface (UI)
* Gain experience writing high-throughput APIs with Rails

## Deliverables

* **A GitHub organization.** Create an organization in GitHub to represent your team for this project.  Give all team members full rights.
* **Two repositories named `api` and `gui`.** The `api` repository will contain the Rails API code, and `gui` will contain the Angular JS interface.  Create both repositories under your GitHub organization's account.
* **A `README.md` for each repository.** Describe each application and include a link to the other project repo and the deployment URLs for each.
* **A Rails API deployed and running on Heroku.**
* **An Angular JS app served from Firebase Hosting.**

### Before writing any code, produce the following:

* **A workflow diagram** describing the primary actions of the application in any format: pen(cil) and paper, whiteboard pictures, a formal drawing... whatever.
* **A data structure diagram** that should include:
  * A box for each table
  * Each field you'll need for each table
  * A data type for each field
  * A mark to indicate that it's a required field
  * Relationships between each pair of tables with a primary/foreign key link
* **A set of visual schematics** that should include:
  * Each page for the proposed application
  * Visual annotations denoting layout containers and important content areas
  * A mapping of content areas to API data

## Normal Mode

At its core, your application needs to allow users to ask questions, give answers, and vote.  You also need to provide anyone with the ability to search for questions and see answers.  Your application should allow the following actions:

* Visitors can sign up for a new account, so that they can become Members.
* Members can log in (and log out), so that they can contribute to the site.
* Members can ask new Questions, so that others can help them.
* Members can suggest Answers for a Question, so that they can participate in the conversation.
* Members can up-vote or down-vote Questions, to show support for or against.
* Members can up-vote or down-vote Answers, to show support for or against.
  * Answers with more support should appear closer to the top of the list (when viewing a single Question).
* Askers -- Members who have asked a Question -- can select an Answer as "accepted", so that they can share with others which Answer worked best for them.
  * An Answer that is "accepted" should _always_ appear at the top of the list.
* Anyone (Members and Visitors) can view Questions, Answers and Votes, so that they can see the activity on the site.
  * The main page of the site should show "Top Questions", at least.
  * Each Question should have [a permalink](https://en.wikipedia.org/wiki/Permalink) that can be shared.
  * The number of Votes and Answers for each Question should appear in any list view.
* Anyone can search for Questions and Answers, so that they can find them faster and more easily.
  * Search results should be ranked by quality.
  * Results in the list should contain the number of Votes and Answers.

## Hard Mode

If you complete the basics, you should begin awarding points for certain actions on the site, and keep track of how many points each user has acquired.  Your application should allow the following actions:

* Members can receive points for asking Questions, suggesting Answers, or _receiving_ up-votes.
* Members can _lose_ points for receiving down-votes.
* Askers can set a Bounty (a number of points) on a Question that is awarded to the Member who suggests the _first_ "accepted" Answer.
* Asker automatically awards a Bounty when accepting an Answer to a Question with a Bounty on it.
* Visitors can view [a Leaderboard of Members ranked by their points earned](http://stackoverflow.com/users), so that they can see who is most active.

## Nightmare Mode

Once you have a point system in place, you can take more advanced actions based on these points.  Your application should allow the following actions:

* Members should [receive badges for accomplishing certain things in the application](http://stackoverflow.com/help/badges).  Choose at least five of these badges and implement them in your system.
* Members should only be able to perform certain tasks once they have acquired a certain number of points.  [Stack Overflow calls these "privileges"](http://stackoverflow.com/help/privileges).  Implement the following privileges:
  * A certain number of points (more than zero, you choose the threshold) needed to post Questions
  * A higher number of points (you choose the threshold) needed to up-vote
  * A higher number of points (you choose the threshold) needed to set a bounty
  * A higher number of points (you choose the threshold) points needed to down-vote
