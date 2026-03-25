var Box = /** @class */ (function () {
    function Box() {
        this.elements = [];
    }
    Box.prototype.add = function (element) {
        this.elements.push(element);
    };
    Box.prototype.remove = function () {
        this.elements.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box1 = new Box();
box1.add(1);
box1.add(2);
box1.add(3);
console.log(box1.count);
console.log("------------------------------");
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
