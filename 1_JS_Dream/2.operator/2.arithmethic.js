// 산술 연산자 (Arithmetic operators)
// +
// -
// *
// / 나누기(몫)
// % 나머지값(나머지)
// ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2); //나머지 1 
console.log(5 ** 2); //ES7 이후 신규기능

// + 연산자 주의점
let text = '두개의' + '문자를'
console.log(text);

text = '1'+1; //결과값 십일=> 숫자+문자열=문자열로 변환됨 주의⛔
console.log(text);

