console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)') // 값으로 평가해서 출력가능
console.log(isFinite(1)); //유한, 무한 여부 확인
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL은 URI, Uniform Resource Identifier 의 하위개념
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리(정해진 다른 문자로 변환)를 해줘야 해요
const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);//전역함수
console.log(encoded);

//반대개념 - 프엔 백엔에서 서로 통신할 때 유용하게 사용가능
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));