// return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨!
function add(a, b) {
  //return a + b;
  return undefined;
}

const result = add(1, 2);
console.log(result);

function print(num) {
  if (num < 0) {
    return; // 사실상 return undefined.
    //함수 수행할 수 있는 조건이 아닐때 함수 도입부에서 조기종료 가능ㅎ
    //많이 사용!✨
    
  }
  console.log(num);
}
// const outcome = print("text");
// console.log(outcome);

print(12);
print(-12);
