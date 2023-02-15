// class 내에서 사용할 수 있는 '정적' property와 method에 대해서 알아볼게요!

class Fruit {
    static MAX_FRUITS = 4; // 이것도 클래스 레벨 지정이라 인스턴스에서는 접
  //생성자 : new 키워드로 객체 생성시 호출되는 함수
  constructor(name, emoji) {
    this.name = name; // 일종의 링크.
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
        // 클래스 레벨의 메서드는 템플릿이므로 this.를 참조할 수 없음
    return new Fruit('banana', '🍌')
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// console.log(Fruit.name); 이렇게 실행이 안됨. 왜냐면 클래스는 빈박스일뿐! 데이터가 없기 때문.
// Fruit.display();

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit 클래스의 '인스턴스' 이다. 용어 확실히.
const apple = new Fruit("apple", "🍎");
// lemon은 Fruit 클래스의 '인스턴스' 이다.
const lemon = new Fruit("lemon", "🍋");


console.log(apple);
console.log(lemon);

apple.display();
lemon.display();



// Math에도 유용한 static 함수가 있어여. //static인지 아닌지 어케 구분하지;
Math.pow();
Number.isFinite(1);
