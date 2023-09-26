document.addEventListener("DOMContentLoaded", function(event){

  var counter = -1;
  var minimumX = -100;
  var previousY = [5, 5, 5, 5];

  Vegawidget.findViewPromise('#demo-streaming').then(function(view) {
    /**
     * Generates a new tuple with random walk.
     */
    function newGenerator() {
      return function() {
        counter++;
        var newVals = previousY.map(function(v, c) {
          return {
            x: counter,
            y: v + Math.round(Math.random() * 10 - c * 3),
            category: c
          };
        });
        previousY = newVals.map(function(v) {
          return v.y;
        });
        return newVals;
      };
    }

    var valueGenerator = newGenerator();
    window.setInterval(function() {
      minimumX++;
      var changeSet = vega
        .changeset()
        .insert(valueGenerator())
        .remove(function(t) {
          return t.x < minimumX;
        });
      view.change('table', changeSet).run();
    }, 1000);
  });

  // define function to call
  function on_reset() {

    // change Vega chart
    Vegawidget.findViewPromise('#demo-streaming').then(function(view) {
      var changeSet = vega.changeset()
                          .insert()
                          .remove(vega.truthy);

      view.change('table', changeSet).run();
      counter = -1;
      minimumX = -100;
      previousY = [5, 5, 5, 5];
    });

  }


  var streaming_reset = document.querySelector("[name=demo-streaming-reset]");

  // whenever the input changes, run the updating function
  streaming_reset.addEventListener("click", on_reset);

});
