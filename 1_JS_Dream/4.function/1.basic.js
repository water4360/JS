// 사용예제1
function sum(a, b) {
  console.log('function'); //1. 함수를 만들어도 호출하지 않으면 암것도 안떠용
  return a + b;
}

//2.자 호출해봅시다
const result = sum(1, 2);
console.log(result);


// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}✌`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

// let fullName = `${firstName} ${lastName}`;

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));

