//terable 하다는건! 순회가 가능하다는 것!
// 객체 안에서, []를 호출했을 때, next next 호출이 가능한 iterator를 반환하면 되죠.(??)
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? = for ... of, spread 같이 빙글빙글 도는 걸 쓸 수 있음 (???)

const array = [1, 2, 3];
for(const item of array.entries()) { //배열 안에 있는 것에 하나하나씩 아이템으로 받아오는 연산자인데요~
    console.log(item); // 1 2 3
}

// 그리고 array가 규격사항을 따르는지 확인해보고 싶잖아요.
// 컨트롤 클릭하면 iterableiterator라고 정의되어 있고요.

// const obj = {0:1, 1:2};
// for(const item of obj) {
//     console.log(item);}
// 똑같이 array 대신 obj를 해보면 에러가 납니다.
// 왜냐하면 symbol iterator라는 함수가 없기 때문이에요.

const obj = {0:1, 1:2};
for(const item in obj) { //대신 in을 쓸 수 는 있어요. = 0 1 이라는 키값출력
    console.log(item);}

// array.values() = 1, 2, 3
// array.keys() = 0, 1, 2
// array.entries() = 0 : 1, 1 : 2, 2 : 3
//이렇게 iterator를 반환하는 함수들도 for ... of 에서 또는 spread 연산자에서 사용이 가능합니다.
// 일단 뭔말인지 잘 모르겠지만 적어봅니다^_ㅠ


// 수동적으로 사용하는걸 보여드릴게요
// const iterator = array.values(); //1. array에 있는 values의 iterator를 받아올게요
// for(const item of iterator) { //2. entries 대신에 iterator라는 변수를 써주고요.
//     console.log(item); // 3. 값이 1 2 3 그대로 나오죠?
// }


//4. 또는 값을 하나만 알고 싶다면 iterator를 이용해서 next를 호출해도 괜찮아요.
const iterator = array.values(); 
// value:1, done:false = next 호출시마다 값을 감싸고 있는 객체가 리턴이 되는데
// value라는 키에는 실제값이, done에는 반복여부, 즉 마지막템인지 아닌지 알 수 있어요.(????ㅠ)
// console.log(iterator.next());
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // undefined
// console.log(iterator.next().done); // true 반복끝~
// 너무 복잡하니까 간단하게 해볼까여(ㅠㅠ)
while (true) {
    const item = iterator.next(); //iterator 다음 값을 받아서
    if(item.done) break; // item 반복이 끝나면, 종료하고
    console.log(item.value); //1 2 3 = done이 아닌 경우 item.value를 출력해서 값을 확인
}
//자 사실상 맨 처음 연산자(?)랑 같은 결과. 즉 맨 처음 for...of가 syntethic sugar 구나 알 수 있음 (?????)
// 이어지는 퀴즈에서 확인해볼게요ㅎ

