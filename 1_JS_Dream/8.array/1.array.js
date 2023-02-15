// 배열 생성
let array = new Array(2); // Array 클래스 생성. 2개의 사이즈...
console.log(array); // output : 2 empty items

array = new Array(1, 2); // 컨텐츠 직접입력도 가능
console.log("direct", array);

array = Array.of(1, 2, 3); //static 이용해서
console.log("static", array);

const anotherArray = [1, 2, 3, 4] //대괄호 이용해서 생성도 가능
console.log("another", anotherArray);

array = Array.from(anotherArray); //다른 배열에서 가져오는 것도
console.log("from another", array);

array = Array.from('text'); // output : 't', 'e', 'x', 't'= text도 가능하고요. 작은따옴표 주의~
console.log("from another", array);


// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 JS에서의 배열은 연속적으로 이어져있지 않고
// 오브젝트와 유사합니다! 거의 똑같다고 봐도 상관없어요
// JS의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체입니다!
// 이걸 보완하기 위해서 정해져있는 타입 배열이 있음 (Typed Collections) << 예시를 보여줬는데 어렵다;

// 오브젝트로부터 만들어진 배열입니다! 0,1이라는 인덱스 키가 있고 length라는 키에 몇개의 아이템이 들어있는지만 나타내면
// 배열처럼 보이게 할 수 있어요!
// 배열 사용하다보면 어 이거 오브젝트랑 비슷한데 싶을거에요ㅎㅎ 나중에 유용하게 쓰일거에요~!
array = Array.from({
    0: '안',
    1: '녕',
    length: 2,
});
console.log(array);
