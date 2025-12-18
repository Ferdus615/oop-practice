// Factory function
function createCircle(radius) {
  return {
    radius,

    draw: function () {
      console.log("This is drawn.");
    },
  };
}

const circle = createCircle(1);

//constructor function
function Circle(radius) {
  //   console.log(`this:`, this);
  this.radius = radius;
  this.draw = function () {
    console.log("This is drawn.");
  };
}

//==============================================
// Circle.call({}, 1);
// const obj = {};
// const anotherCircle = Circle.call(obj, 1);
// obj.draw();

// Circle.apply({}, [1, 2, 3]);
//==============================================

// const anotherCircle = new Circle(1);
// anotherCircle.draw();

// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log("This is drawn.");
//   };
// `
// );
// const circle2 = new Circle1(1);
// circle2.draw();

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
