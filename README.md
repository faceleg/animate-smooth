Animate
=======

Animation function that uses requestAnimationFrame. Adapted from: [Simple Animations Using requestAnimationFrame][1].

Example usage: 

```JavaScript
animate([
  {
    time: 2,
    node: document.getElementById("box"),
    start: 100,
    end: 300,
    run: function(rate) {
      this.node.style
        .width = (rate*(this.end - this.start) + this.start) + "px";
    },
    // Custom easing function - you can leave this out to use default
    easing: function(rate) {
        return rate < 0.5 ? 2 * rate * rate : -1 + (4 - 2 * rate) * rate;
    }
  }
]);
```
[1]:http://www.sitepoint.com/simple-animations-using-requestanimationframe/
