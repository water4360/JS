//불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);


//활용예;
let isFree = true; //is를 붙여서 의문문으로 만들어준다!!
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!''); //텅텅빈 문자열
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
