// 얕은 복사 Shallow Copy = 객체는 메모리 주소가 전달되므로
// JS에서 복사할 때는 항상 얕은 복사가 이루어진다!
// Array.from, concat, slice, spread(...), Object.assign 등의 기존 오브젝트 전달시에는
// 새로운 오브젝트가 만들어지는 것이 아니라 말그대로 '복사'가 이루어지는 것.


const pizza = { name: '🍕', price: 2, owner:{name : 'Ellie'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);
console.clear();

store2.push(sushi); // 신상 입고
console.log('store1', store1);
console.log('store2', store2);
console.clear();

pizza.price = 4; // 피자 가격 인상
console.log('store1', store1);
console.log('store2', store2); // 피자 가격 4! 동일하게 적용된 것 확인 가능.