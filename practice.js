// factory function practice - 1
function factory(radius, hVal) {
  return {
    radius: radius,
    height: hVal,

    log: function () {
      console.log(`This is the method of the factory function!`);
    },

    calculate: function () {
      let result = radius * hVal;
      console.log(`Result: ${result}`);
    },
  };
}

const demo = factory(3, 9);

demo.log();
demo.calculate();

// ================================================================================================

function constructur() {
  this.radius = radius;
  this.height = height;

  this.log = fucntion() {
      console.log(`This is the method of the factory function!`);
  }

  this.log = function() {
    let result = this.result * this.height;
  }
}

