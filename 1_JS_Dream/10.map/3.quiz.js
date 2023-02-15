// 주어진 배열에서 중복을 제거하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
// output : ['🍌', '🍎', '🍇', '🍑']
// 고민 : 순회하면서 찾고, 있으면 지워라.
// 설명 : 엥 걍 셋 지정하니까 알아서 중복이 날아가버렸넹;
const set = new Set(fruits);
const basket = [...set]; // 혹시나 배열이 필요하다면.
console.log(basket);
console.log("1번 아마도 완료");

console.log("1번퀴즈 선생님풀이:", [...new Set(fruits)]); // 세트의 배열화

function removeDuplication(array) {
    return [...new Set(array)];
}
console.log("1번퀴즈 재사용함수화:", removeDuplication(fruits));






// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
// 고민 : 순회하면서 찾고, 있으면 추가해라?
// 고민2 : set1이 set2에 없으면 삭제해라?
// 고민3 : 필터? 셋은 필터가 안되네; array화 해야되네.
const set3 = new Set([...set1].filter(x => set2.has(x)));
console.log(set3);
console.log("2번 완료");

function findIntersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
}
console.log("2번퀴즈 선생님함수화", findIntersection(set1, set2));