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

// demo.log();
// demo.calculate();

// ================================================================================================

function Constraktar(radius, height) {
  this.radius = radius;
  this.height = height;

  this.log = function () {
    console.log(`This is the method of the Condtructor function!`);
  };

  this.calculate = function () {
    let result = this.radius * this.height;
    console.log(result);
  };
}

const test = new Constraktar(3, 7);

test.log();
test.calculate();
