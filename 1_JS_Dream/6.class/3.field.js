// 접근제어자 : 한 번 만들어진 다음, 외부에서 변경안되도록 '캡슐화-사실상 비공개'하고 싶다면 (apple->orange 엥~?)
// private(#), public(기본), protected(자식) 딴 프로그래밍에서는 있는데 JS에는 이런 키워드가 없어요ㅋㅋ
class Fruit {
    #name;
    #emoji;
    type = '과일';
  constructor(name, emoji) {
    this.#name = name; // this.#name이네, = #name이 아니라.
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
// apple.#name = 'orange'; //#field는 외부접근 불가
console.log(apple);
