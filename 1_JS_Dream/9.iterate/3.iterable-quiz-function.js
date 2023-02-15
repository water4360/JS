//FIXME: 함수 재사용화

// [Symbol.iterator]() : Iterator{ next() {value, done} };
// 0부터 10-이하-까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2..., 9(?)
// 0, 2, 4..., 18(?)

//1. 함수(음, 일종의 포맷?)를 만들어주고
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

//2. 기능을 명명...해주는거 맞나?
const multiple = makeIterable(0, 10, (n) => n * 2)
for (const num of multiple) {
  console.log(num);
}

// 만약 싱글을 하고 싶다면?
const single = makeIterable(0, 10, (n) => n)
for (const num of single) {
  console.log(num);
}
