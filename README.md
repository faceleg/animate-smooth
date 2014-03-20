Animate
=======

Animation function that uses requestAnimationFrame. Adapted from: [1](Simple Animations Using requestAnimationFrame).

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
    }
  }
]);
```
[1] http://www.sitepoint.com/simple-animations-using-requestanimationframe/
