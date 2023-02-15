// JS에는 래퍼 객체라는 개념이 있어요 Wrapper Object
// 원시값을 '필요에 따라' 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입

//number 원시 타입을 감싸고 있는 Number라는 클래스의 객체로 감싸짐
console.log(number.toString());
console.log(number); // number 원시 타입 그대로 출력


const text = 'text'; // string 문자열의 원시 타입
console.log(text);
text.length // String 객체
text.trim()