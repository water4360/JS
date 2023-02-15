// 구조분해 할당 = Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🍎','🍋','🍑','🍌']
const [first, second, ...others] = fruits;
//각각 이름을 주고 할당을 하면 인덱스로 접근안하고 내가 만든 의미있는 이름으로 출력할 수 있어요.
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point; // 기존 할당데이터에 기본값이 없으면 그자리에서 할당도 가능!
console.log(x);
console.log(y);
console.log(z);

// 이걸 함수로도 생각해볼 수 있는데요
// 리액트 뿐 아니라 다른 프레임워크에서도 이걸 활용하는 예제가 정말 많습니다

function createEmoji() {
    return ['apple', '🍎']
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

// 마지막! 오브젝트 관련해서 하나 더!
const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({name, age, job}) { // (person)의 경우, 사람을 받아오면 관련정보 출력이라고 볼게요
    console.log('이름', name); // 이렇게 안했으면 person.name,
    console.log('나이', age); // person.age
    console.log('직업', job); // person.job 이렇게 막 person 중복됨. 첨부터 분해해서 받아오면 심플!
}
display(ellie);

// 찐 마지막ㅋㅋ
// 그냥 변수할당 할때도 쓸 수 있어요. 미리 ellie라는 오브젝트로부터 받아오면?
const {name, age, job: occupation, pet = '' } = ellie;
// job변경은 : 땡땡. 기본값pet 할당도 가능합니다~
console.log(name);
console.log(age);
console.log(occupation);

console.clear();
// Quiz
const prop = {
    name : 'Button',
    styles : {
        size: 20,
        color : 'black'
    },
};
// console.log(prop);
// 해설 : 전달받은 오브젝트의 {, 'styles'라는 키의 : { 'color'라는 키를 구조분해 할거야.
function changeColor({styles: {color}}) {
    console.log(color); //prop.styles.color가 아니라 다이렉트 접근 가능하게!
}

changeColor(prop);
// 마무리 : 5.spread, 6.destructure는 정말 많이 쓰여요~~
