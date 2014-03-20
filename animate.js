var animate = function() {

  function defaultEasing(rate) {
    return 1 - Math.pow(rate, 3);
  }

  return function animate(list, easing) {

    var item,
      duration,
      end = 0;

    var step = function() {

      var current = +new Date(),
        remaining = end - current;

      if (remaining < 60) {

        if (item) item.run(1); //1 = progress is at 100%

        item = list.shift(); //get the next item

        if (item) {
          duration = item.time * 1000;
          end = current + duration;
          item.run(0); //0 = progress is at 0%
        } else {
          return;
        }

      } else {
        var rate = remaining / duration;
        rate = easying ? easing(rate) : defaultEasing(rate);
        item.run(rate);
      }

      _requestAnimationFrame(step);
    };
    step();
  };
}();
