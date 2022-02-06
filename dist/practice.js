"use strict";
// # 1: 타입스크립트 파일 만들기
// const message: string = 'hello world';
// console.log(message);
class Circle {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width);
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
/**
 * public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다.
 * 따라서 위 코드에서는 circle 의 radius 값은 클래스 외부에서 조회 할 수 있지만,
 * tsrectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없습니다.
 */ 
