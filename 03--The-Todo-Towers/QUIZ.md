build-lists: true

# [fit] Dat Quiz <br> Tho...

---

# What pattern do I use to write a Function definition?

---

# What pattern do I use to write a Function definition?

```javascript
function IDENTIFIER ( /* What goes here? */ ){
  // What is this called?
}
```

---

# What pattern do I use to write a Function definition?

```javascript
function IDENTIFIER ( /* PARAMETERS */ ){
  // FUNCTION BODY
}
```

---

# Every Function has 3 parts; what are they?

* **Input** via **Parameters / Arguments**
* **Output** via **`return`**
* **Side-effects** via **Body Statements**

---

# Function Trivia!

* What is a Function called when it has no identifier?
* How do I make a Function do its job? What it that called?
* When I provide inputs to a Function, what are those values called?

---

# Function Trivia!

* A Function with no identifier is called an **Anonymous Function**.
* A Function is **invoked** by placing parenthesis after its identifier.
* The inputs provided to a Function _invocation_ are its **arguments**.

---

# What's wrong with this Function?

## What are the _inputs_, _outputs_ and _side-effects_?

```javascript
function capitalize (word){
  // Make the first character of `word` uppercase...
  upper = word[0].toUpperCase();

  // Make the _rest_ of `word` lowercase...
  lower = word.slice(1).toLowerCase();

  // Smash 'em together!
  return "upper lower";
}
```

---

# What's wrong with this Function?

## What are the _inputs_, _outputs_ and _side-effects_?

```javascript
function square ( number )
{
  return number ^ 2;
}
```

---

# What's wrong with this Function?

## What are the _inputs_, _outputs_ and _side-effects_?

```javascript
var rando = function(min, max){
  return Math.floor(
      Math.random() * (max - min)
  ) + min;
}
```

---

# What about this Function _invocation_?

```javascript
console.log( square ( rando() ) );
```

