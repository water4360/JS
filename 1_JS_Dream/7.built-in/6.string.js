const textObj = new String('Hello World!')
const text = 'Hello World!'
console.log(textObj);
console.log(text);
console.log(text.length); // output : 12

console.log(text[0]); // 배열. 텍스트의 0번째 위치
console.log(text[1]);
console.log(text[11]);

console.log(text.charAt(0)); //Character At 함수
console.log(text.charAt(1));
console.log(text.charAt(11));

console.log(text.indexOf('l')); // 문자열 l의 위치
console.log(text.lastIndexOf('l')); // 문자열 l의 뒤에서부터의 위치

console.log(text.includes('tx')); // tx문자열을 포함? false
console.log(text.includes('h')); // 소문자h 포함? false : 대소문자 구분함
console.log(text.includes('H')); // true

console.log(text.startsWith('He')); //He로 시작하나요?
console.log(text.endsWith('!')); //!로 끝나나요?

console.log(text.toUpperCase()); //전부 대문자로 바꿔요
console.log(text.toLowerCase()); //전부 소문자로 바꿔요

console.log('substring ' + text.substring(0, 2)); // output: He = 0포함부터~ 2이전까지.
console.log(text.slice(2)); // llo World! = 앞2글자부터 잘라내기
console.log(text.slice(-2)); // d! = 뒤에서 2글자만 남기기 // 얘네 헷갈리네;;

const space = '          trim example       '
console.log(space.trim()); // 불필요한 공백 삭제


const longText = 'Get to the, point'; 
console.log(longText.split(' ')); // output : Get, to, the, point = 빈칸 기준으로 조각내고 싶다면
console.log(longText.split(' ', 2)); // output : Get, to = 빈칸 기준으로 조각낸 것 2개만 받고싶을때
console.log(longText.split(',', 1)); // Get to the, point = 콤마 기준 조각 1

