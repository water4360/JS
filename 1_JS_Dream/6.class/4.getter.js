// 접근자 프로퍼티 (Accessor Property) get !!
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}` // 순서 주의
    }

    set fullName(value) {
        console.log('from set', value);
    }
}

const member = new Student('수지', '김');
member.firstName = '안나';
console.log(member.firstName); 
console.log(member.fullName); // 이렇게 .으로 하면 get 호출
member.fullName = '김철수'; // 이렇게 =으로 할당하면 set으로부터 불러와짐
