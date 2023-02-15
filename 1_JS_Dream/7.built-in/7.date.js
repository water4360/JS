// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 아무 인자가 없으면 지금 날짜가 뜸
console.log(new Date('Jun/5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now()); // 1673160550350(^^?)
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0 = 1월, 11 = 12월이니 주의할 것
console.log(now.getFullYear());
console.log(now.getMonth()); // 0 = 1월
console.log(now.getDate()); // 0 = 1일
console.log(now.getDay()); // 0 = 일요일 ... 6 = 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식; 어디 쓰는진 몰겠음
console.log(now.toLocaleString('en-US')); //output : 1/8/2023, 3:57:21 PM
console.log(now.toLocaleString('ko-KR')); //output : 2023. 1. 8. 오후 3:57:21
