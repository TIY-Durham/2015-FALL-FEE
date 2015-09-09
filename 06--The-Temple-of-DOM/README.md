# The Temple of DOM

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Quiz** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

### Data Types: Lists and Dictionaries

* What are the 4 primitive types in JavaScript?
* What if I need to store more than one value?
* What is a list? How do I make one?
* What is a dictionary? How do I make one?
* How do I get values out?
* How do I put new values in?
* What can I put in a list or dictionary?
* What are they good for?

## Assignment

```markdown
* **Yak Shaving**
  * Create a new _WIP Issue_ named `06 -- YOUR NAME` with:
    * link to your PR in `USERNAME.github.io` from `journal-week-1` into `master`
    * link to your PR in `TIY-Assignments` from `06--temple-of-dom` into `master`
  * Create a new _WIP Branch_ in:
    * `TIY-Assignments` named `06--temple-of-dom` from `master`... MERGE YOUR 05 PR FIRST!
  * Create or update the following _WIP Files_ in:
    * `USERNAME.github.io`:
      * `journal-week-1.md`
    * `TIY-Assignments`:
      * `NestedAccordion/`
        * `js/scripts.js` -- for _your_ work
        * `index.html` -- removing JavaScript
      * `ViewModeSwitch/`
        * `js/scripts.js` -- for _your_ work
        * `index.html` -- removing JavaScript
      * `MultiColumnForm/`
        * `js/scripts.js` -- nothing yet!
        * `index.html` -- linking `scripts.js`
* **Journal, Week 1**
  * [ ] Finished journal entry
  * [ ] Had 2 people review it
  * [ ] Reviewed some drafts and left comments!
* **Following the Blueprints**
  * ** Nested Accordion**
    * [ ] Clean house: Deleted that JavaScript!
    * [ ] Created and linked `scripts.js` in `index.html`
    * [ ] Can you say that again in English?
    * [ ] What DOM things will we need for that?
    * [ ] **BEAST MODE** -- First `NestedAccordion` is accordion-ey...
    * [ ] **NIGHTMARE MODE** -- Momma's got a squeezebox! It goes in and out...
  * [ ] `View Mode Switch`
    * [ ] Clean house: Deleted that JavaScript!
    * [ ] Created and linked `scripts.js` in `index.html`
    * [ ] What's up with that switch?
    * [ ] Can you say that in English this time?
    * [ ] What DOM things will we need for that?
```

### Journal, Week 1

You should have a Final Draft ready by tomorrow, Thursday. Yes, tomorrow is already Thursday. Finish up your essay, and get two people to review it for you. If you're reviewing someone else's draft, write a one-sentence summary of their article as a comment _on their PR_ and give them a big `:+1:`... _if they completed the assignment_. If there are things that they could change or improve or parts that you really liked, leave some comments on those, too... Maybe on a specific line, even. 

### Following the Blueprints: The Return of the Nested Accordian

#### Nested Accordian

_Merge your `05` branch via the Big Green Button_, then create a new _WIP Branch_ named `06--temple-of-dom` in GitHub. On your local machine, check out the `master` branch and `git pull` to update your local copy. Then check out your _new_ branch to get to work!

First order of business: clean house. Delete the JavaScript files for each Blueprint and commit the deletion. Push the branch and open your PR to get to your first checkpoint.

Next, start analyzing the reference implementation of `NestedAccordion`. What does it do? How can we use the DOM API (from last night's "Reading JavaScript") to _do_ that? Just start with code comments... Do the same with `ViewModeSwitch`, using Chrome Dev Tools to analyze what the JavaScript is _and isn't_ doing. Maybe these questions could help:

* What does it do?
  * What interactive elements exist?
  * How do you interact with them?
  * What visual effects are produced by interacting?
* How does it do it?
  * What existing HTML elements are changed?
  * What new HTML elements are created?
  * What CSS styles are used to produce the effect?

##### BEAST MODE

Try _writing_ some of that DOM JavaScript to get just one accordion in one direction: opening when initially closed or closed when initially open. Then you can start to work on the toggle for that accordion. 

##### NIGHTMARE MODE

Can you get the open and close working for _all accordions on the page_, regardless of nesting level? Remember that the initial state should be closed... and for bonus points, make a "real accordion": one that only opens one panel at a time.
