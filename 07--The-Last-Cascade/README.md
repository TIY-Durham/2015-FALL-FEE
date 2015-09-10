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
     * [ ] Document the `Event` type
     * [ ] Answer the questions on your Reading JavaScript `README.md`
* **Building the Blueprints**
  * `NestedAccordions` can...
     * [ ] First accordion opens when closed... It's a start!
     * [ ] First accordion closes when open... It's a finish?
     * [ ] First accordion opens _and_ closes! It's a wrap! :shipit:
     * [ ] Top-level accordions can open and close... :astonished:
     * [ ] Accordion ALL THE THINGS!
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

### Building the Blueprints
You've made and followed the blueprints...now it's time to build the house!

_Merge your `06` branch via the Big Green Button_, then create a new _WIP Branch_ named `07--the-last-cascade` in GitHub. On your local machine, check out the `master` branch and `git pull` to update your local copy. Then check out your _new_ branch to get to work!

Remember that `scripts.js` file with your pseudocode for `NestedAccordians` and `ViewModeSwitch`? Time to implement the JavaScript. You've already written out _how_ it should work, so try writing the JavaScript code that will _make_ it work. There's no reason to mess with the HTML or CSS except to link your `scripts.js` in the appropriate place.

Leave your pseudocode in on the appropriate line of code. If you find you need to change your code than what you originally envisioned, leave the original comment, but add a comment explaining what you changed and why.

#### NestedAccordion

With `NestedAccordion` you'll be using `click` events to replicate the original [site](http://tympanus.net/codrops/2013/03/29/nested-accordion/). Your first task is to make a closed accordion open so the description text is visible when clicked. Then, reverse it: close the accordion when open. Now...can you make it open _and_ close on click? Ta-da! 

Now you're ready to move on to other accordions. Try to get all the top-level accordions to open and close together. Then, see if you can make only _one_ accordion open and close at a time, while maintaining functionality in the other accordions. Play that accordion!

#### ViewModeSwitch

Now we'll tackle `ViewModeSwitch`. Like the [original](http://tympanus.net/codrops/2013/07/01/view-mode-switch/), you want to change the layout of the page when a user clicks one of the buttons in the upper right-hand corner. What `events` do you think you'll be using? 

For this assignment, your first task will be to focus on the button. Using the `click` event, how can you switch the `"active"` button? Got that? Now make a _function_ that does that. 

Almost there! Now write the code that switches the grid layout to a list, then the list layout to a grid. Welcome to the Grid!

#### MultiColumnForm

Remember the `MultiColumnForm`? If you cleaned house last night, you should have an empty `scripts.js` folder for it all ready to be filled with code. 

For this challenge, you'll focus on the JavaScript that would make [MultiColumnForm](http://tympanus.net/codrops/2013/06/06/responsive-multi-column-form/) take a user's input and turn it into output. You need to find a way to capture input from the form. You then want to output that input to the console using `console.log`. 

This is a tough problem, so do some thinking. You'll also have to search the [MDN](https://developer.mozilla.org/en-US/docs/Web/Events) for the correct `event`. 

When turning in this assignment, make sure you put your `scripts.js` code in the repo, but _also_ put the result of the output as a comment in your _WIP Branch_.
