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

export const References = () => (
  <Root>
    <List>
      <Item><a href="https://google.github.io/eng-practices/review/" target="_blank"><b>Google's Engineering Practices documentation</b></a></Item>
      <Appear>
        <Item>
          <a href="https://confluence.atlassian.com/bitbucket/pull-requests-and-code-review-223220593.html" target="_blank">
            <b>Pull requests and code review</b>
          </a>
        </Item>
        <Item>
          <a href="https://medium.com/palantir/code-review-best-practices-19e02780015f" target="_blank">
            <b>Palantir: Code Review Best Practices</b>
          </a>
        </Item>
      </Appear>
    </List>
  </Root>
);
