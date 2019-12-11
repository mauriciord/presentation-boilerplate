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

// export const Cover = () => (
//   <Root>
//    <Img src={'../img/writing-bible.jpg'} width={980} />
//   </Root>
// )

export const WhatsNext = () => (
  <Root>
    <List>
      <Item><a href="https://www.swyx.io/writing/learn-in-public/" target="_blank"><b>Learn In Public</b></a></Item>
      <Appear>
        <Item>
          <a href="https://blog.pragmaticengineer.com/the-product-minded-engineer/" target="_blank">
            <b>The Product-Minded Software Engineer</b>
          </a>
        </Item>
      </Appear>
    </List>
  </Root>
);
