# 24 -- From GitHub With Love

## Rituals (~1h 15m)

* **Standup Meeting** (~15m)
* **Homework Review** (~30m)
* **Weekly QUIZ!** (~15m)
* **Three Little Things** (~30m)
* **Parking Lot Topics** (~15m)

## Parking Lot Review

## Assignment

```markdown
* [ ] **Yak Shaving**
  * _WIP Issue_: `XX -- Assignment Name -- YOUR NAME`
  *  _WIP Branch_:
  * _WIP Files_:
* [ ] **WRITING**
  * checkpoints
* [ ] **READING**
  * checkpoints
* [ ] **CODING**
  * checkpoints
* [ ] **INSTALLING**
```

### Journal, Week 6!

You know the drill by now, don't ya? 1 reflective journal, 1 tutorial journal, 1 bookmark journal in a branch of your `USERNAME.github.io` repo called `journal-week-6`... which should be _from_ `master` with a PR back _into_ `master`. 

### Reading APIs: Etsy

Read through [Etsy API documentation](https://www.etsy.com/developers/documentation) to answer the following questions:

  * How do I make API requests?
    * What is the base URL?
    * Are there any headers or query parameters required?
    * What kind of response should I expect?
  * How does the API handle authentication?
    * Do I need to authenticate?
    * What can I do with an unauthenticated request?
    * How can I authenticate my request?
  * How do I ask the API for...
    * A list of products belonging to a specific category or collection?
    * Details about a specific product? What details are provided?
    * The main and additional images for a product?
  * Is there a limit to the number of requests I can make?
    * Is there a way of extending that limit?
    * What happens when I hit the limit?
  * What if there is a _lot_ of data returned?
    * How can I ask for more (or less) data from a request?
    * How do I know that there is more data available?

### Yak Shaving: `TIY-Catalog`

This week we're going to build a couple of pages from Etsy: a couple of category pages and the product detail pages. That means we need some yaks shaved! Just like we did last week, give us a `src/` and `dist/` directory, start with a `.gitignore` file in `dist/` and H5BP in `src/`, `init` those `.json` files, and start loading up dependencies. 

We'll start with these:

* [ ] https://www.etsy.com/trending
* [ ] https://www.etsy.com/browse/fathers-day-gifts
* [ ] https://www.etsy.com/search

Note the differences between the two and Skitch 'em like your life dependended on it! We'll be building the standard category listing page together over the week, but you can be sure to see some of the others along the way.

#### Install-fest!

We've got new tools this week -- [GulpJS](http://gulpjs.com) and a host of plugins. You should already have installed GulpJS globally, but if not, go ahead and do so. No need to assign them as dependencies _yet_... we'll do that together.
