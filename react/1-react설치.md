## 1\. 작업환경 준비하기

-   npm : [https://www.npmjs.com/](https://www.npmjs.com/)
-   yarn : [https://yarnpkg.com/](https://yarnpkg.com/)

### \- Node.js

Webpack 과 Babel 같은 도구들은 자바스크립트 런타임인 Node.js 환경에서 만들어져있습니다. 그렇기에 해당 도구들을 사용하기 위해서 Node.js 를 설치합니다.

[https://nodejs.org/ko](https://nodejs.org/ko) : LTS 버전으로 설치

### \- Homebrew

홈브루는 자유-오픈 소스 소프트웨어 패키지 관리 시스템의 하나로서 애플의 macOS 운영 체제의 소프트웨어 설치를 단순하게 만들어줍니다.

[https://brew.sh/](https://brew.sh/)

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### \- yarn

Yarn은 Node.js 자바스크립트 런타임 환경을 위해 페이스북이 2016년 개발한 소프트웨어 패키지 시스템이다.

```
brew install yarn
```

> yarn add  
> npm install 로 설치

## 2\. React 설치하기

[https://react.dev/](https://react.dev/)

설치하고 싶은 폴더에서 git bash or 터미널을 실행 후 아래 코드로 리액트를 설치합니다.

```
npx create-react-app my-app
// ts npx create-react-app my-app-ts --typescript
```

> 주의  
> 첫 번째 줄의 ‘npx’는 실수가 아니며 npm 5.2+ 버전의 패키지 실행 도구입니다.

project-name 라는 디렉터리가 생기고 그 안에 리액트 프로젝트가 생성됩니다. 생성이 끝나면 cd 명령어를 사용하여 해당 디렉터리에 들어간 다음 yarn start 명령어를 입력해보세요 (yarn 이 없다면 npm start).

```
cd my-app
yarn start
```

![](https://velog.velcdn.com/images/odada/post/c9b7925e-b0a0-4d85-9076-0bc16cc8e03b/image.png)

![](https://velog.velcdn.com/images/odada/post/e86d10c6-b83f-459e-b0c1-782164e8fd34/image.png)

## 3\. React 라이브러리 설치

#### \- styled-reset

styled-reset은 CSS 스타일을 초기화하거나 재설정하는 데 사용되는 스타일 시트 라이브러리이다.

[https://github.com/zacanger/styled-reset#readme](https://github.com/zacanger/styled-reset#readme)

```
yarn add styled-reset
npm i styled-reset
```

#### \- styled-components

styled-components는 CSS-in-JS 라이브러리로, 자바스크립트 파일 안에 스타일을 선언하는 방식으로 스타일을 관리할 수 있게 해준다.

[https://styled-components.com/](https://styled-components.com/)

```
yarn add styled-components
npm i styled-components
```

#### \- react-sass

react-sass는 Sass를 사용할 수 있게 해주는 라이브러리이다.

[https://github.com/sass/node-sass](https://github.com/sass/node-sass)

```
yarn add node-sass
npm i node-sass
```

#### \- chakra

chakra는 개발자가 웹 응용 프로그램을 위해 액세스 가능하고 재사용 가능한 사용자 인터페이스 구성 요소를 빠르게 구축할 수 있도록 도와주는 React의 UI 구성 요소 라이브러리이다.

[https://chakra-ui.com/](https://chakra-ui.com/)

```
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

#### - Ant Design

Ant Design(앤트 디자인)은 중국의 개발자들이 개발한 UI 디자인 프레임워크로, React와 Angular 기반의 웹 애플리케이션을 위한 컴포넌트를 제공합니다.

[https://ant.design/](https://ant.design/)

```
yarn add antd
npm i antd
```

#### - React Icons

React Icons는 리액트용 아이콘 라이브러리로, 다양한 아이콘을 제공한다

[https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

```
yarn add react-icons
npm i react-icons
```

#### - React Bootstrap

React Bootstrap은 리액트용 부트스트랩 라이브러리로, 부트스트랩의 컴포넌트를 리액트에서 사용할 수 있게 해준다

[https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

```
yarn add react-bootstrap bootstrap
npm i react-bootstrap bootstrap
```

#### - Material UI

Material UI(머티어리얼 UI)는 React 기반의 웹 애플리케이션을 개발할 때 사용되는 사용자 인터페이스(UI) 프레임워크입니다.  
이는 Google에서 개발한 Material Design을 기반으로 하고 있으며, React 컴포넌트를 사용하여 간편하게 재사용 가능한 UI 요소를 구축할 수 있도록 도와줍니다.

[https://material-ui.com/](https://material-ui.com/)

```
yarn add @material-ui/core
npm i @material-ui/core
```

#### - Semantic UI React

Semantic UI React는 React 프레임워크를 기반으로 하는 사용자 인터페이스(UI) 구축을 위한 라이브러리입니다. 이는 Semantic UI라는 CSS 프레임워크의 React 구현체로, 사용자가 웹 애플리케이션의 시각적 디자인을 쉽게 구축하고 사용할 수 있게 도와줍니다. 이 라이브러리는 반응형 디자인과 모바일 퍼스트 접근 방식을 채용하여 다양한 기기 및 화면 크기에서 일관된 사용자 경험을 제공합니다.

[https://react.semantic-ui.com/](https://react.semantic-ui.com/)

```
yarn add semantic-ui-react
npm i semantic-ui-react
```

#### - Grommet

Grommet은 React 기반의 웹 애플리케이션을 쉽게 개발하기 위한 UI 라이브러리 중 하나입니다. 이 라이브러리는 사용자 인터페이스(UI)를 구축하는 데 도움이 되는 다양한 컴포넌트와 디자인 패턴을 제공합니다. Grommet은 사용자가 시각적으로 매력적이고 기능적인 웹 애플리케이션을 만들 수 있도록 돕는 것이 목표입니다.

Grommet은 특히 반응형 디자인에 중점을 둔다는 특징이 있습니다. 즉, 다양한 디바이스 및 화면 크기에 대응하여 일관된 사용자 경험을 제공할 수 있도록 설계되었습니다.

[https://v2.grommet.io/](https://v2.grommet.io/)

```
yarn add grommet
npm i grommet
```

#### - Fluent UI

Fluent UI는 사용자 인터페이스(UI)를 설계하고 구현하기 위한 Microsoft의 디자인 시스템입니다. 이는 Microsoft의 제품과 서비스에서 일관된 디자인과 사용자 경험을 제공하도록 고안되었습니다. Fluent UI는 Windows, Office, Xbox, 및 기타 Microsoft 제품과 서비스에 걸쳐 일관된 디자인 원칙을 정의하고 있습니다.

[https://developer.microsoft.com/ko-kr/fluentui#](https://developer.microsoft.com/ko-kr/fluentui#)

```
yarn add @fluentui/react
npm i @fluentui/react
```

#### - Evergreen UI

Evergreen UI는 리액트용 UI 라이브러리로, 주로 특별한 스타일링이나 테마가 필요하지 않는 간단한 디자인에 중점을 둡니다. 따라서 Evergreen UI를 사용하면 빠르게 깔끔하고 간결한 UI를 개발할 수 있습니다.

[https://evergreen.segment.com/](https://evergreen.segment.com/)

```
yarn add evergreen-ui
npm i evergreen-ui
```

### - Rebass

Rebass는 간단하면서도 확장 가능한 디자인 컴포넌트를 제공하여 React 개발을 더 효율적으로 만들어줍니다. 이를 통해 개발자는 UI 요소를 쉽게 구성하고 스타일을 일관성 있게 적용할 수 있습니다.

[https://rebassjs.org/](https://rebassjs.org/)

```
yarn add rebass
npm i rebass
```

#### - React Responsive

React Responsive는 리액트용 반응형 디자인 라이브러리로, 반응형 웹을 쉽게 만들 수 있게 해준다

https://github.com/yocontra/react-responsive

```
yarn add react-responsive
npm i react-responsive
```

#### - React Toastify

React Toastify는 리액트용 토스트 메시지 라이브러리로, 토스트 메시지를 쉽게 만들 수 있게 해준다

[https://fkhadra.github.io/react-toastify/introduction/](https://fkhadra.github.io/react-toastify/introduction/)

```
yarn add react-toastify
npm i react-toastify
```

#### - React Datepicker

React Datepicker는 리액트용 날짜 선택 라이브러리로, 날짜 선택을 쉽게 만들 수 있게 해준다

[https://reactdatepicker.com/](https://reactdatepicker.com/)

```
yarn add react-datepicker
npm i react-datepicker
```

#### - React Calendar

React Calendar는 리액트용 달력 라이브러리로, 달력을 쉽게 만들 수 있게 해준다

https://github.com/wojtekmaj/react-calendar#readme

```
yarn add react-calendar
npm i react-calendar
```

### - React Hook Form

React Hook Form은 리액트용 폼 라이브러리로, 폼을 쉽게 만들 수 있게 해준다

[https://react-hook-form.com/](https://react-hook-form.com/)

```
yarn add react-hook-form
npm i react-hook-form
```

### \- React Router

React Router는 리액트용 라우터 라이브러리로, 페이지 이동을 쉽게 만들 수 있게 해준다

[https://github.com/remix-run/react-router#readme](https://github.com/remix-run/react-router#readme)

React로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리!!

```
yarn add react-router-dom
//ts yarn add @types/react-router-dom
```

### - React Query

React Query는 리액트용 상태 관리 라이브러리로, 서버 상태를 쉽게 관리할 수 있게 해준다

[https://react-query.tanstack.com/](https://react-query.tanstack.com/)

```
yarn add react-query
npm i react-query
```

#### - Zustand

Zustand는 리액트용 상태 관리 라이브러리로, 리덕스와 비슷한 기능을 제공하지만 코드가 훨씬 간결하다

https://github.com/pmndrs/zustand

```
yarn add zustand
npm i zustand
```
