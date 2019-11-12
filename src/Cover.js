import React from 'react';
import styled from 'styled-components'
import { space, width } from 'styled-system';
import theme from './theme';

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: ${theme.colors.primary};
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={'./img/code-review.png'} width={450} />
      <Title mt={20}>How to apply a code code review</Title>
      <Subtitle mt={20}>Tips for better coexistence</Subtitle>
      <MeName mt={100}>Mauricio R Duarte</MeName>
    </Center>
  </Root>
);
