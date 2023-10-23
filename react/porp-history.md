```jsx
// app.js
import React from 'react';
import Header from './header/Header';
import styled from 'styled-components';

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = (props) => {
    return (
        <Wrap>
            <Header />
            <main id="main">{props.children}</main>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-left: 290px;
    background: var(--secondary-grey-300, #f4f7fe);
    #main {
        flex: 1;
        padding: 50px 20px;
    }
`;

export default Layout;

// src/pages/Tables.jsx
import React from 'react';
import Title from '../components/title/Tilte';
import History from '../components/title/History';
import { Stack, Box, Grid, GridItem } from '@chakra-ui/react';

const Tables = () => {
    return (
        <Stack spacing={'30px'} h={'calc(100vh - 100px)'}>
            <Box pl="10px">
                <History pagename="tables" />
                <Title title="Tables" desc="이 페이지는 tables 페이지 입니다." />
            </Box>
            <Grid flexGrow={'1'} h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem bg="yellow" />
                <GridItem bg="papayawhip" />
                <GridItem bg="blue" />
                <GridItem bg="tomato" />
            </Grid>
        </Stack>
    );
};

export default Tables;

// src/components/title/Title.jsx
import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Title = (props) => {
    return (
        <VStack alignItems={'flex-start'} spacing={4}>
            <Heading as={'h2'} fontSize={'34px'} fontWeight={700}>
                {props.title}
            </Heading>
            {/* <Text variant={'txt164'}>{props.desc}</Text> */}
        </VStack>
    );
};

export default Title;

// src/components/title/History.jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const History = ({ pagename }) => {
    // const { pagename } = props;
    return (
        <Breadcrumb color="secondary_grey_700" fontSize="14px" fontWeight="500">
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to={`/${pagename.toLowerCase()}`}>
                    {pagename}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default History;

```
