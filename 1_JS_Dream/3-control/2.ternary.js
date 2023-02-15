// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참일 때 결과 : 거짓일 때 결과

let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎');
    
} else {
    console.log('😜');
}

fruit === 'apple' ? console.log('🍎') : console.log('😜');



let emoji = fruit === 'apple' ? '🍎' : '😜';
console.log(emoji);