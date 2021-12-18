import React from 'react';
import Ticker from 'react-ticker';
import * as Styles from './styles';

const TopNav = function () {
  const [isMoving, setIsMoving] = React.useState(true);

  return (
    <Styles.Wrapper onMouseEnter={() => setIsMoving(false)} onMouseLeave={() => setIsMoving(true)}>
      <Ticker move={isMoving}>
        {() => (
          <Styles.Items>
            <Styles.Item>Matthew James Woodward [mwdwrd]</Styles.Item>
            <Styles.Item>A series of fortunate errors</Styles.Item>
            <Styles.Item>Creative Coder, Designer and Artist</Styles.Item>
            <Styles.Item>+1 (646) 571-9510</Styles.Item>
            <Styles.Item><a target="_blank" href="https://twitter.com/mwdwrd" rel="noreferrer">Twitter</a></Styles.Item>
            <Styles.Item><a target="_blank" href="https://instagram.com/matty.eth/" rel="noreferrer">Instagram</a></Styles.Item>
            <Styles.Item><a target="_blank" href="https://github.com/mwdwrd" rel="noreferrer">Github</a></Styles.Item>
          </Styles.Items>
        )}
      </Ticker>
    </Styles.Wrapper>
  );
};

export default TopNav;
