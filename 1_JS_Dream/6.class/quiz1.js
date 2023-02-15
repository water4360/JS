// 카운터를 만들거에요
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들어보세요
// Counter 클래스 만들기!

// 쉬운거였는데...
// 사용자 입장에서 먼저 unit 테스트 해봄.



class Counter {
     #value;
    constructor(startValue) {
        if(isNaN(startValue) || startValue < 0){
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }
    get value() {
        return this.#value;
    };
    increment = () => {
        this.#value++;
    };
    
}
const counter = new Counter(0);
counter.increment(); // 1이 되어야 함
counter.increment(); // 2가 되어야 함
console.log(counter.value); 
