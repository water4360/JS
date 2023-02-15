// 지루하면 건너뛰고 안봐도 괜찮아요ㅎㅎ;
// 하지만 중요하니까 만들어보겠습니다~~ (^^?)
// Math 
// static properties, method 에서 많이 가지고 있어서 사실 직접 만들일은 잘 없어요

console.log(Math.E); // 오일러의 상수, 자연로그의 밑 (^^??)
console.log(Math.PI); // 원주율 PI값

// static method
// 절대값
console.log(Math.abs(-10));

//소수점 이하를 '무조건' 올림
console.log(Math.ceil(1.4)); // 2
//소수점 이하를 '무조건' 내림
console.log(Math.floor(1.4)); //1
//소수점 이하를 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// 정수만 반환
console.log(Math.trunc(1.5432)); //1

// 정말 많이 쓰이는 것.
// 최대, 최소값
console.log(Math.max(1, 3, 4)); // 4
console.log(Math.min(1, 3, 4)); // 1

//거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9)); // 3

// 짱유용한 함수
// 랜덤값 반환
console.log(Math.random());
//1~10중의 랜덤숫자를 원한다면?
console.log(Math.random() * 10 + 1); // 마지막에 1은 왜 더하지? 아, 0은 안나오고 10은 나오도록.

//1~10중의 랜덤 정수를 원한다면?
console.log(Math.ceil(Math.random() * 10)); // floor 대신 ceil로 고치고 +1을 뺐음.

