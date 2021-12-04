/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const Content = styled.h1`
  margin: 0;
  padding: 0;
  font-family: var(--fontHeading);
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  color: var(--text);
  height: 36px;
  line-height: 36px;
`;

const Wrapper = styled.div`
  height: 36px;
`;

const TopNav = function () {
  return (
    <Wrapper>
      <Ticker>
        {() => (
          <Content>
            A series of fortunate errors / Matthew Woodward / Emmy Nominated Creative Director / +1 (646) 571-9510 /
            {' '}
          </Content>
        )}
      </Ticker>
    </Wrapper>
  );
};

export default TopNav;
