# React Router를 이용한 프로젝트 시작하기

## 1. 프로젝트에 라우터 설치하기

-   라우터를 적용하기 위해서는 react-router-dom 라이브러리를 설치해야 한다.

```bash
yarn add react-router-dom
npm install react-router-dom
```

## 2. 프로젝트에 Router 적용하기

-   프로젝트에 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다.

### - src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
```

## 3. 페이지 만들기

-   페이지를 만들 때는 src/pages 디렉터리에 만든다.

### - src/pages/index.jsx

```js
import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>홈</h2>
            <p>이곳은 홈입니다. 가장 먼저 보여지는 페이지입니다.</p>
        </div>
    );
};

export default Home;
```

### - src/pages/About/index.jsx

```js
import React from 'react';

const About = () => {
    return (
        <div>
            <h2>소개</h2>
            <p>이곳은 소개 페이지입니다.</p>
        </div>
    );
};

export default About;
```

## 3. Route를 이용하여 특정 주소에 컴포넌트 연결하기

-   Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄지 정의할 수 있다.
-   사용법

```js
<Route path="주소규칙" component={보여 줄 컴포넌트} />
```

### - src/App.js

```js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
    );
};

export default App;
```

## 4. Link 컴포넌트를 사용하여 다른 주소로 이동하기

-   Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트이다.
-   사용법

```js
<Link to="이동할 주소">내용</Link>
```

### - src/components/Layout/Header.jsx

```js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>
                <Link to="/">Logo</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
```
