// 지난 퀴즈5번의 함수들을 고차 함수화 하기! + 퀴즈4

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array = ['🍌', '🍓', '🍇', '🍓'];

//1차 실패
// const myReplaced = array.map((value) => {
//     if(value === '🍓') {
//         value = '🥝';
//     } else {
//         return value;
//     }
// })

//2차 도전 : return을 까먹어서 키위 자리에 자꾸 undefined가 나왔군요;;
const myReplaced = array.map((value) => {
    if(value === '🍓') {
        return value = '🥝';
    } else {
        return value;
    }
})
console.log(myReplaced);
console.log("1번퀴즈 완료");

//1번퀴즈 선생님 풀이
//삼항연산자 활용해서 그대로...(?)
//item을 전달받아서, item === from이라면? to로 바꾸고, 아니면: item 그대로 쓴다!
function replace(array, from, to) {
    return array.map(item => item === from ? to : item)
}

const result = replace(array, '🍓', '🥝')
console.log(result);
console.log("1번퀴즈 선생님풀이");




// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ] 찾을 것='🥝'
// output: 2
const basket = [ '🍌', '🥝', '🍇', '🥝']
const myCount = basket.filter((item) => '🥝' === item).length
//사실상 구글링으로 90퍼 해결.
//1.조건에 맞는 모든 아이템을 필터(신규 배열화)하고
//2.거기다 .length를 붙여 그것의 길이=개수를 구한다. (천재 아닌지ㅠ)

console.log(myCount);
console.log("2번퀴즈 어떻게든 완료");



// 2번퀴즈 선생님풀이
// 1. reduce 활용!
// function count(array, item) {
//     return array.reduce((count, value) => {
//         if(value === item) {
//             count++;
//         }
//         return count;
//     }, 0)
// }
// 2. filter 활용 = 내가 찾은 방법~
function count(array, item) {
    return array.filter((value) => value === item).length
}
console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'));
console.log("2번과제 선생님풀이");






// // 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// // 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// // input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// // output: [ '🍌', '🍇' ]
const basket1 = ['🍌', '🥝', '🍇'];
const basket2 = ['🍌', '🍓', '🍇', '🍓'];

const myArray = basket1.filter(item => basket2.includes(item))


console.log(myArray);
console.log("3번퀴즈 어제 해놓고 또 모르냐고^^!");


function match(input, search) {
    return input.filter(item => search.includes(item))
}
console.log(match(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));
console.log("3번과제 선생님풀이");









// 퀴즈4
//5보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21]
const bigNums = nums.filter((item) => item > 5);
// console.log(bigNums); // 16, 25, 34, 21
const myAvg = bigNums.reduce((sum, value) => (sum += value), 0) / bigNums.length;

console.log(myAvg);
console.log("4번퀴즈 완료"); // 96 / 4 = 24
// 나머지%랑 몫/이랑 기호 헷갈리지 말것

const result2 = nums
    .filter((num) => num > 5) //
    .reduce((avg, num, index, array) => avg + num / array.length, 0)
    // 개별 값을 4로 나눈 후 한꺼번에 더하는 방법으로 해볼게요~
    // 사용하지 않는 값은 회색으로 변경되죠. _로 바꿔놔도 돼요~
    // 감상문 : 홀,, 고차함수를 2개 연달아 불러올 수도 있네? nums.filter().reduce();
    // sum, value 대신 다른 값을 넣어도 되는구나...ㅎㅎ;
    // 자체 인덱스, 배열값 다 불러와지고 그걸 셀프로 활용할 수 있네. array.length
    // 그럼 내가 한 것처럼 여러번 변수선언 안해도 되고 함수 하나에 다들어가는군.

console.log(result2);
console.log("4번과제 선생님풀이");
