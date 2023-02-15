// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020 추가)
// ?. 이렇게 생겼어요 

// null 또는 undefined인 경우를 확인할 때
let item = {price : 1};
const price = item?.price; // item && item 줄여서 .? = 아이템 있니? 있으면 가격. 약간 삼항연산자느낌
console.log(price);

let obj = {name : '🐶', owner : {name : '엘리'}};
const ownerName = obj?.owner?.name; // 원래라면 obj && obj.owner && obj.owner.name; 이렇게 됨ㅋㅋ
console.log(price);