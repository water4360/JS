// 배열을 만들때는 array라는 클래스를 사용하기 보다는 배열 리터럴[]을 많이 사용하고요

const fruits = ['🍌','🍎','🍇','🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); //이렇게 0부터 시작하는 [인덱스] 지정
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
//.을 찍으면 쓸 수 있는게 나와요
console.log(fruits.length); 


//코드 간소화~
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//추가, 삭제의 썩 좋지 않은 방식❌❌
//이런 식으로 직접 배열 지정하면, 덮어씌워지는 항목이 삭제될 수도 있고 빈칸 2 empty item이 생길 수도 있죠.
fruits[4] = '🍓';
console.log(fruits);

// 빈 자리가 채워지지 않아요~ empty item으로 남아있어요ㅜ ㅜ

delete fruits[1];
console.log(fruits);