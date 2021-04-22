import React from 'react';
import Search from './components/Search/Search';
import styled from 'styled-components';
import background from './assets/bg.svg';
import Heading from './components/Heading/Heading';

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  padding: 2rem;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 4rem;
  }
`;
const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Wrapper className='App'>
        <Heading />
        <Search />
      </Wrapper>
    </Container>
  );
};

export default App;
