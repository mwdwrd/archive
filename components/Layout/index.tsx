/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';

const Wrapper = styled.div``;
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 36px;
  color: var(--text);
  border-bottom: 1px solid var(--text);
  background-color: var(--bg);
  z-index: 100;
`;
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 36px;
  color: var(--text);
  background-color: var(--bg);
  z-index: 100;
`;
const Main = styled.main`
  margin: 36px 0;
`;

const Layout = function ({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Wrapper>
      <Header>
        <TopNav />
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        <BottomNav />
      </Footer>
    </Wrapper>
  );
};

export default Layout;
