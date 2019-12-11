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
   <Img src={'../img/writing-bible.jpg'} width={980} />
  </Root>
)

export const WritingCommentsCourtesy = () => (
  <Root>
    <div>
      <h4>Courtesy</h4>
      <Text>Be sure that you are always making comments about the code and never making comments about the developer</Text>
    </div>
    <Appear>
      <div>
        <h5>Good</h5>
        <Img src={'../img/cl-comments/good-comment.png'} width={750} />
      </div>
    </Appear>
  </Root>
);

export const WritingCommentsRest = () => (
  <Root>
    <div>
      <h4>Explain Why</h4>
      <Text>Helps the developer understand why you are making your comment.</Text>
    </div>
    <Appear>
      <div>
        <h4>Giving Guidance</h4>
        <Text>
          In general, you should strike an appropriate balance between pointing out problems and providing direct
            guidance. You are not required to do a detailed design of a solution or write code for the developer.
        </Text>
      </div>
      <div>
        <h4>Accepting Explanations</h4>
        <Text>
          Ask a developer to explain a piece of code that you don’t understand.
        </Text>
        <Text>
          <b>Explanations written only in the code review tool are not helpful to future code readers.</b>
        </Text>
      </div>
    </Appear>
  </Root>
);
