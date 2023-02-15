// Set은 순서가 없음. 단, 중복안됨 <-> 배열Array이랑 다른점
// 그냥 덩어리
// 비교적 간단. 사용할 수 있는 함수가 많지 않거든요ㅎㅎ;
const set = new Set([1, 2, 3]); //()빈 것도, ([])배열도 가능
console.log(set);

console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// set은 iterable하므로 순회도 할 수 있습니다~
// 그래서 고차함수처럼 하나씩 받아서 출력하는 것도 할 수 있어요
set.forEach((item) => console.log(item)); // 1 2 3
for(const value of set.values()) {
    console.log(value); // 1 2 3
}

// 새로운 아이템을 추가하고 싶다면?
set.add(6)
console.log(set); // 1, 2, 3, 6
set.add(6) // 또 추가해봤자? 
console.log(set); // 무시됩니다. 중복이 안돼요 절대로.

//삭제도 할 수 있어요.
set.delete(6)
console.log(set); // 다시 {1, 2, 3}

//전부 삭제하면?
set.clear();
console.log(set);  // {} 빈 오브젝트~

// 지금까지 원시타입=숫자로 만들어봤는데 당연히 객체로도 만들 수 있어요
// 오브젝트 세트

const obj1 = {name : '🍎', price : 8}
const obj2 = {name : '🍌', price : 5}
const objs = new Set([obj1, obj2]);
console.log(objs); // 그대로 2개의 객체 {name : '🍎', price : 8}, {name : '🍌', price : 5}

//퀴즈
obj1.price = 10; // 가격을 인상하고=변동을 주고
objs.add(obj1); // 다시 추가하면?
console.log(objs); // 예상:무시될 것 같음(변동x) 결과 : 사과값 10. shallow-copy 신규내용이 덮어쓰네.

// 퀴즈2
const obj3 = {name : '🍌', price : 5} // 1. obj2랑 똑같은걸 만들어서
objs.add(obj3); // 2. 추가해주면?
obj3.price = 3; // 6. 만약 가격을 바꿔도? 오브젝트 3의 바나나값만 3으로.
console.log(objs);
// 3. 예상 : 진짜 변동없을 것 같음ㅋㅋ
// 4. 결과 : { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 }
// 5. 세트 하나 더 추가되네; 다 틀리네;; 오브젝트{}는 메모리 별도 주소로 저장되고 참조주소만 달라지니까~
