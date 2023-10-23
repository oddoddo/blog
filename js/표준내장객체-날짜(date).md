# 표준 내장 객체 - 날짜(Date)

## Date 객체

-   날짜와 시간을 위한 메서드를 제공하는 내장 객체

-   Date 객체 생성

```javascript
// 현재 시간으로 Date 객체 생성
const now = new Date();
console.log(now); // 2021-07-20T07:23:45.000Z

// 2021년 7월 20일 7시 23분 45초로 Date 객체 생성
const date1 = new Date(2021, 6, 20, 7, 23, 45);
console.log(date1); // 2021-07-20T07:23:45.000Z
```

## .getFullYear() / .getMonth() / .getDate() / .getDay()

-   년도, 월, 일, 요일을 얻는 메서드
-   getMonth()는 0부터 시작하므로 1을 더해줘야 함
-   getDay()는 일요일부터 0, 월요일부터 1, ... 토요일부터 6

```javascript
const now = new Date();

console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 10
console.log(now.getDate()); // 20
console.log(now.getDay()); // 2
```

## .setFullYear() / .setMonth() / .setDate()

-   년도, 월, 일을 설정하는 메서드
-   요일을 설정하는 메서드는 없음

```javascript
const date = new Date();

date.setFullYear(2024);
console.log(date.getFullYear());
console.log(date);
```

## .getHours() / .getMinutes() / .getSeconds() / .getMilliseconds()

-   시간, 분, 초, 밀리초를 얻는 메서드

```javascript
const now = new Date();

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
```

## .setHours() / .setMinutes() / .setSeconds() / .setMilliseconds()

-   시간, 분, 초, 밀리초를 설정하는 메서드
-   시간을 설정할 때는 24시간 체계를 사용
-   s로 끝나는 것을 주의

```javascript
const date = new Date();

date.setHours(10);
console.log(date.getHours());
console.log(date);
```

## .getTime() / .setTime()

-   1970년 1월 1일 00:00:00 UTC부터 경과한
-   밀리초를 숫자로 반환, 지정하는 메서드

```javascript
const now = new Date();

console.log(now.getTime());
console.log(now);

now.setTime(0);
console.log(now.getTime());
console.log(now);
```

### getTime()을 활용한 시간 비교

```javascript
// date가 this보다 이후인지 확인

// Date의 prototype에 메서드 추가해 isAfter() 생성
// isAfter()는 prototype에 추가한 메서드이므로 Instance에서 사용 가능
// new 생성자를 통해 생성한 객체에서 사용 가능
Date.prototype.isAfter = function (date) {
    return this.getTime() > date.getTime();
    // this는 date1 (this는 해당 객체의 인스턴스를 가리킴)
    // date는 date2

    console.log(this.getTime()); // 1671782400000
    console.log(date.getTime()); // 1732291200000
};

const date1 = new Date(2023, 9, 22);
const date2 = new Date(2024, 12, 22);

console.log(date1.isAfter(date2)); // false
```
