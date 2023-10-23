# DOM(Document Object Model)

## DOM이란?

-   DOM은 HTML 문서를 객체로 표현한 것으로,
-   자바스크립트를 이용해 HTML 문서를 제어할 수 있게 해준다.

```js
const title = document.querySelector('h1');
console.log(title); // <h1>DOM</h1>
```

## Node vs Element

-   Node : HTML 요소, 텍스트, 주석 등 모든 것을 의미한다.
-   Element : HTML 요소를 의미한다.

```html
<div class="parent">
    <!-- 주석 -->
    DOM
    <div class="child">text1</div>
</div>
```

```js
const parent = document.querySelector('.parent');

// parent의 자식 노드들을 출력한다.
console.log(parent.childNodes); // NodeList(5) [#text,#comment,#text,<div/>,#text]

// parent의 자식 요소들을 출력한다.
// 요소는 노드의 하위 개념으로 노드 중에서도 태그를 의미한다.
console.log(parent.children); // HTMLCollection(1) [div.child]
```

## DOM API

-   DOM API는 DOM을 제어하기 위한 다양한 메서드를 제공한다.
-   DOM API는 브라우저에서 제공하는 API이다.

## DOM API의 종류

-   DOM API는 다음과 같이 크게 4가지로 나눌 수 있다.

### 1. 선택 API

-   선택 API는 특정 요소를 선택하는 메서드를 제공한다.
-   선택 API는 다음과 같이 2가지로 나눌 수 있다.

#### 1-1. 단일 선택 API

-   단일 선택 API는 특정 요소를 하나만 선택하는 메서드를 제공한다.
-   단일 선택 API는 다음과 같이 2가지로 나눌 수 있다.

##### 1-1-1. `document.querySelector()`

-   `document.querySelector()`는 CSS 선택자를 활용해 특정 요소를 선택한다.
-   선택된 요소가 여러 개라면 첫 번째 요소를 반환한다.

```js
const title = document.querySelector('h1');
console.log(title); // <h1>DOM</h1>
```
