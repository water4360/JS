// 논리연산자 Logical Operator
// && 그리고 AND
// || 또는 OR
// 단축평가되는 특징이 있는데요 Short-circuit evaluation

const obj1 = { name : '🐶'};
const obj2 = { name : '🐱', owner : 'Ellie'};

if (obj1 || obj2) {
    console.log('둘 다 true!');
}

//이 경우는 어떨까요?
let result = obj1 && obj2;
console.log(result);
// obj2가 출력되네요? '조건문 밖에서' &&일때는 당연히 앞obj1이 true니까 뒤obj2는 바로 result에 할당돼요.

result = obj1 || obj2;
console.log(result);
// ||에서는 obj1이 true니까 뒤는 볼것도 없이 obj1을 result로...!
// 이게 바로 논리 연산자가 단축평가되는 특징이에요.
// 첫번째 true = result라고 보면 될듯.


//활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falsy일 때 || 무언가를 해야 할 경우
// 함수 2개를 만들어볼건데요

function changeOwner(animal) {
    if(!animal.owner) {
        throw new Error("주인이 없어")
    }
    animal.owner = '바뀐 주인';
}

function makeNewOwner(animal) {
    if(animal.owner) {
        throw new Error("주인이 있어")
    }
    animal.owner = '새로운 주인!'
}

//주인이 있으면 && 체인지 오너할거고
obj1.owner && changeOwner(obj1); // false && true = 없어서false 실행true 안됨
obj2.owner && changeOwner(obj2); // true && true = 있어서 실행됨
console.log(obj1);
console.log(obj2);

//주인이 없으면 || 새로운 주인을 만들거예요
obj1.owner || makeNewOwner(obj1); // false || true 없어서false 실행true 됨 
obj2.owner || makeNewOwner(obj2); // true || false 있으니까true 실행 안됨
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
// 아이템의 property가 없으면 앱이 crash 되버리니까
let item = {price : 1};
const price = item && item.price; // item = true니까 price할당이 돼서 undefined라고 떠요.
console.log(price);

// TODO:14-2강 와 여기 막 @#$@#% 하다;; 나중에 다시 봐야징
// 기본값을 설정
// default parameter는 전달하지 않거나, undefined인 경우에만 설정이 돼요
// || 연산자는 모두 값이 falsy한 경우 설정(할당) : 0, -0, null, undefined, ''(빈문자열)
function print(message) {
    const text = message || 'Hello!';
    console.log(text);
}
print(); 
print(undefined);
print(null);
print(0);