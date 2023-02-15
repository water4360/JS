// Object literal { key: value}
// new Object() -클래스 이용
// Object.create(); - 오브젝트 내부 create 함수 이용
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수 포함) //구체적인 detail, 속성값같은 느낌

let apple = {
    name : 'apple',
    'hello-bye': '✋', //문자열을 쓰면 - 이용해서 이어서 '키' 편집도 가능은 함.
    0: 1,
    ['hello-bye1']: '✋',
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
apple['name'];

// 속성을 추가할 수도 있어요
apple.emoji = '🍎'
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제는
delete apple.emoji;
console.log(apple);