import React from 'react';
import styled from 'styled-components'
import { Flex } from 'rebass';
import theme from './theme';

const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.text};
`;

const Me = styled.img`
  max-width: 150px;
  max-height: 150px; 
`;

const MeName = styled.span`
  font-size: 50px;
  color: ${theme.colors.primary};
  margin-left: 60px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Root = styled.div([], {
  // width: '50vw',
  height: '70vh',
});

const Username = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const IclinicLogo = styled.img`
  max-width: 600px;
`;

const SocialMediaLink = ({ src, link, username }) => (
  <div>
    <Link href={link} target="_blank">
      <Row>
        <IconImage src={src} />
        <Username>{username}</Username>
      </Row>
    </Link>
  </div>
);

export const Intro = () => (
  <Root>
    <Row>
      <Me src={'./img/me.jpg'} />
      <MeName>Mauricio R Duarte</MeName>
    </Row>
    <SpaceBetween>
      <SocialMediaLink
        src={'./img/github.png'}
        link={'https://github.com/mauriciord'}
        username={'@mauriciord'}
      />
      <SocialMediaLink
        src={'./img/twitter.png'}
        link={'https://twitter.com/mauriciord'}
        username={'@mauriciord'}
      />
    </SpaceBetween>
    <Center>
      <IclinicLogo src={'./img/ic-logo.png'} />
    </Center>
    <Flex flex={1} alignItems='center' justifyContent='center' mt={30}>
      <MeName>Front End developer</MeName>
    </Flex>
  </Root>
);
