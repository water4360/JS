// 논리연산자 Logical operator
// || 그리고 and
// || 또는 or
// ! 부정 not - from 단항연산자
// !! Boolean 값으로 변환. 단항연산자 응용버전.

let num = 3;
if(num >= 0 || num < 20) {
    console.log('👍');
}

if(num != 8) {
    console.log('👎');
}

console.log(true && true); // true
console.log(true && false); // 둘 중 하나라도 false라면 = false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text'); //문자열은 true니까 ! 한 번 부정이면 false가 되지여