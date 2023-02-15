// 호랑이와 개의 공통점! 동물. 먹고, 자는건 똑같죠?
// 상속을 사용해봅시다

// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('냠냠');
//     }
//     sleep() {
//         console.log('쿨쿨Zzz');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('냠냠');
//     }
//     sleep() {
//         console.log('쿨쿨Zzz');
//     }
//     play() {
//         console.log('놀자!');
//     }
// }

//즉, 공통양식
class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('냠냠');
    }
    sleep() {
        console.log('쿨쿨Zzz');
    }
}

class Tiger extends Animal {}
const tigerJack = new Tiger('호피무늬');
console.log(tigerJack);
tigerJack.sleep();
tigerJack.eat();

class Dog extends Animal {
    constructor(color, ownerName) { //신규속성 추가시 부모클래스 요소color도 가져와야 함.
        super(color); //내가 상속하고 있는 부모생성자정보 그대로 가져옴
        this.ownerName = ownerName;
    }
    play() {
        console.log('산책?');
    }

    //overriding 자식 클래스에서 부모 클래스 함수를 덮어씌우는 것
    eat() {
        super.eat(); //기존 부모요소냠냠 가져오고
        console.log('댕댕은 챱챱'); //새로 추가한 것
    }
}
const doggy = new Dog('누렁이', '수빈')
console.log(doggy);
doggy.sleep();
doggy.eat();
doggy.play();