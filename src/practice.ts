// # 1: 타입스크립트 파일 만들기
// const message: string = 'hello world';
// console.log(message);

// # 2: 기본 타입
// let count = 0; // 숫자
// count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!
//
// const message: string = 'hello world'; // 문자열
//
// const done: boolean = true; // 불리언 값
//
// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ['hello', 'world']; // 문자열 배열
//
// messages.push(1); // 숫자 넣으려고 하면.. 안 된다!
//
// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined일 수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일 수도 있음
//
// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// color = 'green'; // 에러 발생

// #3: 함수에서 타입 정의하기

// function sum(x: number, y: number): number {
//     return x + y;
// }
//
// sum(1, 2);
//
//
// // 숫자 배열의 총합을 구하는 sumArray 함수
// function sumArray(numbers: number[]): number {
//     return numbers.reduce((acc, current) => acc + current, 0);
// }
//
// const total = sumArray([1, 2, 3, 4, 5])

// #4: interface 사용해보기
// Shape 라는 interface 를 선언합니다.
// interface Shape {
//     getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
// }
//
// class Circle implements Shape {
//     // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
//
//     radius: number; // 멤버 변수 radius 값을 설정합니다.
//
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//
//     // 너비를 가져오는 함수를 구현합니다.
//     getArea() {
//         return this.radius * this.radius * Math.PI;
//     }
// }
//
// class Rectangle implements Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
//
// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
//
// shapes.forEach(shape => {
//     console.log(shape.getArea());
// });

// Shape 라는 interface 를 선언합니다.
// interface Shape {
//     getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
// }
//
// class Circle implements Shape {
//     // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
//     constructor(public radius: number) {
//         this.radius = radius;
//     }
//
//     // 너비를 가져오는 함수를 구현합니다.
//     getArea() {
//         return this.radius * this.radius * Math.PI;
//     }
// }
//
// class Rectangle implements Shape {
//     constructor(private width: number, private height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
//
// const circle = new Circle(5);
// const rectangle = new Rectangle(10, 5);
//
// console.log(circle.radius);
// // console.log(rectangle.width);
//
// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
//
// shapes.forEach(shape => {
//     console.log(shape.getArea());
// });

/**
 * public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다.
 * 따라서 위 코드에서는 circle 의 radius 값은 클래스 외부에서 조회 할 수 있지만,
 * tsrectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없습니다.
 */


// #5: 일반 객체를 interface로 타입 설정하기
// interface Person {
//     name: string;
//     age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }
//
// const person: Person = {
//     name: '김사람',
//     age: 20
// };
//
// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };

/**
 * 지금 보면 Person 과 Developer 가 형태가 유사하지요?
 * 이럴 땐 interface 를 선언 할 때 다른 interface 를 extends 키워드를 사용해서 상속받을 수 있습니다.
 */


// interface Person {
//     name: string;
//     age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer extends Person {
//     skills: string[];
// }
//
// const person: Person = {
//     name: '김사람',
//     age: 20
// };
//
// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };
//
// const people: Person[] = [person, expert];


// #6: Type Alias 사용하기
// type Person = {
//     name: string;
//     age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// };

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
// type Developer = Person & {
//     skills: string[];
// };
//
// const person: Person = {
//     name: '김사람'
// };
//
// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };
//
// type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
// const people: People = [person, expert];
//
// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];

// #7: 함수에서 Generics 사용하기
// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     };
// }
//
// const merged = merge({ foo: 1 }, { bar: 1 });
// function merge<A, B>(a: A, b: B): A & B {
//     return {
//         ...a,
//         ...b
//     };
// }
//
// const merged = merge({ foo: 1 }, { bar: 1 });


// function wrap<T>(param: T) {
//     return {
//         param
//     }
// }
//
// const wrapped = wrap(10);

// #8: interface 에서 Generics 사용하기
// interface Items<T> {
//     list: T[];
// }
//
// const items: Items<string> = {
//     list: ['a', 'b', 'c']
// };

//#9: type 에서 Generics 사용하기
// type Items<T> = {
//     list: T[];
// };
//
// const items: Items<string> = {
//     list: ['a', 'b', 'c']
// };

// #10: 클래스에서 Generics 사용하기
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
