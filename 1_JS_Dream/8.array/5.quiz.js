// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// const replaceFruits = ['🍌', '🍓', '🍇', '🍓'];
// let delete_1st = replaceFruits.splice(1,1, '🥝');
// let delete_3rd = replaceFruits.splice(3,1, '🥝');
// console.log("replaceFruits", replaceFruits);
// console.log("1번과제 완료");

// '함수' 만들기가 문제였는데ㅠㅠ 선생님 풀이 고~
function replace(array, from, to) {
    const replacedArr = Array.from(array);
    for (let i = 0; i < replacedArr.length; i++) {
        if (replacedArr[i] === from) {
            replacedArr[i] = to;
        }
    }
    return replacedArr;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝')
console.log(result);
console.log("1번퀴즈 선생님풀이");



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const kiwiBasket = [ '🍌', '🥝', '🍇', '🥝' ]
// const kiwi = '🥝';

// let kiwiCount = 0;
// for(let i = 0; i < kiwiBasket.length; i++) {
//     if(kiwiBasket[i] === kiwi) kiwiCount++;
// }
// console.log(kiwiCount);
// console.log("2번과제 드뎌 완료");
function count(array, item) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            counter++;
        }
    }
    return counter;
}
    console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));
    console.log("2번과제 선생님풀이");



// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const fruits__1 = ['🍌', '🥝', '🍇'];
const fruits__2 = ['🍌', '🍓', '🍇', '🍓'];
       
const fruits__3 = fruits__1.filter(x => fruits__2.includes(x));
console.log(fruits__3);
console.log("3번과제 구글링(교집합)으로 답찾음");
//const fruits__3 = fruits__1.filter(x => !fruits__2.includes(x)));
//1번템중 2번에 '안' 들어있는 것은? = 차집합 = !(NOT)붙여주기


function match(array1, array2) {
    const array3 = []; // 결과를 나타낼 신규 배열
    for(let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) { //2에 포함된게 있으면(true)
            array3.push(array1[i]); //신규결과에 넣어줘~
        }
    }
    return array3;
}
console.log(match(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));
console.log("3번과제 선생님풀이");
