// var랑 비슷한 성질 -> hoisting의 특징을 가지고 있음
function add(num1, num2) {
    return (num1 + num2);
}

console.log(add(3, 5));

// 함수 표현식
// 표현식: 어떤 특정한 값으로 귀결되는 코드
// 변수를 선언하고 해당 변수에 함수를 할당하는 방식
const subtract = function (num1, num2) {
    return num1 - num2;
}
console.log(subtract(20, 10));

// 함수 인자 전달하기
// 1. 인자 기본값
const greeting = function(name = "Anonymous") {
    return `Hi, ${name}`;
}
console.log(greeting("Huisu"));
console.log(greeting());

// 2. 매개변수와 인자의 갯수 불일치 허용
const divide = function (num1, num2) {
    return num1 / num2;
}
console.log(divide());
console.log(divide(1));
console.log(divide(1, 2));
console.log(divide(1, 2, 3));