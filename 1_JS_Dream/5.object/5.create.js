// const apple = {
//     name : 'apple',
//     // emoji : '🍎'
//     display : function () {
//         console.log(`${this.name}: 🍎`);
//     },
// };

// const lemon = {
//     name : 'lemon',
//     // emoji : '🍋'
//     display : function () {
//         console.log(`${this.name}: 🍋`);
//     },
// };

// 생성자 함수 / 중복된 거 한번에 만들어주는 일종의 템플릿! 붕어빵 기계처럼ㅋㅋ(from 9-1강 클래스)
// 함수이긴 한데, 함수명 첫글자를 대문자로 만들어줘야 합니다 소문자 안됨

function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
    //return this; // 생략가능~ 생성자 함수에서는 자동으로 처리됨
}

const apple = new Fruit('apple', '🍎')
const lemon = new Fruit('lemon', '🍋')

console.log(apple);
console.log(lemon);
// 당연히 아래와 같이 접근도 가능함.
console.log(apple.name);
console.log(apple.emoji);
apple.display();