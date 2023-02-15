// 총3가지의 퀴즈를 내드릴게요

// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// H
// e
// l 등등

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
// [user1, user2, user3, user4]

const ids = 'user1, user2, user3, user4';

const userGroup = ids.split(',');
console.log(userGroup);



//3. 1초에 한번씩 시계를 '날짜포함' 출력해보자
// setInterval 구글링해서 찾아보세요 
// setTimeout 이랑 비슷해요
//선생님 풀이
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);

// 자꾸 똑같은 시간만 출력하는 잘못된 예
// const now = new Date();
// const printNow = setInterval(() => console.log(now.toLocaleString('ko-KR')), 1000);

// 토론방 풀이... 엄청 간단하네;
// setInterval(() => console.log(new Date()), 1000);
