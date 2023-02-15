// ㅎㅎ 내가 이 단계에서 이 내용을 듣고있는 것이 맞는 것인가?ㅎㅎ
// 풀내용 아님. 적다 말았음 ㅋㅋ
// 15-3강 에러 버블링~
// Bubbling up, propagating
function a() {
    throw new Error('error!')
}

function b() {
    a();
}

function c() {
    b();
}

try{
    c();
} catch (error) {
    console.log('Catched!');
}