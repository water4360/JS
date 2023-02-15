const obj = {
    name: '엘리',
    age: 20,
}
// 코딩하는 시점에, 정적으로 접근이 확정될 때 이렇게 쓸 수 있어요
obj.name;
obj.age;

// 하지만 동적(미확정)으로 속성에 접근하고 싶을때 [대괄호 표기법]을 사용할 수 있어요.
function getValue(obj, key) { //key라는 이름이 없음. key는 name이 될수도 age가 될 수도 있자나요?
    return obj[key]; 
}
console.log(getValue(obj, 'name'));

// 키값 추가하기
function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'job', 'developer');
console.log(obj);


// 키값 삭제하기 // value 설정 안해도 되는건 어차피 키값이 삭제되는거니깐~
function deleteKey(obj, key) { 
    delete obj[key]
}
deleteKey(obj, 'job')
console.log(obj);
