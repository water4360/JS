// FIXME: 11.10강 다시보기ㅎㅎ;
// Higher Order Function
const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 하나하나 이렇게 하는거 너무 귀찮잖아요.
// 더 간단하게 할 수 있어요.
// 배열을 빙글 빙글 돌면서 원하는 것(콜백)을 할 때!
// fruits.forEach(function(value, index, array) { //배열의 요소마다 한번씩, function을 전달해줄거야~
//     console.log('------------');
//     console.log(value); // 🍌
//     console.log(index); // 0
//     console.log(array); // ['🍌', '🍓', '🍇', '🍓']
//     // 이런 식으로 바, 딸, 포 까지.
// });

//단일값의 경우 아래와 같이 엄청 간단하게도 가능.
console.log("여기");
fruits.forEach((value) => console.log(value));


//조건에 맞는(콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환하고요.
const item1 = {name : '🥛', price : 2 }
const item2 = {name : '🍪', price : 3 }
const item3 = {name : '🍙', price : 1 }
const products = [item1, item2, item3, item2];
//예전이라면 for문 안에 if를 사용해서 아이템 명이 쿠키인지 검사해서 찾아겠죠
//이제는 find라는 고차함수를 사용할 수 있어요
let result // 3. found=>result라는 이름을 주고 4. 로그에 실행하면?
    = products.find((value) => { //1. value에 각각 item 1,2,3,2가 한 번씩 호출이 되고,
    return value.name === '🍪'; //2. 쿠키랑 일치하면 그 값을 value에 넣어줄거에요.
})
//코드 블럭에서 바로 값을 리턴하는 경우에는 생략 가능! = 위 수식의 더 간단한 버전!
//const result = products.find((value) => value.name === '🍪')

console.log(result); // {name : '🍪', price : 3 } array 그대로 짜잔.

// findIndex : 제일 먼저 조건에 맞는 아이템의 '인덱스'를 반환
result = products.findIndex((value) => value.name === '🍪')
console.log(result) // output : 1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪'); // 하나라도 조건에 맞으면 true가 되도록 찾고싶어요
console.log(result); // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪'); 
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result); //쿠키 들어있는 배열 2개 소환~

// console.clear();

//Map = 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // 2, 4, 6, 8, 10
result = nums.map((item) => {
    if(item % 2 === 0) { //2로 나눈 나머지가 0이면(=짝수면)
        return item * 2; // 2를 곱하고
    } else {
        return item; // 아니면 걍 그대로.
    }
});
console.log(result); // 1, 4, 3, 8, 5


// Flatmap : 중첩된 배열을 쫙 펴줘요
result = nums.flatMap(item => [1, 2]); // 1.array 내 각 아이템을 각각 [1, 2] 배열로 바꾸고 2. 펴줬음.
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result); //그냥 map 쓰면 [d,r,e,a,m][c,o,d,i,n,g]

// sort = 배열의 아이템들을 정렬하고
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 '변경'합니다
const texts = ['hi', 'abc'];
texts.sort(); // abc부터~
console.log(texts);

// 단 숫자정렬시 조심해야 할게, '문자'로 인식되기 땜에.
const numbers = [0, 5, 4, 2, 1, 10]
numbers.sort(); // 0, 1, 10, 2...
console.log(numbers);
// 숫자 그대로 정렬하고 싶으면 비교 대상의 콜백을 전달해줘야 해요
//a, b자리에 각각 numbers의 요소를 불러와서 빼보고 0, 음수, 양수에 따라 크기 비교.
//< 0 a가 앞으로 정렬, 오름차순
//> 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b); 
console.log(numbers); // 0, 1, 2, ... 10


// reduce = 배열의 요소들을 접고 또 접어서 값을 하나로.
 //sum은 더하고 더하고 중간합계 느낌 / 0 = 초기값 initial value
result = [1,2,3,4,5].reduce((sum,value) => (sum += value), 0);
console.log(result); //(((1+2)+3)+4)+5 = 15 이런 느낌.
//0으로 시작해서 sum에 value 1를 더할거고. 더한 것에 또 다음 value 2를 더할거고 ...
//최종 더해진 값이 result에 할당!