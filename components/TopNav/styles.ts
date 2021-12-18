import styled from 'styled-components';

export const Items = styled.div`
  margin: 0;
  padding: 0;
  font-family: var(--fontHeading);
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  color: var(--text);
  height: 48px;
  line-height: 48px;
  display: flex;
`;

export const Item = styled.div`
  margin-left: 12px;

  &::after {
    margin-left: 12px;
    display: inline-block;
    content: "/";
  }

  a {
    color: var(--primary);
  }
`;

export const Wrapper = styled.div`
  height: 48px;
`;
