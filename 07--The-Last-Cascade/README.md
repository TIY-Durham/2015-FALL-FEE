
# 07 -- The Last Cascade

## Rituals (~1h 15m)

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
* [ ] **Yak Shaving**
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  * _WIP Branch_:
  * _WIP Files_:
* **Reading JavaScript: Events**
   * [ ] Document the `Event` type
   * [ ] Answer the questions on your Reading JavaScript `README.md`
* [ ] **Building the Blueprints**
  * checkpoints
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

Remember that `scripts.js` file with your pseudocode? Time to implement the JavaScript. You've already written out _how_ it should work, so try writing the code that will _make_ it work. 

#### Nested Accordian

Aim for the following targets:

* one accordion opening in one direction: opening when initially closed or closed when initially open
* open and close the accordian
* multiple accordians opening and closing all at once
* make a "real accordion": one that only opens one panel at a time


#### View Mode Switch

