// 함수내부5에서 외부로부터 주어진 인자의 값4을 변경하는 것은 절대 안됩니다❌
// 상태변경이 필요한 경우, 새로운 상태(오브젝트, 값)를 만들어서 반환해야 함
// 원시값 = 값에 의한 복사.
// 객체값 = 참조에 의한 복사 (메모리 주소)

function display(num) {
    num = 5; // ❌
    console.log(num);
}

const value = 4;
display(value);
console.log(value);


// 극단적 나쁜 예시.
// 1. displayObj, 즉 보여준다는 기능 안에서 연관없는!
// 2. 외부인자Ellie를 임의Bob로 고친 것.
function displayObj(obj) {
    obj.name = 'Bob'; // ❌❌❌❌❌
    console.log(obj);
}
const ellie = {name : 'Ellie'};
displayObj(ellie);
console.log(ellie);

function changeName(obj) { //함수 이름부터 제대로 명명할 것.
    return { ...obj, name: 'Bob'}; //반환할 때는 새로운 오브젝트를 만들것
}

