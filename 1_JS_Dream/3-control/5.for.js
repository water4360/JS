// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {}

// 실행순서:
// 1. 변수선언문 - 변수 초기화
// 2. 조건식 값이 참이면 { } 코드블럭 수행
// 3. 증감식 수행 후,
// 4. 조건식 값이 거짓이 될 때까지 2~3 반복

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.clear();

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j); 
  }
}

// 무한루프... 코드가 끝나지 않을 수도 있음
// for(;;) {
//     console.log('😜');
// }
// 계속 true면 안 끝남; 언젠가는 거짓이 되도록 만들어야 함.

//반복문 제어 : continue, break;
for(let i = 0 ; i < 20; i++) {
    if(i === 10) {
        continue; //아래 코드는 바로 무시되고 증액. 그리고 그 다음 반복으로 넘어감. 아래 코드 희미해졌음ㅋㅋ
        console.log('i가 드디어 10이 되었음다');
        break;

    }
    console.log(i);
}
