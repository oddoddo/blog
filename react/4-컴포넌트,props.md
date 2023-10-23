# 컴포넌트(Components), Props - react 배우기

## 1. 리액트 컴포넌트(React Components)란?

> 리액트는 컴포넌트 기반의 라이브러리이기 때문에 컴포넌트를 잘 이해하고 있어야 한다.

-   컴포넌트는 UI를 재사용 가능한 개별적인 조각으로 나눈 것이다.
-   작은 컴포넌트들이 모여 하나의 큰 컴포넌트를 만들고, 이 큰 컴포넌트들이 또 다른 큰 컴포넌트를 만들어 나가는 식으로 구성된다.
-   개념적으로는 함수와 비슷하다. 입력값을 받아서 어떠한 결과를 출력한다.

![](https://velog.velcdn.com/images/odada/post/a3e40868-6044-41e6-a8a5-917f74d308cc/image.png)

## 2. Props(Properties) 란?

-   컴포넌트의 속성을 설정할 때 사용하는 요소이다.
-   컴포넌트에게 전달되는 데이터를 의미한다.

Components로 고양이를 계속 만들어낼 수 있다면...  
Props로 서로 다른 고양이를 만들어낼 수 있다.

![](https://velog.velcdn.com/images/odada/post/a14aaf11-276c-4528-b83e-daaaed9c7614/image.png)

이미지 출처 : https://javascript.plainenglish.io/basic-react-components-and-props-for-showing-lots-of-cats-d41bf67cc26

## 3. Props의 특징

-   읽기 전용
-   리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줄 것!!
-   props는 부모 컴포넌트에서 전달받은 값으로 자식 컴포넌트에서 이를 변경하면 안됨
-   컴포넌트 내부에서는 props를 변경할 수 없음
-   이를 통해 컴포넌트의 재사용성과 유지보수성을 높일 수 있음

```js
// 순수(pure)함수 - sum()의 반환값이 받은 매개변수 a, b의 값에 영향을 미치지 않음
function sum(a, b) {
    return a + b;
}

// 비순수(impure)함수 - withdraw()의 반환값은 account의 값을 변환시킴
function withdraw(account, amount) {
    account.total -= amount;
}
```

## 4. Props 사용법

-   JSX를 사용할 경우, 컴포넌트에 key(키)-value(값) 쌍 형태로 넣어 주면 됨
-   문자열 이외에 정수, 변수, 다른 컴포넌트 등이 들어갈 경우 중괄호를 사용해서 감싸줘어야 함
-   JSX를 사용하지 않는 경우, createElement() 함수의 두 번째 파라미터로 자바스크립트 객체를 넣어주면 됨

```jsx
// Cat.jsx
import React from 'react';

function Cat(props) {
    return (
        <div style={{ color: props.color, fontSize: props.fontSize }}>
            우리 고양이 이름은 {props.name}이고 나이는 {props.age}살이예요.
        </div>
    );
}

export default Cat;
```

```jsx
// App.js
import React from 'react';
import Cat from './Cat';

function App() {
    return (
        <div>
            <Cat name="나비" age={2} color="red" fontSize="16px" />
            <Cat name="단비" age={3} color="blue" fontSize="18px" />
            <Cat name="예나" age={5} color="green" fontSize="20px" />
        </div>
    );
}

export default App;
```

-   JSX는 중괄호를 사용하면 자바스크립트 코드가 들어간다.
-   props에 값을 넣을 때 문자열 이외에 정수, 변수, 컴포넌트가 들어갈 경우 중괄호 사용

위 코드를 JSX 사용하지 않고 작성한다면...

```js
React.createElement(
    Cat, // type
    // [props]
    {
        name: "나비",
        age: 2
    },
    {
        name: "단비",
        age: 3
    },
    {
        name: "예나",
        age: 5
    }
    // [...children]
    null
)
```

## 5. 컴포넌트 만들기

-   컴포넌트는 함수 또는 클래스로 정의할 수 있음
-   컴포넌트 이름은 대문자로 시작해야 함
-   소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하게 됨
-   컴포넌트로부터 엘리먼트를 생성하여 이를 리액트 DOM에 랜더링에 전달

### - 함수 컴포넌트

-   컴포넌트를 정의하는 가장 간단한 방법
-   파라미터(props)를 받아와서 화면에 표시할 내용을 반환하는 함수를 작성하면 됨

```jsx
// Cat.jsx
import React from 'react';

function Cat(props) {
    return (
        <div style={{ color: props.color, fontSize: props.fontSize }}>
            우리 고양이 이름은 {props.name}이고 나이는 {props.age}살이예요.
        </div>
    );
}

export default Cat;
```

-   구조 분해 할당을 사용하여 props를 받아올 수 있음

```jsx
// Cat.jsx
import React from 'react';

function Cat({ color, name, age, fontSize }) {
    return (
        <div style={{ color, fontSize }}>
            우리 고양이 이름은 {name}이고 나이는 {age}살이에요.
        </div>
    );
}

export default Cat;
```

### - 클래스 컴포넌트

-   자바스크립트 ES6의 클래스(class)를 사용해 컴포넌트를 정의하는 또 다른 방법
-   React.Component를 상속받아서 컴포넌트를 정의할 수 있음
-   render() 메소드는 화면에 표시할 내용을 반환해야 함

```jsx
// Cat.js
import React from 'react';

class Cat extends React.Component {
    render() {
        return (
            <div>
                우리 고양이 이름은 {this.props.name}이고 나이는 {this.props.age}살이예요.
            </div>
        );
    }
}

export default Cat;
```

리액트의 모든 클래스 컴포넌트는 React.Component를 상속받아서 정의해야 한다.  
상속이라는 것은 부모 클래스의 기능을 그대로 물려받는 것을 의미한다.

위 예제에서는 React.Component라는 클래스를 상속받아서 Cat이라는 클래스를 만들었고,  
이는 React.Component를 상속받았기 때문에 리액트 컴포넌트가 된다.

### - 컴포넌트 이름 짓기

-   컴포넌트 이름은 대문자로 시작해야 함
-   소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하게 됨
-   < div > 나 < span > 같은 태그는 'div', 'span'과 같은 문자열 형태로 React.createElement()에 전달
-   < Cat / >과 같이 대문자로 시작하는 경우에는 React.createElement(Cat)의 형태로 컴포넌트에 전달

```jsx
// html div 태그로 인식
const element = <div />;

// 컴포넌트로 인식
const element = <Cat name="겨울" />;
```

## 6. 컴포넌트 랜더링

-   컴포넌트를 랜더링할 때는 ReactDOM.render() 함수를 사용
-   첫 번째 파라미터는 랜더링할 결과물, 두 번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지 정함

```jsx
// App.js
import React from 'react';
import Cat from './Cat';

function App() {
    return (
        <div>
            <Cat name="가을" age={2} />
            <Cat name="겨울" age={3} />
        </div>
    );
}

export default App;
```

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## 7. 컴포넌트 합성

-   여러 컴포넌트를 묶어서 새로운 컴포넌트를 만들 수 있음
-   컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있음

```jsx
// Cat.jsx
import React from 'react';

function Cat({ color, name, age, fontSize }) {
    return (
        <div style={{ color, fontSize }}>
            우리 고양이 이름은 {name}이고 나이는 {age}살이에요.
        </div>
    );
}

export default Cat;
```

```jsx
// App.js
import React from 'react';
import Cat from './Cat';

function App() {
    return (
        <div>
            <Cat name="가을" age={2} />
            <Cat name="겨울" age={3} />
        </div>
    );
}

export default App;
```

-   위 코드에서 Cat 컴포넌트를 여러번 사용하는 App 컴포넌트를 만들었다.
-   이렇게 여러 개의 컴포넌트를 합쳐서 또 다른 컴포넌트를 만드는 것을 컴포넌트 합성이라고 한다.

## 8. 컴포넌트 추출

-   큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
-   기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋다.

```jsx
// src/component/comment/CommentContainer.tsx
import React from "react";
import Comment from "./Comment";

const CommentContainer = () => {
  const user1 = {
    name: "winter",
    avatarUrl: "https://assets.chatgpt4google.com/assets/promo/43.gif"
  };

  const user2 = {
    name: "fall",
    avatarUrl:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  };

  const commentData1 = {
    author: user1,
    text: "This is a comment from winter.",
    date: "2023.10.10"
  };

  const commentData2 = {
    author: user2,
    text: "This is a comment from fall.",
    date: "2023.10.10"
  };

  return (
    <>
      <Comment {...commentData1} />
      <Comment {...commentData2} />
    </>
  );
};

export default CommentContainer;


// src/component/comment/Comment.jsx
import React from "react";
import UserInfo from "./UserInfo";

function Comment(props) {
  const { author, text, date } = props;
  return (
    <div className="comment">
      <UserInfo userProps={author} />
      <div className="comment-text">{text}</div>
      <div className="comment-date">{date}</div>
    </div>
  );
}

export default Comment;


// src/component/comment/UserInfo.jsx
import Avatar from "./Avatar";

function UserInfo({ userProps }) {
  const { name } = userProps;
  return (
    <div className="UserInfo">
      <Avatar userProps={userProps} />
      <div className="UserInfo-name">{name}</div>
    </div>
  );
}

export default UserInfo;


// src/component/comment/Avatar.jsx
const Avatar = ({ userProps }) => {
  const { avatarUrl, name } = userProps;
  return <img src={avatarUrl} alt={name} />;
};

export default Avatar;
```
