// string

// string은 문자열을 나타내는 데이터 타입

const string1 = "Hello"
const string2 = 'odada!'
const string3 = `Hello World! ${string1} ${string2} ${1 + 1} ??` 
// 템플릿 리터럴 (기호를 통해 만들어내는 방식)

console.log(string3)

// number

// number는 숫자를 나타내는 데이터 타입

const number = 123
const negative = -123

console.log(number + 1, negative + 1)

const float = .123

console.log(float)

const number2 = -123.1234
const float2 = .123

console.log(number2 + undefined, float2) // undefined는 NaN으로 나옴
console.log(typeof(number2 + undefined), typeof float2) // number, number
// typeof : 데이터 타입을 확인하는 연산자

const a = 0.1
const b = 0.2

console.log(a + b) // 부동 소수점 방식으로 인해 0.3이 아닌 0.30000000000000004가 나옴
console.log((a + b).toFixed(1)) // toFixed() : 소수점 자리수를 지정해주는 메소드, 문자열로 반환
console.log(typeof (a + b).toFixed(1)) // 문자열이기 때문에 typeof로 확인해보면 string이 나옴
console.log(Number((a + b).toFixed(1))) // Number로 감싸주면 number로 반환
// Number : 숫자로 변환해주는 함수


// boolean

// boolean은 true와 false 두 가지 값만 가질 수 있는 데이터 타입

const truthy = true
const falsy = false

if (falsy) {
    console.log(true)
} 
// falsy : false, 0, '', null, undefined, NaN
// truthy : falsy를 제외한 모든 값

// null & undefined

// null과 undefined는 값이 없음을 나타내는 데이터 타입
const nullData = null
const undefinedData = undefined

console.log(nullData, undefinedData)
console.log(typeof nullData, typeof undefinedData)
// null : 값이 없다는 것을 의도적으로 명시할 때 사용
// undefined : 값이 없다는 것을 의도적으로 명시하지 않을 때 사용

let age = null
console.log(age)

age = 20 // 값이 할당되면 null이 사라짐
console.log(age) // 20

let height // undefined
console.log(height)

height = 180 // 값이 할당되면 undefined가 사라짐
console.log(height) // 180

const user = {
    name: 'Kim',
    age: 20,
    height: 180,
    email: null
}

console.log(user.name, user.age, user.height) // Kim 20 180 70
console.log(user.weight) // undefined
console.log(user.email)  // null : 이메일이 없습니다.


// array

// 배열이란 순서가 있는 데이터의 집합

const animals = ['dog', 'cat', 'fish'] // 배열은 대괄호로 만들어줌

console.log(animals[0], animals[2]) // dog fish
// 배열의 인덱스는 0부터 시작
// 배열의 마지막 인덱스는 배열의 길이 - 1
// 배열의 길이는 length로 확인 가능
// 배열의 마지막 인덱스는 length - 1

console.log(animals) // ['dog', 'cat', 'fish']
console.log(animals.length) // 3
console.log(animals[animals.length - 1]) // fish
// 배열의 마지막 인덱스를 가져오는 방법

const array2 = [1, 'blabla', {}, 4, [1, 2, 3]]
console.log(array2[1], array2[2], array2[4]) // blabla {} [1, 2, 3]

const array3 = [
    { name: 'Kim', age: 20 },
    { name: 'Lee', age: 30 },
    { name: 'Park', age: 40 }
]

console.log(array3[0].name, array3[1].age) // Kim 30


// object(객체)

// 객체란 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합

// 객체는 중괄호로 만들어줌
const user2 = {
    name: 'Kim',
    age: 20,
}

const key = 'age'

console.log(user2) // { name: 'Kim', age: 20 }

// 점 표기법과 대괄호 표기법의 차이점

// 점 표기법은 객체의 키가 유효한 이름인 경우에만 사용 가능
console.log(user2.name, user2.age) // Kim 20

// 대괄호 표기법
console.log(user2['name'], user2['age']) // Kim 20
// 대괄호 표기법은 변수를 키로 사용할 때 사용 가능
console.log(user2[key]) // 20


const userA = {
    name: 'Kim',
    age: 20,
}

const userB = {
    name: 'Lee',
    age: 30,
    parent: userA
}

console.log(userB) // { name: 'Lee', age: 30, parent: { name: 'Kim', age: 20 } }
console.log(userB.parent.name) // Kim 점 표기법
console.log(userB['parent']['name']) // Kim 대괄호 표기법

const users = [userA, userB]
// 배열에 객체를 넣을 수 있음

console.log(users[0].name) // Kim
console.log(users[0]['name']) // Kim

// function(함수)

// 함수란 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
//함수는 자바스크립트의 데이터로서 함수 자체와 함수의 호출은 전혀 다른 개념이다.

// 함수 선언식 (기명 함수)
function printHello() {
    console.log('Hello')
}

printHello() // Call 
// 함수를 호출할 때는 함수 이름 뒤에 괄호를 붙여줌


// 함수 표현식 (익명 함수)
const getNumber = function() {
    return 123
}

console.log(getNumber) // [Function: getNumber]
console.log(typeof getNumber) // 함수 데이터

console.log(getNumber()) // 123
console.log(typeof getNumber()) // number

// 함수의 매개변수
//  함수를 호출할 때 함수에 전달하는 값
//  함수를 선언할 때 함수에 전달받을 매개변수의 이름을 지정

function printMessage(message) {
    console.log(message)
}

printMessage('Hello') // Hello
printMessage('Hi') // Hi

// 데이터 타입 확인

console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof function(){}) // function

// null, {}, []는 object로 나오기 때문에 구분하기 어려움
// constructor를 통해 데이터 타입을 확인할 수 있음
console.log([].constructor) // Array
console.log({}.constructor) // Object
console.log(null.constructor) // error : null은 constructor가 없음

// null 데이터 타입 확인 방법
console.log(Object.prototype.toString.call(null).slice(8, -1)) // Null

function printType(data) {
    console.log(Object.prototype.toString.call(data).slice(8, -1))
}

console.log(printType(123)) // Number
console.log(printType(true)) // Boolean
console.log(printType(null)) // Null
console.log(printType({})) // Object
console.log(printType([])) // Array
console.log(printType(function(){})) // Function