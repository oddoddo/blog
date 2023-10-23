// 산술(Arithmetic) 연산자
// 산술 연산자(

// 1. 덧셈 연산자
console.log(1 + 2); // 3

// 2. 뺄셈 연산자
console.log(5 - 7); // -2

// 3. 곱셈 연산자
console.log(3 * 4); // 12

// 4. 나눗셈 연산자
console.log(10 / 2); // 5

// 5. 나머지 연산자
console.log(7 % 5); // 2

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEvent(3)); // false
console.log(isEvent(4)); // true

// 6. 거듭제곱 연산자
console.log(2 ** 3); // 8

// 7. 단항 연산자
console.log(-3); // -3

// 8. 증가 연산자
let b = 1;
console.log(b++); // 1
console.log(b); // 2

// 9. 감소 연산자
let c = 1;
console.log(c--); // 1
console.log(c); // 0

// 10. 할당 연산자

const a = 1;
a = a + 3;
console.log(c); // 4

let aa = 1;
aa += 3; // aa = aa + 3
console.log(c); // 4

// 11. 비교 연산자 (Comarison)
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 2); // true
console.log(1 >= 2); // false
console.log(1 == 2); // false
console.log(1 != 2); // true

const d = 1;
const e = 3;

// 동등 (형 변환 O)
console.log(d == e); // false

// 부동 (형 변환 O)
console.log(d != e); // true

// 일치 (형 변환 X)
console.log(d === e); // false

// 불일치 (형 변환 X)
console.log(d !== e); // true

// 크다
console.log(d > e); // false

// 크거나 같다
console.log(d >= e); // false

// 작다
console.log(d < e); // true

// 작거나 같다
console.log(d <= e); // true

// 12. 논리(Logical) 연산자

console.log(true && false); //
console.log(true || false); // true
console.log(!true); // false

// AND(그리고) 연산자
const f = true;
const g = true;

if (f && g) {
    console.log('둘다 참이면 실행됩니다.'); // 둘다 참이면 실행됩니다.
}

// OR(또는) 연산자
const h = false;
const i = true;

if (h || i) {
    console.log('둘 중 하나만 참이면 실행됩니다.'); // 둘 중 하나만 참이면 실행됩니다.
}

// NOT(부정) 연산자
const j = false;
const k = !j;

console.log(k); // true

// 13. 삼항(Ternary) 연산자
// 조건 ? 참 : 거짓

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2

// 예시
const p = 1;

if (p < 3) {
    console.log('참!!'); // 참!!
} else {
    console.log('거짓'); // 거짓
}

// 위의 코드를 삼항 연산자로 표현하면 다음과 같다.
console.log(p < 3 ? '참!!' : '거짓'); // 참!!

function isAnimal(text) {
    return text === '고양이' ? '고양이' : '고양이 아님';
}

console.log(isAnimal('고양이')); // 고양이
console.log(isAnimal('개')); // 고양이 아님

// 14. 그룹 연산자
console.log(1 + 2 * 3); // 7
console.log((1 + 2) * 3); // 9

// 15. typeof 연산자
console.log(typeof 1); // number
console.log(typeof 'hello'); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// 16. in 연산자
const person = { name: 'Lee', age: 20 };
console.log('name' in person); // true
console.log('age' in person); // true
console.log('address' in person); // false

// 17. delete 연산자
const person2 = { name: 'Lee', age: 20 };
console.log(person2); // { name: 'Lee', age: 20 }
delete person2.age;
console.log(person2); // { name: 'Lee' }

// 부정 연산자
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!!0); // false
console.log(![]); // false
console.log(!{}); // false
console.log(!function () {}); // false

// 병합(Nullish Coalescing) 연산자

const m = 0;

// or 연산자를 사용한 할당
const num1 = m || 5;
console.log(num1); // 5
// or 연산자를 사용한 경우 처음으로 만나는 truthy 값을 반환한다.
// 0은 false로 평가되므로 5가 반환된다.

// Nullish 병합 연산자를 사용한 할당
const num2 = m ?? 5;
console.log(num2); // 0
// ?? 연산자를 사용한 경우 null 또는 undefined는 무시하고 그 외의 값만 사용된다.
// 0은 falsy 값이지만 null 또는 undefined가 아니므로 0이 반환된다.

console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log(null ?? undefined); // undefined
console.log(null ?? 1 ?? 2); // 1
console.log(0 ?? 1 ?? 2); // 0

const namelessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// ES11에서 도입된 Nullish Coalescing 연산자를 사용하면 좀 더 간편하게 표현할 수 있다.
function getName2(animal) {
    const name = animal?.name;
    return name ?? '이름이 없는 동물입니다.';
}

const name2 = getName2(namelessDog);
console.log(name2); // 이름이 없는 동물입니다.

// 전개(Spread) 연산자

// 1. 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];

const s = q.concat(r); // concat 메서드 사용
console.log(s); // [ 1, 2, 3, 4, 5, 6 ]

const t = [...q, ...r]; // 전개 연산자
console.log(t); // [ 1, 2, 3, 4, 5, 6 ]

// 2. 객체의 전개
const dog = {
    name: '멍멍이',
};
const dogInfo = {
    ...dog,
    age: 2,
};
console.log(dogInfo); // { name: '멍멍이', age: 2 }

// 3. 함수의 인자에서의 전개
function sum(a, b, c) {
    console.log(a + b + c);
}

sum(1, 2, 3); // 6

// 배열 데이터를 인자로 전달하려면?
const num = [1, 2, 3];
sum(num[0], num[1], num[2]); // 6 (기존 방식)

// 전개 연산자를 사용하면?
sum(...num); // 6

// console.log(sum(...numbers)) // 6

// 구문(Statement)과 표현식(Expression)
