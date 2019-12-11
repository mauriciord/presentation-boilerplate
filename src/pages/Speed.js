import React from 'react';
import styled from 'styled-components'
import { Appear } from 'mdx-deck'
import { Img } from '../components'

export const Root = styled.div([], {
  width: '70vw',
  height: '70vh',
});

const List = styled.ul`
  text-align: left;
  list-style-type: decimal;
`;
const Item = styled.li`
  color: black;
  margin: 4rem 0;
`;
const Text = styled.p`
  color: slategray;
  font-size: 1.6rem;
  margin: 0;
`;

export const Cover = () => (
  <Root>
   <Img src={'../img/sonic.jpg'} width={920} />
  </Root>
)

const Speed = () => (
  <Root>
    <h4>Why Should Code Reviews Be Fast?</h4>
    <Text>Instead of giving speed to an individual developer, we should give speed to team, to build a product
      with speed</Text>
    <h4>How Fast Should Code Reviews Be?</h4>
    <Text>If you are not in the middle of a focused task, <b>you should do a code review shortly after it comes in.</b></Text>
    <h4>Speed vs. Interruption</h4>
    <Text>Interrupting yourself while coding is actually more expensive to the team than making another developer wait a bit for a code review.</Text>
  </Root>
);

export default Speed;
