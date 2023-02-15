/**
 * 예상치 못한 에러가 발생했을 때
 * 우아하게 에러를 처리하는 방법ㅋㅋ
 * 에러가 어느 정도는 예상이 되어야 대비할 수 있겠넹
*/

// try, catch, finally 에 대해 배워볼거에요~

function readFile(path) {
    // throw new Error('파일 경로를 찾을 수 없음')
    return '파일의 내용';
}

function processFile(path) {
    let content;
    try {
    content = readFile(path);
    } catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); // 어느 경로 통해서 와닿았는지?
    content = '기본내용';
    } finally {
        console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
    }
    const result = 'hi ' + content;
    return result;
}

const result = processFile('경로');
console.log(result);