// ## 1. prototype

// ### prototype 이란?

// - 자바스크립트의 모든 객체는 **자신의 부모 역할을 하는 객체와 연결**되어 있다.
// - 그리고 이것은 마치 객체 지향의 상속 개념과 같이 **부모 객체의 프로퍼티를 마치 자신의 것처럼 쓸 수 있는 것처럼** 보이게 해준다.
// - 이러한 부모 객체를 prototype 객체 또는 줄여서 prototype 이라고 한다.

// ```js
// const animals = ['dog', 'cat', 'lion', 'tiger'];
const animals = new Array('dog', 'cat', 'lion', 'tiger');
// new Array() 생성자 함수를 통해서 배열을 생성할 수 있다.

console.log(animals); // 배열 전체
console.log(animals.length); // 배열의 길이
console.log(animals[0]); // 배열의 첫번째 요소
console.log(animals.includes('dog')); // includes : 배열에 특정 요소가 있는지 확인
console.log(animals.includes('bird'));
// 위와 같이 length, includes등을 프로토타입 속성,  이라고 한다.
// ```

// - array mdn 검색
// - 아래 링크를 보면 array에 prototype이 붙어있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
// - array에 사용할 수 있는 속성 및 메소드는 프로토타입에 연결되어 있다.

// Array.prototype.getIndex() : 배열의 프로토타입에 getIndex() 메소드를 생성한다.
Array.prototype.getIndex = function () {
  console.log(this); // this : 배열을 가리킨다.
};
animals.getIndex(); // animals 배열을 가리킨다.

// 생성된 getIndex() 메소드는 다른 배열에서도 사용할 수 있다.
const arr = []; // 빈 배열 생성
arr.getIndex(); // getIndex() 메소드를 사용할 수 있다.

// const winter = {
//   firstName: '겨울',
//   lastName: 'Kim',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const fall = {
//   firstName: '가을',
//   lastName: 'Kim',
// };

// console.log(winter.getFullName()); // 겨울 Kim
// console.log(winter.getFullName.call(fall)); // 가을 Kim
// fall 객체는 firstName, lastName, getFullName() 메소드를 가지고 있지 않기 때문에
// fall 객체데이터는 winter.getFullName의 메소드를 빌려 call을 통해 실행시켰다.
// getFullName() 메소드 내부의 this는 호출되는 내부의 this(fall) 객체를 가리킨다.

// fall 객체의 프로토타입을 winter 객체로 설정한다.
// fall.__proto__ = winter;
// fall 객체는 firstName, lastName, getFullName() 메소드를 가지고 있지 않다.
// fall 객체는 자신의 프로토타입인 winter 객체의 프로퍼티를 상속받아 사용할 수 있다.

// prototype을 이용
// User 생성자 함수를 생성한다.
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// // User 생성자 함수의 프로토타입에 getFullName() 메소드를 생성한다.
// // 생성자 함수에서 화살표 함수 사용시 this가 window를 가리키기 때문에 사용할 수 없다.
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`; // this : User 생성자 함수를 가리킨다.
// };

// // User 생성자 함수를 통해 객체를 생성한다.
// const winter = new User('겨울', '김');
// const fall = new User('가을', '김');

// console.log(winter.getFullName()); // 겨울 김
// console.log(fall.getFullName()); // 가을 김

// es6 class를 이용
// User 클래스를 생성한다.
class User {
  constructor(first, last) {
    // constructor : 생성자 함수 역할을 한다.
    this.firstName = first;
    this.lastName = last;
  }
  // User 클래스의 프로토타입에 getFullName() 메소드를 생성한다.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// User 생성자 함수를 통해 객체를 생성한다.
const winter = new User('겨울', '김');
const fall = new User('가을', '김');

console.log(winter.getFullName()); // 겨울 김
console.log(fall.getFullName()); // 가을 김
