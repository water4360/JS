// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정) not
let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a;
console.log(a);

a = +a;
console.log(a);

a = -a; // -5
a = +a; //+(-5)
console.log(a);


let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean); //not of not

// + 숫자가 아닌 타입을 숫자로 변환하면 어떤값이 나오는지 확인가능
console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true); // 얘는 1이넹
console.log(+'text'); // 얘는 숫자가 아니라 NaN
console.log(+undefined); // 얘도 NaN 이넹
console.log(!!1); //true의 부정=false의 부정=true
// ! = 부정연산자, !! = 값을 boolean 타입으로 변환함


