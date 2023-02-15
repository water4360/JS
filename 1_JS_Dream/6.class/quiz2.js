// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
// 스타벅스

// 나의 풀이
// class Employee {
//     constructor(name, department, hourPerMonth, payment) {
//         this.name = name;
//         this.department = department;
//         this.hour = hourPerMonth;
//         this.payment = payment;
//     }
//     get totalPayment() {
//         return this.hour*this.payment;
        
//     }
// }

// const manager = new Employee('김월','정규직',60, 10000)
// const partTimer = new Employee('박금','파트타임',80, 8000)
// console.log(`${manager.name}은 ${manager.department}소속이며 월급은 ${manager.totalPayment}원 입니다.`);
// console.log(`${partTimer.name}은 ${partTimer.department}소속이며 월급은 ${partTimer.totalPayment}원 입니다.`);

//FIXME:풀이 후 감상문: 소속이 바뀌면 시급도 바뀌니까 인스턴스에 시급을 넣을게 아니었네!





class Employee {
    constructor(name, department, hoursPerMonth, payRate) { //요즘에는 생성자에 입력만 하면 자동으로 만들어주기도 한다함ㅋㅋ JS는 해당없음ㅋㅋ
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000; // 4. 상수변수로 적어두면 가독성이 더 좋음
    constructor(name, department, hoursPerMonth) { //3. 중복같지만 한 번 더 적어주는게 맞고
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE) // super 다음에 개별값(시급)인데, 숫자를 적는것보다!
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE)
    }
}



//선생님 풀이 - 사용자 입장에서 먼저 생각해보자. 1. 어떤 직원들이 있을까? 원하는 결과는?(=한달월급)
const Ellie = new FullTimeEmployee('엘리', '소프트웨어', 30);
const Bob = new PartTimeEmployee('밥', '유지보수', 20);
console.log(Ellie.calculatePay());
console.log(Bob.calculatePay());
//2. 자 그러면 employee 클래스를 만들고 각각 풀타임, 파트타임으로 만들면 되겠다. 그리고 맨 위로 올라가넹;

