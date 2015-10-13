# 26 -- For Your Eyes OAuth

## Rituals (~1h 30m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Quiz Time!** (~15m)
* **Three Little Things** (~30m)

## Agenda

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_ with links to:
    * your PRs in `USERNAME.github.io`
    * your PRs in `TIY-GitHub` for features and releases
    * your PRs in `TIY-Catalog` for `feature--*` into `develop`
  * _WIP Branch_:
    * `USERNAME.github.io:journal-week-6`
    * `TIY-GitHub`:
      * `release--*` -- if you're ready for another release
      * `feature--*` -- for any new features
    * `TIY-Catalog`:
      * `feature--*` -- for any feature you're working on
* **Journal, Week 7**
  * [ ] Reflective done
  * [ ] Tutorial rough draft
* [ ] **Reading APIs: Etsy**
* **Shaping Up with Angular JS**
  * [ ] Level 2 complete (again)!
  * [ ] Level 3 complete!
  * [ ] Pics or it didn't happen!
* [ ] The Man with the Golden GitHub
* [ ] Etsy Goes Marching On
```

### Journal, Week 6
You know what to do. Tomorrow you should have your final draft of your **Reflective** journal and rough draft for **Tutorial** journal.

### Reading APIs: Etsy

The data from your page has to come from _somewhere_ in the API, right? Well, the trick here is that the way the data is represented in the API may not precisely match the way it's presented on the page. You'll want to research the following questions:

* For the product list (category) page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* On the product detail page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* Identified for each:
  * API endpoint
  * required query params
  * additional params needed (`fields`, `includes`)
  * sample data returned

Make a sample request using [Postman](http://getpostman.com) or `curl` to inspect real responses from the API to verify your hypotheses from the documentation. Document the API endpoints -- including the query string parameters -- that you need for each page. Add those to your plans!

### Shaping Up with Angular JS: Round 2

Continuing with our exercise with Angular JS, work through levels 2 (again) and 3 of _Shaping Up_ on CodeSchool. Try to work through the challenges on your own, but don't get bogged down.

### The Man With the Golden GitHub

Keep building your _Responsive_ GitHub page. Tonight, try to get the tablet view done. After merging, cut a new `release--*` branch from `master` and a new branch from that called `feature--responsive-tablet`.

### Etsy Goes Marching On

**Time to switch Team Leads!**

If you're the _new_ lead, no coding for you! You must support the other two team members with planning, API reading, data analysis, and code review. Look over their shoulders and help them avoid painful syntax errors and split your time between them. There's plenty to do without writing anything.

If you _were_ the lead, pick up one of the existing, open tasks _before_ starting a new task. That doesn't have to be the new lead's old task, either. If your third teammate is stuck on something: trade. Rely on your _new_ Team Lead for direction and support.

Between the three of you, you should tackle  _at least one feature per person with HTML, (S)CSS, and some Angular JS placeholders_.
