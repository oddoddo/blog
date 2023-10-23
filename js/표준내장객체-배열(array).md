# 표준 내장 객체 - 배열(array)

## .length

-   배열의 길이(숫자)를 나타내는 속성

```js
const arr = [1, 2, 3];

console.log(arr.length); // 3
```

## .at()

-   배열에서 특정 위치의 요소를 가져오는 메서드
-   인덱스는 0부터 시작

```js
const arr = [1, 2, 3];

console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

console.log(arr[arr.length - 1]); // 3
console.log(arr.at(-1)); // 3
```

## .concat()

-   배열에 다른 배열이나 값을 추가하여 새 배열을 반환하는 메서드

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

## .every()

-   배열의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.every((item) => item > 0)); // true
// arr.every((item) => {
//     return item > 0;
// })
console.log(arr.every((item) => item > 1)); // false
```

## .filter()

-   주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메서드
-   콜백 함수의 반환 값이 true인 요소만 모아서 새로운 배열을 만듦
-   모든 요소가 통과하지 못하면 빈 배열을 반환

```js
const arr = [1, 2, 3];

console.log(arr.filter((item) => item > 1)); // [2, 3]
console.log(arr.filter((item) => item < 0)); // []
```

-   이린이(7세 이하) 찾기

```js
const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

const children = users.filter((user) => user.age <= 7);
console.log(children); // [{ name: '둘리', age: 6 }]
```

## .find()

-   주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환하는 메서드
-   요소가 없으면 undefined를 반환

```js
const arr = [1, 2, 3];

console.log(arr.find((item) => item > 1)); // 2
console.log(arr.find((item) => item < 0)); // undefined
```

-   고길동 찾기

```js
const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

const user = users.find((user) => user.name === '고길동');
console.log(user); // { name: '고길동', age: 12 }
```

## .findIndex()

-   주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환하는 메서드
-   요소가 없으면 -1을 반환

```js
const arr = [1, 2, 3];

console.log(arr.findIndex((item) => item > 1)); // 1
console.log(arr.findIndex((item) => item < 0)); // -1
```

## .flat()

-   모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성하는 메서드
-   깊이를 지정하지 않으면 기본값 1

```js
const arr = [1, [2, [3, [4]]]];

console.log(arr.flat()); // [1, 2, [3, [4]]]
console.log(arr.flat(1)); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
```

## .forEach()

-   주어진 함수를 배열 요소 각각에 대해 실행하는 메서드

```js
const arr = [1, 2, 3];

arr.forEach((item) => console.log(item)); // 1 2 3
```

## .includes()

-   배열이 특정 요소를 포함하고 있는지 판별하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.includes(1)); // true
console.log(arr.includes(0)); // false
```

## .join()

-   배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.join(',')); // 1,2,3
console.log(arr.join(', ')); // 1, 2, 3
console.log(arr.join(' | ')); // 1 | 2 | 3
```

## .map()

-   배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 메서드

```js
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);

console.log(newArr); // [2, 4, 6]
console.log(arr); // [1, 2, 3]
```

```js
const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

// user => {return { key: value }};
// user => ({ key: value });
const newUsers = users.map((user) => ({
    ...user, // 전개 연산자 ...user : name: '홍길동', age: 36
    email: null,
}));

console.log(newUsers);
// [{ name: '홍길동', age: 36, email: null }, { name: '고길동', age: 12, email: null }, { name: '둘리', age: 6, email: null }]
```

## .pop()

-   배열에서 마지막 요소를 제거하고 그 요소를 반환하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.pop()); // 3
console.log(arr); // [1, 2]
```

## .push()

-   배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.push(4)); // 4
console.log(arr); // [1, 2, 3, 4]

console.log(arr.push(5, 6)); // 6
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

## .reduce()

-   배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환하는 메서드
-   각 콜백의 반환 값을 다음 콜백의 인수 accumulator(누산기)에 전달
-   리듀서 함수는 네 개의 인수를 가짐
    -   누산기(accumulator)
    -   현재 값(currentValue)
    -   현재 인덱스(currentIndex)
    -   원본 배열(array)

```js
const arr = [1, 2, 3];

console.log(arr.reduce((acc, cur) => acc + cur, 0)); // 6
// 1. acc = 0, cur = 1 => 1
// 2. acc = 1, cur = 2 => 3
// 3. acc = 3, cur = 3 => 6

console.log(arr.reduce((acc, cur) => acc + cur, 10)); // 16
// 1. acc = 10, cur = 1 => 11
// 2. acc = 11, cur = 2 => 13
// 3. acc = 13, cur = 3 => 16
```

-   평균 나이 구하기

```js
const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
// 1. acc = 0, cur = { name: '홍길동', age: 36 } => 36
// 2. acc = 36, cur = { name: '고길동', age: 12 } => 48
// 3. acc = 48, cur = { name: '둘리', age: 6 } => 54
console.log(totalAge); // 54

const avgAge = (totalAge / users.length).toFixed();
// 54 / 3 = 18
console.log(avgAge); // 18
```

-   모든 이름 출력하기

```js
const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

const namesArr = users.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
}, []);
console.log(namesArr); // ['홍길동', '고길동', '둘리']

const names = namesArr.join(', ');
console.log(names); // 홍길동, 고길동, 둘리

// 체이닝
const names2 = users
    .reduce((acc, cur) => {
        acc.push(cur.name);
        return acc;
    }, [])
    .join(', ');
console.log(names2); // 홍길동, 고길동, 둘리
```

## .reverse()

-   배열의 순서를 반전하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.reverse()); // [3, 2, 1]
console.log(arr); // [3, 2, 1]
```

## .shift()

-   배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.shift()); // 1
console.log(arr); // [2, 3]
```

## .slice()

-   대상 배열의 일부를 추출해 새로운 배열을 반환하는 메서드
-   첫 번째 인수는 추출을 시작할 인덱스
-   두 번째 인수는 추출을 종료할 인덱스(포함하지 않음)

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1)); // [2, 3, 4, 5]
console.log(arr.slice(1, 2)); // [2]
console.log(arr.slice(1, -1)); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5]
```

## .some()

-   배열의 요소 중에서 주어진 판별 함수를 만족하는 요소가 하나라도 있는지를 테스트하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.some((item) => item > 1)); // true
console.log(arr.some((item) => item > 2)); // true
console.log(arr.some((item) => item < 0)); // false
```

## .sort()

-   배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환하는 메서드
-   기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름
-   정렬 순서를 정의하는 함수를 인수로 전달할 수 있음

```js
const arr = [4, 7, 0, 10, 1, 2, 3];

console.log(arr.sort()); // [0, 1, 10, 2, 3, 4, 7]
console.log(arr); // [0, 1, 10, 2, 3, 4, 7]

console.log(arr.sort((a, b) => a - b)); // [1, 2, 3]
// 1. a = 4, b = 7 => -3
// 2. a = 7, b = 0 => 7
// 3. a = 0, b = 10 => -10
// 4. a = 10, b = 1 => 9
// 반환 값이 0보다 작은 경우 a를 우선하여 정렬
// 반환 값이 0보다 큰 경우 b를 우선하여 정렬

console.log(arr.sort((a, b) => b - a)); // [3, 2, 1]
// 1. a = 4, b = 7 => 3
// 2. a = 7, b = 0 => -7
// 3. a = 0, b = 10 => 10
// 4. a = 10, b = 1 => -9
// 반환 값이 0보다 작은 경우 b를 우선하여 정렬
// 반환 값이 0보다 큰 경우 a를 우선하여 정렬
```

## .splice()

-   배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드
-   첫 번째 인수는 변경을 시작할 인덱스
-   두 번째 인수는 제거할 요소 수
-   세 번째 인수부터는 배열에 추가될 요소

```js
const arr = [1, 2, 3];

console.log(arr.splice(1, 1)); // [2, 3]
console.log(arr); // [1]

const arr2 = [1, 2, 3];

console.log(arr2.splice(1, 1)); // [2]
console.log(arr2); // [1, 3]

const arr3 = [1, 2, 3];

console.log(arr3.splice(1, 1, 4, 5)); // [2]
console.log(arr3); // [1, 4, 5, 3]
```

## .unshift()

-   배열의 맨 앞에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환하는 메서드

```js
const arr = [1, 2, 3];

console.log(arr.unshift(4)); // 4 (길이 반환)
console.log(arr); // [4, 1, 2, 3]
```
