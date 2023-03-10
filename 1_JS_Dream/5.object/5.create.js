// const apple = {
//     name : 'apple',
//     // emoji : 'π'
//     display : function () {
//         console.log(`${this.name}: π`);
//     },
// };

// const lemon = {
//     name : 'lemon',
//     // emoji : 'π'
//     display : function () {
//         console.log(`${this.name}: π`);
//     },
// };

// μμ±μ ν¨μ / μ€λ³΅λ κ±° νλ²μ λ§λ€μ΄μ£Όλ μΌμ’μ ννλ¦Ώ! λΆμ΄λΉ΅ κΈ°κ³μ²λΌγγ(from 9-1κ° ν΄λμ€)
// ν¨μμ΄κΈ΄ νλ°, ν¨μλͺ μ²«κΈμλ₯Ό λλ¬Έμλ‘ λ§λ€μ΄μ€μΌ ν©λλ€ μλ¬Έμ μλ¨

function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
    //return this; // μλ΅κ°λ₯~ μμ±μ ν¨μμμλ μλμΌλ‘ μ²λ¦¬λ¨
}

const apple = new Fruit('apple', 'π')
const lemon = new Fruit('lemon', 'π')

console.log(apple);
console.log(lemon);
// λΉμ°ν μλμ κ°μ΄ μ κ·Όλ κ°λ₯ν¨.
console.log(apple.name);
console.log(apple.emoji);
apple.display();