// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (고전적 방법, 현업에서 더이상 사용X)
// 2. 클래스🌟 (최신~)
// 저번에 생성자로 만들었던 걸
// 클래스 Class 로 변환해볼게용

class Fruit {
  //생성자 : new 키워드로 객체 생성시 호출되는 함수
  constructor(name, emoji) {
    this.name = name; // 일종의 링크.
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}


// apple은 Fruit 클래스의 '인스턴스' 이다. 용어 확실히.
const apple = new Fruit("apple", "🍎");
// lemon은 Fruit 클래스의 '인스턴스' 이다.
const lemon = new Fruit("lemon", "🍋");


console.log(apple);
console.log(lemon);
// 당연히 아래와 같이 접근도 가능함.
// console.log(apple.name);
// console.log(apple.emoji);
apple.display();
lemon.display();


// 참고 : objs는 그냥 객체이고, 그 어떤 클래스의 인슨턴스도 아님.
const obj = {name : 'Hari'}
