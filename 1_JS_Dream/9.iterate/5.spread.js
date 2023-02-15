// Spread 연산자, 한글로는 전개구문입니다.
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐질 수 있다.
// func(...iterable) 다수의 인자들을 받아올떄 ...를 사용했죠
// [...iterable] 배열에서도 펼쳐서 담을 수 있고
// {...obj} 오브젝트도.
// EcmaScript 2018 비교적 최신 담겼음

function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2])); // 넘 번거롭죠
console.log(add(...nums)); // 촤르륵, 스프레드 연산자를 이용하면 자동으로 전달이 돼요


// Rest parameters 함수에서 이걸 배웠져... 아마도...ㅎ;
function sum(first, second, ...nums) {
    console.log(nums);
}
// sum(1, 2, 0, 1, 2, 4); // 이거 무슨 용도지?


// Array concat : 2개의 배열을 합칠때.
const foods1 = ['🌭','🍟']
const foods2 = ['🍔','🍕']
let arr = foods1.concat(foods2);
console.log(arr);

arr = [...foods1, '🥞' ,...foods2] // 쉽게 합칠 수 있고, 중간에 뭘 더 추가하는 것도 쉽게 가능!
console.log(arr);

// Object
const ellie = {name: 'Ellie', age: 20, home: {address:'home'}};
const updated = {
    ...ellie, // 위의 정보를 고대~~로 갖고오고
    job : 's/w engineer',
};
console.log(ellie); // 기존 엘리 정보는 그대로이고
console.log(updated); // name, age에 +job직업이 추가되었죠~