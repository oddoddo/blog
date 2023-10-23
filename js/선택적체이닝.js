// 선택적 체이닝 (Optional Chaining)
// ?. 연산자를 사용하면 좀 더 간결하고 직관적인 코드를 작성할 수 있다.

// 예시
// 아래 코드는 user가 주소 정보를 가지고 있지 않기 때문에 에러가 발생한다.
// let user = null; // 주소 정보가 없는 사용자

// alert(user.name); // TypeError: Cannot read property 'street' of undefined

// ?.를 사용하면 user가 유효한지 확인하고, 그렇지 않은 경우에는 undefined를 반환한다.
let user = undefined; // 주소 정보가 없는 사용자

alert(user?.name);  // undefined


const user1 = {
    name: "winter",
    age: 2,
    address: {
        city: "Seoul",
        zipcode: "123456"
    }
};

const user2 = {
    name: "fall",
    age: 3
};

function printCity(user) {
    return user.address?.city || "주소 정보가 없습니다.";
    // ?. 사용하여 user.address가 유효한지 확인
    // or 연산자를 사용하여 user.address가 유효하지 않은 경우 "no city"를 반환
}

console.log(printCity(user1)); // Seoul
console.log(printCity(user2)); // 주소 정보가 없습니다.


// if, switch 조건문
if (조건) {
    // 조건이 참일 때 실행되는 코드
}

if (조건) {
    // 조건이 참일 때 실행되는 코드
}else {
    // 조건이 거짓일 때 실행되는 코드
}

if (조건1) {
    // 조건1이 참일 때 실행되는 코드
}else if (조건2) {
    // 조건2가 참일 때 실행되는 코드
}else {
    // 조건1과 조건2가 모두 거짓일 때 실행되는 코드
}


function isPositive(num) {
    if (num > 0) {
        return '양수입니다.';
    } else if (num < 0) {
        return '음수입니다.';
    } else {
        return '0입니다.';
    }
}

console.log(isPositive(1)); // 양수입니다.
console.log(isPositive(-1)); // 음수입니다.
console.log(isPositive(0)); // 0입니다.

// switch 조건문
switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식1이 일치하면 실행되는 코드
        break;
    case 표현식2:
        switch 문의 표현식과 표현식2가 일치하면 실행되는 코드
        break;
    default:
        switch 문의 표현식과 일치하는 case 문이 없을 때 실행되는 코드
}

function getSound(animal) { 
    // switch (animal) {
    //     case '개':
    //         return '멍멍!';
    //         // return을 사용하여 함수를 빠져나가기 때문에 break를 사용하지 않아도 된다.
    //     case '고양이':
    //         return '야옹~';
    //     case '참새':
    //         return '짹짹';
    //     case '비둘기':
    //         return '구구 구 구';
    //     default:
    //         return '...?';
    // }

    // if문으로 바꾸기
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구구 구 구';
    return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
console.log(getSound('인간')); // ...?


// 반복문

// for문
for (초기화; 조건; 증감) {
    // 반복해서 실행될 코드
}

// 예시
for (let i = 0; i < 10; i++) {
    console.log(i); // 0부터 9까지 출력
}

for (let i = 9; i < -1; i--) {
    if(i % 2 === 0) { // i가 짝수면
        continue; // continue를 만나면 아래 코드를 실행하지 않고 건너뛴다.
    }
      console.log(i); // 9, 7, 5, 3, 1
}

// for of문
for (변수 of 배열) {
    // 반복해서 실행될 코드
}

// 예시
const  animals = [dog, cat, fish];

// for (let i = 0; i < animals.length; i++) { // animals.length는 배열의 길이
//     console.log(animals[i]); // dog, cat, fish
// }

for (let animal of animals) { // 배열의 요소를 하나씩 꺼내 animal에 할당
    console.log(animal); // dog, cat, fish
}

// 예시
const users = [
    { 
        name: 'Winter', 
        age: 2 
    },
    { 
        name: 'Fall', 
        age: 3 
    },
    { 
        name: 'River', 
        age: 4 
    },
]

for (i = 0; i < users.length, i++) {
    console.log(users[i]); // { name: 'Winter', age: 2 }, { name: 'Fall', age: 3 }, { name: 'River', age: 4 }
    console.log(users[i].name); // Winter, Fall, River
}

for (let user of users) {
    console.log(user); // { name: 'Winter', age: 2 }, { name: 'Fall', age: 3 }, { name: 'River', age: 4 }
    console.log(user.name); // Winter, Fall, River
}

// for in문
for (변수 in 객체) {
    // 반복해서 실행될 코드
}

// 예시
const user = {
    name: 'Winter',
    age: 2,
    city: 'Seoul'
}

for (let key in user) {
    console.log(key); // name, age, city
    console.log(user[key]); // Winter, 2, Seoul
}

// for of문과 for in문의 차이점
// for of문은 배열의 요소를 하나씩 꺼내 변수에 할당하고, for in문은 객체의 속성을 하나씩 꺼내 변수에 할당한다.

// while문

// while문은 무한 반복이 될 수 있기 때문에 거짓의 조건을 명확하게 명시해야 한다.

while (조건) {
    // 조건이 참일 때 반복해서 실행될 코드
}

// 예시
let i = 0;
while (i < 10) {
    console.log(i); // 0부터 9까지 출력
    i++;
}

// do while문

// do while문은 코드를 먼저 실행하고 조건을 검사한다.
do { 실행될 코드 } while (조건);

// 예시
let i = 0;
do {
    console.log(i); // 0부터 9까지 출력
    i++;
}while (i < 10);

