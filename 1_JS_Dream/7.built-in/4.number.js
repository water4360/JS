const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //output : number
console.log(typeof num2); //output : object

console.log(Number.MAX_VALUE); //output : 1.79어쩌구e+308
console.log(Number.MIN_VALUE); //output : 5e-324
console.log(Number.MAX_SAFE_INTEGER); //output : 900어쩌구 16자리 숫자
console.log(Number.MIN_SAFE_INTEGER); //output : -900어쩌구
console.log(Number.NaN); //output : NaN = 숫자 아님
console.log(Number.NEGATIVE_INFINITY); //output : -Infinity
console.log(Number.POSITIVE_INFINITY); //output : Infinity

// 얘네를 어디에 쓰냐면요

if(num1 === Number.NaN) { //이게 숫자인지 아닌지
}

if(Number.isNaN(num1)) { //num1이 숫자아닌가요?
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // output : 1.02e+2 = 지수로 변환하기


const num4 = 1234.56
console.log(num4.toFixed()); // output : 1235 = 반올림하여 문자열로 변환

console.log(num4.toString()); // 그냥 문자열로 표기
console.log(num4.toLocaleString('ar-EG')); // 해당 지역 문자열로 표기


// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); //output : 1234.6
console.log(num4.toPrecision(4)); //output : 1235
console.log(num4.toPrecision(2)); //output : 1.2e+3 = 전체자릿수 표기안될 때는 지수표기법

if(0 < Number.EPSILON < 1) {
    console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // ExpectedOutput : 0.1 / ActualOutput : 0.1000003 => 컴터의 이진수 계산시 발생하는 오차
console.log(num);


function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON; // 음수될 것을 고려해서 절대값Math.abs 사용비교.
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); //원래 output : false => EPSILON 쓰면 TRUE