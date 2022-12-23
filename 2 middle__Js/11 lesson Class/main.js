'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColorRectangleWidthText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorRectangleWidthText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// console square = new Rectangle(10, 10);
// console long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());


 