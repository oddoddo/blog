# 모듈(Module)

## 모듈이란?

-   모듈은 특정 기능을 하는 함수나 변수들의 집합이다.
-   모듈은 가져오기(import)와 내보내기(export)를 통해 사용할 수 있다.
-   모듈은 자체로도 하나의 프로그램이지만 다른 프로그램의 일부로 사용될 수도 있다.
-   모듈은 다른 모듈을 사용할 수 있고, 다른 모듈에 의해 사용될 수도 있다.
-   모듈은 자신만의 이름 공간(namespace)을 가진다.
-   모듈은 독립성을 가지며, 필요한 모듈만 불러와 사용할 수 있다.
-   모듈은 재사용이 가능하다.

## 모듈의 종류

-   내장 모듈

    -   Node.js가 설치될 때 함께 설치되는 모듈
    -   fs, os, path, url 등

-   사용자 정의 모듈
    -   개발자가 직접 정의한 모듈
    -   다른 프로그램에서도 사용할 수 있도록 npm에 배포할 수도 있다.

## 모듈의 사용

-   모듈을 사용하기 위해서는 모듈을 내보내기(export), 가져오기(import)해야 한다.
-   모듈을 가져오기 위해서는 모듈의 경로가 필요하다.

```js
// module.js
export default function hello() {
    console.log('hello');
}
```

```js
// main.js

// import 모듈명 from '모듈의 경로';
import hello from './module.js';

hello(); // hello
```

## 모듈의 내보내기(export), 가져오기(import)

-   모듈을 내보내기 위해서는 export 키워드를 사용한다.
-   모듈을 가져오기 위해서는 import 키워드를 사용한다.

```js
// module.js

// 기본(default)  내보내기
export default 123;

// 이름 붙여서 내보내기
export const str = 'abc'; // 문자열
export const arr = []; // 배열
export const obj = () => {}; // 화살표 함수
export function obj() {} // 일반 함수
```

```js
// main.js

// 기본(default) 가져오기
// import 모듈명 from '모듈의 경로';
import num from './module.js';

// 이름 붙여서 가져오기
// import { 이름 } from '모듈의 경로';
import { str as xyz, arr, obj } from './module.js';

console.log(num); // 123
console.log(xyz); // abc (str을 xyz로 가져옴)
console.log(arr); // []
console.log(obj); // [Function: obj]
```

-   모든 내용을 가져오기

```js
// main.js

// 모든 내용 가져오기
// import * as 모듈명 from '모듈의 경로';
import * as abc from './module.js';

console.log(abc); // { default: 123, str: 'abc', arr: [], obj: [Function: obj] }
```

## 모듈을 한번에 가져와 사용하기

```js
// a.js
export const a = () => 123;
```

```js
// b.js
export const b = () => 456;
```

```js
// main.js

import { a } from './a.js';
import { b } from './b.js';

console.log(a()); // 123
console.log(b()); // 456
```

-   위와 같이 모듈을 가져오는 것은 번거롭다.
-   모듈을 한번에 가져오기 위해서는 index.js 파일을 만들어 사용한다.

```js
// index.js
export { a } from './a.js';
export { b } from './b.js';
```

```js
// main.js
import { a, b } from './index.js';

console.log(a()); // 123
console.log(b()); // 456
```
