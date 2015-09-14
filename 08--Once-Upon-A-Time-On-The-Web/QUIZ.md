build-lists: true

## [fit] You can't have your pudding <br> until you ~~eat~~ _take_ your...

# [fit] QUIZ!

---

# What are the 3 parts of a URL?

> https://en.wikipedia.org/wiki/Uniform_resource_locator

* scheme / protocol: `https`
* host / domain name: `en.wikipedia.org`
* path name: `/wiki/Uniform_resource_locator`
* port: `localhost:3000`

> [Browsers & URLs on Treehouse (5:25)](https://teamtreehouse.com/library/website-basics/website-basics/browsers)

---

# How does the browser react to user interaction requests?

## How does a browser "listen" to the user?

* By triggering an `Event` in JavaScript...
  * on a specific DOM element
  * with a payload of information

## How do I _tell_ the browser to "listen"...?

---

# How do I tell the browser to bypass the default interaction behavior?

```javascript
document.querySelector('a[href]')
  // And then a miracle occurs...
```

---

# How do I tell the browser to bypass the default interaction behavior?

```javascript
document.querySelector('a[href]')
  .addEventListener('click', function(event){
    event.preventDefault();

    console.log(event);
  });
```

