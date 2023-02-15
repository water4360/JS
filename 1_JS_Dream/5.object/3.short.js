// 오브젝트 만들 때,
const x = 0;
const y = 0;
const coordinate = {x, y};//2. 이름이 똑같다면 축약 가능 //{x: x, y: y}; // 1.위의 변수가 가리키는 값을 가져옴
console.log(coordinate);


function makeObj(name, age) {
    return {
        name, // name : name, 3. 얘네도 이런 식으로 key=value 일 때 축약 가능! 끝~ short 였습니다!
        age, // age : age,
    };
}