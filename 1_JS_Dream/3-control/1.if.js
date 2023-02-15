// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if(조건2) { } else { }

let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎');
    
} else if(fruit === 'lemon'){
    console.log('🍋');
} else {
    console.log('😜');
}

if (2 < 1) {
   console.log('출력되면 안됨!'); //false, undefined, null 등등일때는 출력 안됨
}