// Iterator 보다 간단한 Generator 에요~ (정말일까?ㅎㅎ)
// 마무리 : 근데 왠만해선 우리가 직접 iterator나 generator를 구현할 일이 없다~(???ㅎㅎ)

// const multiple = {
//     [Symbol.iterator] () {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return { value: num++ * 2, done: num > max}
//             }
//         }
//     }
// };

// function 다음에 *를 붙여줘야 generator로 인식합니다~
// 2배씩 숫자를 곱해주는 걸 생성해주는 생성기
function* multipleGenerator() {
    try {   // 2-2. try를 넣고
    for(let i = 0; i < 10; i++) {
        console.log(i); // output : 0 / 0, 1, 2...가 아니구
        yield i ** 2; //return은 바로 리턴하는 반면, 일드는 사용자 요청(next 호출시)까지 기다리고 하나씩.
    }
} catch(error) { //2-3. catch를 넣으면,
    console.log(error); // 2-4. 정상적으로 Error! 출력
}
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
// iterator에서 살펴보지 않은 2개 함수가 더 있어요.
// 1. return하는순간 generator가 끝나게 되고 그 다음에 아무리 next를 호출해도 다음 값이 나오지 않아요. undefined, true!
// multiple.return();
// 2-1. Error를 던질 수가 있어요. 그럼 프로그램이 깨지게 되고 (위로 올라가기)
multiple.throw('Error!');


next = multiple.next();
console.log(next.value, next.done);
