// TODO: 이 부분 일단 받아적긴 했는데 이해는 어려움
// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a= 1, b = 1 (undefined 일때만 기본값 쓰고 외부값 주어지면 그 값 씀.)
function add(a=1, b=1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]); //전달된 인자의 인덱스를 보여주네여
  return a + b;
}
add(2, 2);

// Rest 매개변수 (Rest Parameters)
function sum(a, b, ...numbers) { // 몇 개의 인자를 받을지 모를 때 쓸 수 있음
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8)