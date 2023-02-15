// 우선 순위

let a = 2;
let b = 3;

let result = a + b * 4; // 2 + (3 * 4) = 14?
console.log(result);

result = a++ + b * 4; // 2 + 3 * 4 = 14 그대로거나 14+1=15? / 오 14 그대로.
//우선 순위 하고 싶으면 괄호() 쳐주셈
