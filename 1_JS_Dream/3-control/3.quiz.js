// 퀴즈!
let num = 12;
//num의 숫자가 짝수이면 "👍", 홀수라면 "👎"을 출력하도록
// 1. if 이용할 것
// 2. ternary 이용할 것
// 3. 코드 간결화한 정답의 정석

//1
if(num % 2 < 1) {
    console.log('👍');
} else {
    console.log('👎');
}

//2
num % 2 === 0 ? console.log('👍') : console.log('👎');
// 선생님 방법은 2로 나눈 나머지가 === 0 일 때ㅎㅎ
// 내가 한 건 나머지가 1보다 작은가. 어렵게 함 ㅋㅋ


//3
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);