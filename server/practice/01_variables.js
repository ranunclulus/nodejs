/*
int a = 10;
int b = 20;
 */

/*
let
const
var
 */

// let
// 데이터의 형식을 따지지 않는 변수
let foo = "a let variable";
console.log(foo);
// 재할당 가능
foo = "let variables can be reallocated";
console.log(foo);
// 다른 타입으로 재할당도 되나 권장되지 않음
foo = 10;
console.log(foo);

// const
// 불변하는 변수
const bar = "a const variable";
console.log(bar);
// const로 선언한 변수는 재할당이 불가능
// java의 final과 비슷한 역할
// bar = 'const variable cannot be reallocated';
// 상수 선언에 많이 사용
const PI = 3.14;


// var
// let과 유사하게 동작
var baz = 'a var varible';
console.log(baz);
baz = 'var can be assinged again';
// 호이스팅 (hoisting) 때문에 자주 사용 안 함

// 호이스팅
// 아래의 경우 동작하지 않음
// console.log(notHoisted);
let notHoisted = 'let variable is not hoisted';
// 아래의 경우 동작함 -> undefined
console.log(hoisted);
var hoisted = "var variable is hoisted";
// 호이스팅: 아래쪽에 선언한 변수들을 코드 최상단에서 우선 선언하도록
// 코드가 변경되어, 실제 값의 할당 이전에 참조가 가능해지는 현상
// 호이스팅은 논리적 흐름을 깨뜨리기 때문에 더 이상 권장되지 않음