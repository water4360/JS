let integer = 123; //정수
let negative = -123; //음수
let double = 1.23 //실수
console.log(integer);
console.log(negative);
console.log(double);


let binary = 0b1111011; // 2진수
let octal = 0o173; //8진수
let hex = 0x7b; //16진수
console.log(binary);
console.log(octal);
console.log(hex);
//전부 똑같이 123 123 123으로 나옵니다

console.log(0 / 123); //0
console.log(123 / 0); //Infinity 

console.log(123 / -0); //-Infinity
console.log(123 / 'text'); //NaN (Not a Number)

let bigInt = 123456789n; //n을 붙이면 엄청 큰 숫자라는거 알려주는셈~ 잘 쓸일은 없음ㅎ
console.log(bigInt);