// 맵에서의 키는 유일해야 합니다.
// 키만 다르다면 중복이 가능해요.
// 맵과 오브젝트가 유사해요

const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재여부
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false
// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }
// 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key2')); // 🍌
console.log(map.get('key6')); // undefined
// 추가
map.set('key3', '🥝');
console.log(map);
// 삭제
map.delete('key3', '🥝'); // 항상 키를 이용해서 추가하고 삭제해야해요. 키가 유일한 아이디이기 때문!
console.log(map);
// 전부삭제
map.clear();
console.log(map); // {}

// 오브젝트와의 큰 차이점이 뭔가요?
const key = { name : 'milk', price : 10}
const milk = { name : 'milk', price : 10, memo : '맛있는 우유'}
const obj = {
    [key]:milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
// 사실 구조상 유사하지만 map2는 map2이기 때문에 사용할 수 있는 함수가 많아요~ object는 다름.

console.log(obj[key]); // 오브젝트는 바로 내용에 접근가능
console.log(map2[key]); // undefined = 바로 접근 불가능.
console.log(map2.get(key)); // 이런식으로 get을 이용해서 접근가능.