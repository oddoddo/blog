// 구조 분해 할당 (Destructuring assignment)

// 객체나 배열을 변수로 '분해'할 수 있게 하는 문법
// 객체의 속성을 해체하여 그 값을 변수에 담을 수 있게 하는 표현식

// 배열의 구조 분해
const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const [a, b, c] = arr // 구조 분해 할당
// 배열 데이터를 만든 후 arr 변수에 할당

console.log(a, b, c) // 1 2 3


// 예제
const arr2 = [1, 2, 3]
const [d, ...rest] = arr2
// 1을 d에 할당하고 나머지는 전개 연산자를 사용해 rest에 할당
// 전개 연산자는 배열의 나머지 요소를 모두 복사해줌

console.log(d, rest) // 1 [ 2, 3 ]


// 객체의 구조 분해
const obj = {
    e: 1,
    f: 2,
    g: 3,
}

const { e = 4, f : free, h : ten = 10 } = obj
// 구조 분해 할당을 사용해 obj 객체의 속성을 분해하여 변수에 할당
// obj 객체의 속성을 분해하여 변수에 할당
// e 속성은 없으므로 기본값 4가 할당
// f 속성은 free 변수에 할당
// h 속성은 없으므로 기본값 10이 할당
// 만약 h 속성이 있었다면 ten 변수에 할당

console.log(e, free, ten)  // 1 2 10

// 전개 연산자와 구조 분해 할당을 함께 사용
