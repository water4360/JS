function add(a, b) {
  // console.log(a);
  // console.log(b);
  return a + b;
}
const sum = add; //add라는 함수의 주소를 가리키는 것과 동일하다

console.log(sum(1, 2));
console.log(add(1, 2));
