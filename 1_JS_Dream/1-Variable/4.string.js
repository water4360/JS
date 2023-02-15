// 문자열타입
let string = "안녕하세요"; //왜 작은 따옴표로 안 바뀌징;
string = `안녕!`;
console.log(string);
string = '"안녕! 큰따옴표"';
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕! 작은따옴표'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC'; //백슬러시는 줄바꿈, t는 탭 역할. 백슬러시 표시하고싶으면 \ 두번. \\\u 넣고 코드포인트넣으면 유니코드
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '하리';
let greetings = "'안녕!', " + id + "😊\n 반가워"
console.log(greetings);


greetings = `'안녕, ${id}😉
짱 반가워'`;
console.log(greetings);