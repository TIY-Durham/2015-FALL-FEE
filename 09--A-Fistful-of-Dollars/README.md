
# 09 -- A Fistful of Dollars

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)
* **Homework Review** (~30m)

## Agenda

* The Case For and Against jQuery
  * Why does jQuery even exist?
  * jQuery demo via CodePen
  * Replace jQuery with Zepto
* How do I even jQuery?
  * Link jQuery via CDN (a la CodePen)
  * Refactor Nested Accordion to jQuery / Zepto

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  * _WIP Branch_:
  * _WIP Files_:
* **Journal, Week 2**
  * [ ] Rough draft!
  * [ ] :+1: x2!
  * [ ] Extra topics in `parking-lot.md`!
* **Reading CSS**
  * [ ] Checklists!
* **Githubbing to Know You**
  * [ ] Updated from `upstream:master`
  * [ ] Edited _everyone_...
  * [ ] Pushed and PR'd (izzat a word?)
  * [ ] ZOMG CONFLICTS!
  * [ ] **BEAST MODE** Resolve ALL THE THINGS!
* **Coloring the Blueprints**
```

### Journal, Week 2

Begin the drafting process, like we've done the last two weeks. This time, as you think of topics that are related to your experience last week but that don't fit into your main journal, write them down in a file called `parking-lot.md` and start developing them with bulleted notes, an outline, stream of consciousness or just short rough drafts. You'll need some topics to pick from for next week... maybe even two.

### Reading CSS

Tonight, focus on the [Box Model properties](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) as we saw them used in class today. Pay careful attention to `box-sizing` and how it changes the math of the rendering model. You should cover the `margin-*`, `padding-*` and `border-*` properties, the `max-*` and `min-*` properties, and `box-sizing` property, at a minimum. All of these properties accept [a numeric length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) in [various units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Units) that you should know about. Also pay special attention to [the caveat about inches and DPI](https://developer.mozilla.org/en-US/docs/Web/CSS/length#CSS_units_and_dots-per-inch). Computers are hard.

### Githubbing to Know You

Tonight, _try_ to create some merge conflicts: everyone edits _everyone else_. Experiment. Pick different parts of the files to edit and see what conflicts arise. By Thursday, though, _everyone_ should have _everything_ filled out and added to a PR. Let the train wrecks begin!

#### BEAST MODE

Can you _resolve_ all these conflicts and push the resolved code back to Github?

### Coloring the Blueprints

You've made, filled in, and built the Blueprints. But what's a house without some paint? Or windows? Or responsive CSS??

_Merge your `08` branch via the Big Green Button_, then create a new _WIP Branch_ named `09--a-fistful-of-dollars` in GitHub. On your local machine, check out the `master` branch and `git pull` to update your local copy. Then check out your _new_ branch to get to work!

#### Nested Accordions

Ah, our old friend. You've got the JavaScript functionality working, but now it's time to build out the CSS. 

In Normal mode, you'll build out the CSS in your `styles.css` page. That includes the text, colors, borders, and indentation. Take baby steps. Start with the positioning. How should the elements be laid on the page? How do you create the indentation?

Once you've got the elements where you want them, incorporate one element at a time: font, color, etc., until you have the page closely replicated.

##### Beast Mode

Can you get the arrows on the left to change on the hover state? You'll need to investigate `::before` to get this one.

##### Nightmare Mode

Media queries! How can you make the page responsive like it is in the demo?

#### Responsive Multicolumn Form

Like Nested Accordions, you should approach Responsive Multicolumn Form's Normal mode in baby steps. Aim for replicating the mobile view by shrinking the window down to what the site would look like on mobile. 

It should look something like this:

![Mobile View](http://i.imgur.com/ahql4Ua.png)

Get the positioning right, then move on to text, colors, and borders. 

##### Beast Mode

What if you want to fill out the form -- on a desktop?? Put the "multi" back in "Responsive Multicolumn Form"!

##### Nightmare Mode

Can you use media queries to make the form responsive?

#### Vertical Timeline

Now we're moving on to our new friend, Vertical Timeline. Like Nested Accordions and Responsive Multicolumn Form, you'll want to start with the basic layout and positioning of the elements on the page. Then, move on to your colors and fonts.

##### Beast Mode

Rounded icons! How u get so round?? Investigate `::before` and `border-radius` to make that happen.

##### Nightmare Mode

Make it responsive!
