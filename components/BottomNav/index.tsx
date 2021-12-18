import { useTheme } from 'next-themes';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: var(--fontHeading);
  font-size: 10px;
  font-weight: 500;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 100%;
`;
const ThemeToggle = styled.div`
  text-transform: uppercase;
  background-color: var(--text);
  color: var(--bg);
  padding: 3px 10px;
  border-radius: 12px;
`;

const BottomNav = function () {
  const { theme, setTheme } = useTheme();

  return (
    <Wrapper>
      <ThemeToggle onClick={() => setTheme((theme === 'dark') ? 'light' : 'dark')}>
        {(theme === 'dark') ? 'Lights On' : 'Lights Off'}
      </ThemeToggle>
    </Wrapper>
  );
};

export default BottomNav;
