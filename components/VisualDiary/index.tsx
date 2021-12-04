/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Block = styled.div`
  padding: 24px;
  margin: 0 0 24px 0;
  font-family: var(--fontHeading);
  font-size: 14px;
  font-weight: 100;
`;

const BlockHeader = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 24px;
`;

const BlockDesc = styled.div`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 12px;
`;

const BlockContent = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const VisualDiary = function () {
  return (
    <Wrapper>
      <Block>
        <BlockHeader>05.05.15</BlockHeader>
        <BlockContent>
          <img alt="Fashion Week" src="https://64.media.tumblr.com/91afb1dfa174e96945cb15a5e34ad846/tumblr_msc6fnNPju1r8ecsko1_1280.jpg" />
        </BlockContent>
      </Block>
      <Block>
        <BlockHeader>Fashion Week</BlockHeader>
        <BlockDesc>
          Conceived of as a bridge between the worlds of streetwear and high fashion, designer Virgil Ablohs Off-White explores concepts of branding, the zeitgeist, and the expression of youth culture in the contemporary moment.
        </BlockDesc>
        <BlockContent>
          <img alt="Fashion Week" src="https://64.media.tumblr.com/e3f920482de3c0eb97fce6d5c6b09597/tumblr_n3nffsM93w1r8ecsko1_1280.jpg" />
          <img alt="Fashion Week" src="https://64.media.tumblr.com/3aeec7a4e0b683ecab4c1c6150957438/tumblr_n3nf74b4Jz1r8ecsko1_1280.jpg" />
        </BlockContent>
      </Block>
    </Wrapper>
  );
};

export default VisualDiary;
