// while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행
let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

let isActive = false //true여야 while 실행 되겠지여
let i = 0;

//조건이 맞을 때에만 실행하고 싶다면 while
while(isActive) {
    console.log('아직..살아있다!');
    if(i === 3) {
        break;
    }
    i++;
}

//꼭 한 번은 무조건 실행해야 한다면 do while!
do {
    console.log('do-while 아직..살아있다!');
} while (isActive);