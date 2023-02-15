// 자~ 이제 객체에도 함수를 섞을 수가 있어요~
const apple = {
    name : 'apple',
    // emoji : '🍎'
    display : function () {
        console.log(`${this.name}: 🍎`); //1. 자기자신의 속성에 접근할때는 this.를 붙여야 함
    },
};

apple.display(); //이렇게 호출하면. apple에 있는 display가 실행.
//이처럼 객체는 연관된 정보와 함수를 묶어서 관리할 수 있습니다!