// 증가&감소 연산자 (Increment & Decrement Operators)

let a = 0;
console.log(a);

a++; //a = a + 1;
console.log(a);

a--; //a = a - 1;
console.log(a);

console.clear();
// 주의!
// a++ : 필요한 연산 후, 그 뒤 값을 증가시킴
// ++a : 값을 먼저 증가시키고, 그 뒤 필요한 연산을 함

a = 0;
console.log(a++);
console.log(a);

let b = a++; // 1이 아니네; 0을 할당하고 1을 추가시킴. b=a=0=b=a=1 이런 느낌
console.log(b);
console.log(a); // 그래서 a 로그 보면, b는 0이고 a는 1이 되어있는걸 알 수 있음


