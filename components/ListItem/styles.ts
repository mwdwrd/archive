import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px;
  margin: 0;
  border-bottom: 1px solid;
  padding: 24px;
`;

export const Heading = styled.div`
  font-size: 54px;
  font-weight: 100;
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 100;
  margin: 0 0 24px 0;
  width: 75%;
`;

export const Meta = styled.div`
  font-size: 12px;
  font-weight: 100;
  display: flex;
  opacity: 0.5;
`;
export const MetaItem = styled.div`
  margin-right: 36px;
`;

export const Categories = styled.div`
  display: flex;

  div:last-child {
    &::after {
      margin-left: 0;
      content: "";
    }
  }
`;

export const Category = styled.div`
  display: inline-block;
  margin-right: 6px;

  &::after {
    display: inline-block;
    margin-left: 6px;
    content: "/";
  }
`;

