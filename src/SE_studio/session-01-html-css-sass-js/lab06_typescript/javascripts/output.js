// Normal Point Class
var Point = /** @class */ (function () {
    function Point() {
        this.x = 1;
        this.y = 1;
    }
    Object.defineProperty(Point.prototype, "Point", {
        get: function () {
            return "".concat(this.x, ", ").concat(this.y);
        },
        set: function (point) {
            console.log('this Setter got used');
            this.x = point.x;
            this.y = point.y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var pt = new Point();
pt.x = 0;
pt.y = 0;
console.log("The point is at (".concat(pt.x, ", ").concat(pt.y, ")"));
var ptB = new Point();
ptB = pt;
console.log("The point is at, ".concat(ptB));
// Class with initilizers values
// class Point {
//   x = 0;
//   y = 0;
// }
// const pt = new Point();
// // Prints 0, 0
// console.log(`${pt.x}, ${pt.y}`);
