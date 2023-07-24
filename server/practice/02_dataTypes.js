// JSON
// Number
// 숫자를 나타내는 모든 자료형
// 정수, 실수, 무한대, 숫자 아님
const length = 5;
const size = 10;
const temperature = 36.5;
const distance = 3.5;
const floatPoint = 2.998e9;
const infinite = Infinity;
const infiNegotive = -Infinity;
// NaN (Not a Number)
// 숫자가 표현되어야 하는 계산 또는 함수의 결과가 숫자가 아닐 때
const parseFail = parseInt("hello");
const sqrtNegative = Math.sqrt(-1);
const calculateNan = 7 + NaN;

// String
const single = 'hello JS';
const double = "hello JS";
const concat = single + double;
const paragraph = "\n";
// Backtick을 사용해 Template Literal을 만들 수 있음
const name = 'Huisu';
const message = `My name is ${name}`;

// Boolean
const isNumber = true;
const isString = false;

// null & undefined
// null
// 어떤 데이터가 의도적으로 비어졌을 경우 사용하는 데이터
let answer = null;
// undefined
// 값이 정의되지 않을 때 임시적으로 데이터가 비어 버릴 때
let answerNotDefined;