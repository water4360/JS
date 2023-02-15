// Nullish Coalescing Operator
// ES11 추가
// ?? 이렇게 생겼어요
// ?? null과 undefined 일때만 수행하고 싶다면?
// || 연산자는 falsy한 설정 0, -0, ''

let num = 0; // 숫자 0 = false로 인식;;
console.log(num || '-1'); // 0이 아니라 -1을 반환하는 원치않는 결과 발생~
console.log(num ?? '-1'); // ?? 얘를 뭐라고 해석하면 좋을까~