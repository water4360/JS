// 동등 비교 관계 연산자 (Equality operators)
// = 할당. 지정.
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2"); //true = 타입은 다르지만 담긴 것은 같음
console.log(2 === "2"); // false = 값은 같지만 타입은 숫자와 문자로 다름
console.log(true == 1); //true
console.log(true === 1);
console.log(false == 0); //true
console.log(false === 0); //false

console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //false지롱... 왜냐면 저장된 메모리주소가 달라용
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); //true~
console.log(obj1.name === obj2.name); //true2 내용물은 똑같기 때문.

let obj3 = obj2;
console.log(obj3 == obj2); //false 예상...했으나 둘 다 true true
console.log(obj3 === obj2); //헐.. 값도 똑같고 레퍼 주소도 같아서라고 함.
