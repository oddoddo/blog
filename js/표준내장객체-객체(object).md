# 표준 내장 객체 - 객체(object)

## Object.assign()

-   객체를 복사할 때 사용
-   target 객체에 source 객체를 병합하여 반환한다.

```js
const target = { x: 1, y: 2 };
const source = { y: 3, z: 4 };

const result = Object.assign({}, target, source); // {}는 타겟 객체를 빈 객체로 초기화한다.

console.log(result); // { x: 1, y: 3, z: 4 } 중복된 속성은 덮어쓴다.
console.log(target); // { x: 1, y: 3, z: 4 } (타겟 객체)
console.log(source); // { y: 3, z: 4 } (소스 객체)

// 전개 연산자를 사용해도 같은 결과를 얻을 수 있다.
const result2 = {
    ...target,
    ...source,
};

console.log(result2); // { x: 1, y: 3, z: 4 } 중복된 속성은 덮어쓴다.
```

<!-- ## Object.entries()

-   객체 자신의 열거 가능한 속성 [key, value] 쌍의 2차원 배열을 반환한다.

```js
const obj = { x: 1, y: 2, z: 3 };

console.log(Object.entries(obj)); // [ [ 'x', 1 ], [ 'y', 2 ], [ 'z', 3 ] ]
// 배열 안에 배열이 들어있는 2차원 배열로 반환된다.
``` -->

## Object.keys()

-   객체 자신의 열거 가능한 속성 이름을 배열로 반환한다.

```js
const obj = { x: 1, y: 2, z: 3 };

console.log(Object.keys(obj)); // [ 'x', 'y', 'z' ]
```

## Object.values()

-   객체 자신의 열거 가능한 속성 값들을 배열로 반환한다.

```js
const obj = { x: 1, y: 2, z: 3 };

console.log(Object.values(obj)); // [ 1, 2, 3 ]
```
