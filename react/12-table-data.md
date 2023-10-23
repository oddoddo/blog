# React Table Data

아래 이미지와 같은 테이블을 만들어보자.

-   table의 데이터는 배열로 만들어서 map()을 사용
-   map()을 사용할 때는 key값을 넣어줘야 한다.
-   map()을 사용할 때는 () => ()를 사용한다.

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc4MqW8%2FbtsyOWKoL34%2FuD27Rt53Ih7p0VZwu8Yoek%2Fimg.jpg](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc4MqW8%2FbtsyOWKoL34%2FuD27Rt53Ih7p0VZwu8Yoek%2Fimg.jpg)

## 1\. Table Data 만들기

```js
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
} from '@chakra-ui/react';
import apple from '../../assets/img/apple.png';
import android from '../../assets/img/android.png';
import window from '../../assets/img/window.png';

const data = [
    {
        title: 'Marketplace',
        images: [
            { src: apple, alt: 'apple' }, // 이미지를 배열로 만들어서 map()을 사용
            { src: android, alt: 'android' },
            { src: window, alt: 'window' },
        ],
        numericValue: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        images: [
            { src: android, alt: 'android' },
            { src: window, alt: 'window' },
        ],
        numericValue: 45,
        percentage: 60,
    },
];

const Development = () => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">Development Table</Heading>
            </CardHeader>

            <CardBody py={2} px={5}>
                <TableContainer>
                    <Table variant="simple" size={['sm', 'md', 'lg']}>
                        <TableCaption>Development Table</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Title</Th>
                                <Th isNumeric>Title</Th>
                                <Th>Title</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.title}</Td>
                                    <Td>
                                        {item.images.map((image, i) => (
                                            <Image key={i} src={image.src} alt={image.alt} />
                                        ))}
                                    </Td>
                                    <Td isNumeric>{item.numericValue}</Td>
                                    <Td isNumeric>{item.percentage}%</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
};

export default Development;
```

## 2. map() 이란?

-   map()은 배열을 순회하면서 배열 안의 요소들을 1대1로 짝지어 주는 함수이다.
-   map()은 배열의 요소를 변형할 때 사용한다.
-   map()은 배열의 요소를 변형하여 새로운 배열을 만들 때 사용한다.

### map() 사용법

```js
배열.map((요소, 인덱스, 배열) => {
    return 요소;
});
```

-   요소: 현재 처리되고 있는 요소
-   인덱스: 현재 처리되고 있는 요소의 index 값
-   배열: 현재 처리되고 있는 원본 배열

### map() 예제

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => {
    return item * 2;
});

console.log(result); // [2, 4, 6, 8, 10]
```

## 3. 화살표 함수 () => {} (중괄호) 대신 () => () (소괄호)를 사용하는 이유

-   화살표 함수 () => {} (중괄호) 대신 () => () (소괄호)를 사용하는 이유는 return을 사용하지 않아도 된다는 점이다.
-   화살표 함수 () => {} (중괄호)를 사용하면 return을 사용해야 한다.

### () => {} (중괄호) 사용 예제

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => {
    return item * 2;
});

console.log(result); // [2, 4, 6, 8, 10]
```

### () => () (소괄호) 사용 예제

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.map((item) => item * 2);

console.log(result); // [2, 4, 6, 8, 10]
```

## map()을 사용할 때 key값을 넣어줘야 하는 이유

-   map()을 사용할 때는 key값을 넣어줘야 한다.
-   key값을 넣어주지 않으면 콘솔창에 경고 메시지가 나온다.
-   key값을 넣어주지 않으면 성능이 떨어진다.
