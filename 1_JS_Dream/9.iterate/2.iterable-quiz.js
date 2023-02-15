//TODO:Iterator... 12강 강의 다시 보자ㅎㅎ
// 일단은 필수구현 아니라서 이렇게 쓰이는구나 들어보고 넘어가도 된다 하심ㅎㅎ(핵다행)


// [Symbol.iterator]() : Iterator{ next() {value, done} };
// 0부터 10-이하-까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2..., 9(?)
// 0, 2, 4..., 18(?)

const multiple = {
    [Symbol.iterator] () { //1. 이 함수를 호출했을때
        const max = 10; // 4. 10까지 돌건데
        let num = 0; // 5. 시작은 0이구~
        return {
            next() { //2. next를 꼭 호출해야 하고 계속 새로운 값을 만들고
                return { value: num++ * 2, done: num > max} // 3. 끝done인지 아닌지 채워주면 되겠죠. 6-1. next 호출때마다 num*2배 해줄거고, max보다 큰 숫자인지(끝) 확인할거야.
                //6-2. 단, 0에 2만 곱하면 0이니까. * 연산자 할당된 후 num 숫자 증가할 수 있도록 num++
            }
        }
    }
};
for(const num of multiple) {
    console.log(num);
}