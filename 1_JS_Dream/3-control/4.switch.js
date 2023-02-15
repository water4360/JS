// 조건문 Conditional Statement
// switch 조건문이지만 if와는 살짝 성격이 다름
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

// 요일을 정한다고 칠때
let day = 9; // 0:월, 1:화 ... 6: 일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}

switch (day) {
  case 0:
    dayName = "월요일";
    break; // ✨매우 중요. 충족되는 조건에서 멈추지 않으면 맨 마지막까지 달려간다~~
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break;
    default: console.log("해당 요일이 없음");

}

console.log(dayName);

let condition = "good"; // okay, good -> 좋음!, bad -> 나쁨!

let text;
switch (condition) {
  case "okay":
  case "good":
    text = "좋아!";
    break;
  case "bad":
    text = "나빠!";
    break;
}
console.log(text);