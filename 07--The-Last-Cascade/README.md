# 07 -- The Last Cascade

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* The case for Browser Sync
* Build Nested Accordion
  * `document.querySelector` / `document.querySelectorAll`
  * `Element.addEventListener`

## Assignment

```markdown
* **Yak Shaving**
  * Create a new _WIP Issue_ named `07 -- YOUR NAME` with:
     * [ ] link to your PR in `TIY-Assignments` from `07--the-last-cascade` into `master`
* **Reading JavaScript: Events**
  * [ ] How does an `Event` "bubble"? Can I make it stop?
  * [ ] What does the `target` property of an `Event` refer to?
  * [ ] Besides `click`, what _other_ event types can I trigger with my mouse?
  * [ ] What types of events can be triggered on a `<form>` element?
  * [ ] `click` me, baby, one more time!
  * [ ] `scroll` down the avenue
  * [ ] `change` is a-comin'
  * [ ] `submit` to mah authah-ri-tah!
  * [ ] this is a complete `load`...
  * [ ] well, just `unload` about it.
  * [ ] **BEAST MODE** dat keyboard, tho
* **Building the Blueprints**
  * `NestedAccordions` can...
     * [ ] First accordion opens when closed... It's a start!
     * [ ] First accordion closes when open... It's a finish?
     * [ ] First accordion opens _and_ closes! It's a wrap! :shipit:
     * [ ] Top-level accordions can open and close... :astonished:
     * [ ] **BEAST MODE** Accordion ALL THE THINGS!
  * `ViewModeSwitch` can...
     * **Always start with the button...**
       * [ ] TRACER BULLETS: Houston, we are clear for clicking...
       * [ ] Clicking switches the `"active"` button...
     * **Welcome to the Grid, User...**
       * [ ] TRACER BULLETS: What is changing? Can you change that?
       * [ ] Now make a _Function_ that does that...
     * **Wiring up the clicks...**
       * [ ] Click to switch the grid layout to a list...
       * [ ] Click to switch the list layout to a grid...
  * `MultiColumnForm` can...
     * **Who are you listening to?**
       * [ ] TRACER BULLETS: I can see the `target`...
       * [ ] It's not the `<button>`, BTW.
       * [ ] Ready for the main `Event`!
     * **Where is the data?**
       * [ ] Capture the form submission with JavaScript
       * [ ] Then output the form data to the console
     * [ ] Post the output to a comment in your _WIP Issue_
```

### Reading JavaScript: Events

The `Element.addEventListener` method isn't just limited to `click` events. Pretty much any input a user can provide triggers an event in JavaScript: clicks, scrolls, pressing a key on the keyboard. [The Event Reference in the MDN](https://developer.mozilla.org/en-US/docs/Web/Events) provides an exhaustive list of events that JavaScript recognizes. Document [the `Event` type](https://developer.mozilla.org/en-US/docs/Web/API/Event) and answer the following questions:

* How does an `Event` "bubble"? Can I make it stop?
* What does the `target` property of an `Event` refer to?
* Besides `click`, what _other_ event types can I trigger with my mouse?
* What types of events can be triggered on a `<form>` element?

Next document some of the common event types that we'll encounter: `click`, `scroll`, `change`, `submit`, `load`, and `unload`. Not all HTML elements can listen to all events, so make special note of which HTML elements those event types apply to. Give an example of each in use, selecting an element from the document and attaching an event listener to it.

#### BEAST MODE

There are a bunch of keyboard-related events in the DOM specification, too. I bet they'll come in handy soon enough. Document those as well, and explain how I might listen to a _specific_ key combination. For example, how do I make JavaScript listen for _just_ an `Enter` key or maybe `Command` and `+` together?

### Building the Blueprints

You've made and followed the blueprints...now it's time to build the house!

_Merge your `06` branch via the Big Green Button_, then create a new _WIP Branch_ named `07--the-last-cascade` in GitHub. On your local machine, check out the `master` branch and `git pull` to update your local copy. Then check out your _new_ branch to get to work!

Remember that `scripts.js` file with your pseudocode for `NestedAccordians` and `ViewModeSwitch`? Time to implement the JavaScript. You've already written out _how_ it should work, so try writing the JavaScript code that will _make_ it work. If you're not happy with your "how" explanation, totally expand it. It will help. _Don't change any HTML or CSS except to link your `scripts.js` in the appropriate place!_

Leave your pseudocode in on the appropriate line of code. Explain any differences between your originally vision and what you got to work as code comments.

#### NestedAccordion

With `NestedAccordion` you'll be using `click` events to replicate the [reference implementation](http://tympanus.net/codrops/2013/03/29/nested-accordion/). Take baby steps. Your first task is to make a function that opens the _first_ closed accordion so the description text is visible. Just trigger it from the console at first, _then_ try wiring that up when the _first heading_ is clicked. After that, reverse it: write a function that _just_ closes the first open accordion. Now... can you make it open _and_ close on a click? Ta-da!

Now you're ready to move on to other accordions. Try to get all the top-level accordions to open and close _at the same time_. That's totally not our goal, but it's a target along the way. Then, see if you can make only _one_ accordion open and close at a time, without breaking any of the other accordions. Momma's got a squeezbox...!

##### BEAST MODE

There are _multiple_ levels of accordions going on here. Can you generalize your code to work for _any_ accordion whose heading has been clicked?

#### ViewModeSwitch

Now we'll tackle `ViewModeSwitch`. Like [the reference implementation](http://tympanus.net/codrops/2013/07/01/view-mode-switch/), you want to change the layout of the page when a user clicks on a button in the upper right-hand corner. What `events` do you think you'll be using?

Your first baby step should be to focus on the buttons. Using JavaScript, how can you switch the `"active"` button? Got that? Now make a _function_ that does that and invoke it from the REPL. Can you wire that up to a `click` listener? Wait, there are _two_ buttons there.

Ok, almost there! What causes the layout to shift when the buttons are clicked? Use the reference, Luke! Can you write a function that does that? Can you wire it up to a `click` event? Can you toggle between them? Welcome to the Grid, User.

#### MultiColumnForm

Remember the `MultiColumnForm`? If you cleaned house last night, you should have an empty `scripts.js` all ready to be filled with code.  [The reference implementation](http://tympanus.net/codrops/2013/06/06/responsive-multi-column-form/) didn't have any JavaScript behavior, did it? Now we get to _add_ some!

For this challenge, you'll focus on the JavaScript that would take a user's input and turn it into output. You need to find a way to capture input from the form. You then want to output that input to the console using `console.log`.

This is a tough problem, so tackle it as a group, practicing breaking down baby steps. You'll need [the Event reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events) to find the correct event to listen for and how to make it do your bidding (instead of its _default_ behavior).

When turning in this assignment, make sure you put your `scripts.js` code in the repo, but _also_ put the result of the output as a comment in your _WIP Issue_. Just for good measure, drop a few of those comments and be sure to use code fences!

:+1:
