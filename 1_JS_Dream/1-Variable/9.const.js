// let 재할당 가능
let a = 1;
a = 2 ;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 그래서 이렇게 재할당하면 에러남ㅋㅋ


// 1. 상수
const MAX_FRUITS = 5; //상수 사용시 항상 대문자! 그리고 _(언더스코어)로 분리!

// 2. 상수변수
const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
};
// apple = {};
console.log(apple);

apple.name = 'orange';
console.log(apple); // 짜잔 변경되어버림~ 위치는 못 바꿔도 내용물은 바꿀 수 있다. 약간 붙박이장 느낌?ㅎㅎ


