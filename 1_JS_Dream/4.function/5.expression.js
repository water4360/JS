// 함수에는 문과 표현식이 있어용. 이전까지 배운게
// 함수 선언문 function name() { }
// 이번에는 🌟함수 표현식 const name = function () { }

let add = function (a, b) { //이 경우 sum이라는 이름을 지어도 add에 할당되는거라 의미가 없음. 그냥 무명(noname)으로 쓰고 할당된 add를 씀.
    return a + b;
    
};
console.log(add(1, 2));

// 그리고 🌟화살표 함수 const name = () => { }
// add = (a, b) => a + b; 단순히 출력만 하는거라면 다 생략하고 이런 식으로 쓸 수도 있음.
add = (a, b) => {
    return a + b
};
console.log(add(1, 2));


// 생성자 함수 const object = new Function(); 이후 객체편에서 다룰 예정


//바로 실행하고 싶을 때는 (function 이름() {})(); 이렇게 괄호로 묶으면 됨. 프엔에서 가끔 씀.
// "IIFE" (Immediately-Invoked Function Expressions)
(function run() { //이모지 출력하는 함수. 정의만 해놓으면 실행이 안됨.
    console.log('😘');    
})();
