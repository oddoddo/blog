# 표준 내장 객체 - 수학(Math)

## Math.abs()

-   주어진 숫자의 절대값을 반환한다.

```js
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('')); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs(null)); // 0
```

## Math.ceil()

-   주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환한다.

```js
console.log(Math.ceil(3.14)); // 4
console.log(Math.ceil(3.9)); // 4
```

## Math.floor()

-   주어진 숫자보다 작거나 같은 숫자 중 가장 큰 숫자를 정수로 반환한다.

```js
console.log(Math.floor(3.14)); // 3
console.log(Math.floor(3.9)); // 3
```

## Math.max()

-   주어진 숫자 중 가장 큰 숫자를 반환한다.

```js
console.log(Math.max(1, 2, 3, 4, 5, -10)); // 5
console.log(Math.max(-1, -2, -3, -4, -5)); // -1
```

## Math.min()

-   주어진 숫자 중 가장 작은 숫자를 반환한다.

```js
console.log(Math.min(1, 2, 3, 4, 5, -10)); // -10
console.log(Math.min(-1, -2, -3, -4, -5)); // -5
```

## Math.random()

-   0 이상 1 미만의 난수를 반환한다.

```js
console.log(Math.random()); // 2.12345678901234567

// 특정 범위의 랜덤한 정수를 얻는 함수
function getRandomInt(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt()); // 1 ~ 10 사이의 랜덤한 정수
console.log(getRandomInt(11, 20)); // 11 ~ 20 사이의 랜덤한 정수
```

## Math.round()

-   주어진 숫자를 반올림한 정수를 반환한다.

```js
console.log(Math.round(3.14)); // 3
console.log(Math.round(3.9)); // 4
```
