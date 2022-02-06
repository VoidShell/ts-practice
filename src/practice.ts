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

function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 2);


// 숫자 배열의 총합을 구하는 sumArray 함수
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5])