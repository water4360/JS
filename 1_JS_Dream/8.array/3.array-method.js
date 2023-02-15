// 배열의 함수들에 대해서 배워볼거고
// 주로 많이 사용하는 걸 알아볼게요
// 포인트 : 1. 배열 자체를 변경하는지, 2. 새로운 배열을 반환하는지

const fruits = ['🍌','🍎','🍋'];

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits)); // true = 배열맞음ㅇㅇ / TODO:별개로 이 함수쓰는 방법 헷갈림
console.log(Array.isArray({})); // false = 비어있음. 배열아님.

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 1 = 응 1번째.

// 배열안에 특정한 아이템을 찾을 때
console.log(fruits.includes('🍎')); // true = 응 있어.


//맨 뒤 추가하는 방법(.push) = 1. 배열 자체를 변경하는구나~
let length = fruits.push('🍑');
console.log(fruits); // 레몬 뒤에 복숭아 추가 완료
console.log(length);


//맨 앞 추가하는 방법(.unshift)
length = fruits.unshift('🍓');
console.log(fruits);
console.log(length);

// 맨 뒤 제거(.pop)
let lastItem = fruits.pop();
console.log(fruits + "pop"); // 복숭아 삭제된 나머지 4개
console.log(lastItem); //🍑 = 제거된 마지막이 복숭아

//맨 앞 제거(.shift)
lastItem = fruits.shift();
console.log(fruits); // 딸기 삭제되고 나머지 3개
console.log(lastItem); // 🍓 = 제거된 거 딸기.



// 중간에 추가 또는 삭제 = 마치 split + slice같네
const deleted = fruits.splice(1, 1); // 좌표처럼 생각하면 됨. 1부터 시작해서 1번째를 삭제.
console.log(fruits); // 바나나, 레몬만 남음.
// console.log(deleted); // 삭제된 것? 사과.
fruits.splice(1, 1, '🍎', '🍓') // 이번엔 추가해볼까여
console.log(fruits); // 바나나, 사과, 딸기, 레몬 / 흠, 레몬 앞에 추가됐네~


// 2. 잘라진 새로운 배열을 만드는 api가 있습니당
let newArr = fruits.slice(0, 2); // 시작하는 인덱스0는 포함, 2는 제외
console.log(newArr); // 잘라진 것만. 바나나&사과 출력.
console.log(fruits);

newArr = fruits.slice(); // 아무것도 지정하지않으면 통째로 슬라이스~
console.log(newArr); // 바나나, 사과, 딸기
console.log(fruits);
newArr = fruits.slice(-1); // -1로 지정하면 맨 뒤에서 하나만 슬라이스~
console.log(newArr); // 딸기 등장~


//여러개의 배열을 붙여줄 수도 있어요
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); // 1,2,3,4,5,6 이어져 나오지요

//순서를 거꾸로 할 수도 있어요
const arr4 = arr3.reverse();
console.log(arr4); //6,5,4,3,2,1 거꾸로~
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
// 배열 안에 배열, 그 안에 또다른 배열이 있다면.
let arr = [
    [1, 2, 3],
    [4, [5, 6, [7]]],
];
console.log(arr);
console.log(arr.flat(3)); // 기본()1단계, 추가로 원하면 (숫자).

arr = arr.flat(3); // 일단 다음 단계를 위해 배열 플랫하게 풀어주고.

//특정한 값으로 배열을 채우고 싶다?
arr.fill(0); // 모든 아이템을 0으로 채우겠다?
console.log(arr); // 전부 0으로 채워짐.

arr.fill('s', 1, 3); // 1부터 3 전까지. end 인덱스는 포함하지 않고.
console.log(arr);

arr.fill('a', 1); // 1부터 끝까지~
console.log(arr);

// 배열을 문자열로 합하기
// join - 배열들이 , 를 이용해서 문자처럼 나열됨.
let text = arr.join();
console.log(text); //0,a,a,a,a,

text = arr.join(' | '); // , 말고 |로 합하고 싶다.
console.log(text); // 0 | a | a | a | a