## 1\. JSX란?

> JSX = JavaScript + XML/HTML

-   A syntax extension to JavaScript (자바스크립트의 확장 문법)
-   대입 연산자를 통해 Html 코드를 변수에 저장한다.

```jsx
const element = <h1>Hello, world!</h1>;
```

## 2\. JSX의 역할

-   JSX로 작성된 코드는 모두 자바스크립트 코드로 변환
-   JSX는 React.createElement()로 변환된다.

```jsx
// JSX
<div id="foo">Hello</div>
```

\=>

```jsx
// React.createElement()
React.createElement('div', { id: 'foo' }, 'Hello');
```

## 3\. JSX의 장점

-   코드가 간결해진다.
-   가독성이 향상된다.

```jsx
// jsx 사용
<div>Hello, {name}</div>;

// jsx 사용 안함
React.reactElement('div', null, `Hello, ${name}`);
```

## 4\. JSX의 사용법

-   큰따옴표 사이에 문자열을 넣거나

```jsx
const element = <div tabIndex="0"></div>;
```

-   중괄호 사이에 자바스크립트 코드를 넣거나

```jsx
const element = <img src={{user.imgUrl}} />
```

```jsx
const element = (
    <div>
        <h1>리액트인가? 리엑트인가??</h1>
    </div>
);
```

## 5\. 예제

```jsx
// Cat.jsx

import React from 'react'; // JSX를 사용하기 위해 반드시 import 해야 함

const Cat = (props) => {
    // JSX를 사용하지 않는 경우, createElement() 함수의 두 번째 파라미터로 자바스크립트 객체를 넣어주면 됨
    return (
        // return 문 안에 HTML 태그를 작성하면 됨
        <div>
            나의 고양이 이름은 {props.name}이고 {props.age}살 입니다.
        </div>
        // 중괄호를 사용하면 자바스크립트 코드가 들어간다.
    );
};

export default Cat; // export default 문을 사용해 다른 파일에서 Cat 컴포넌트를 불러올 수 있게 함
```

```jsx
// App.jsx
import './App.css'; // CSS 파일을 불러올 수 있음
import Cat from './components/Cat'; // 다른 파일에서 Cat 컴포넌트를 불러옴

function App() {
    // App 컴포넌트
    return (
        <>
            <Cat name="겨울" age="2" />
            <Cat name="가을" age="5" />
        </>
        // Cat 컴포넌트를 사용할 때 props.name, props.age를 넣어줌
        // 나의 고양이 이름은 겨울이고 2살 입니다.
        // 나의 고양이 이름은 가을이고 5살 입니다.
    );
}

export default App;
```
