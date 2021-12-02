/* eslint-disable func-names */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Ticker from 'react-ticker';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import needle from 'needle';
import Tweets from '../components/Tweets';

const Wrapper = styled.div`
font-family: ${(props) => props.theme.font.heading};
  margin: 0;
  background-color: #000000;
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 24px;
  font-family: ${(props) => props.theme.font.heading};
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 24px;
`;

const TickerHeading = styled.h1`
  margin: 0 0 24px 0;
  padding: 0;
  font-family: ${(props) => props.theme.font.heading};
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
`;

const Columns = styled.div`
  display: flex;
  height: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.white};
`;
const Column = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.white};
`;
const FirstColumn = styled.div`
  flex: 2;
  height: 100%;
  border-left: none;
`;

const Block = styled.div`
  padding: 24px;
  margin: 0 0 24px 0;
  font-family: ${(props) => props.theme.font.heading};
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

const Home: NextPage = function ({ tweets }: any) {
  return (
    <>
      <Head>
        <title>Matthew Woodward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Ticker>
          {() => (
            <TickerHeading>
              A series of fortunate errors / Matthew Woodward / Emmy Nominated Creative Director / +1 (646) 571-9510 /
              {' '}
            </TickerHeading>
          )}
        </Ticker>
        <Columns>
          <FirstColumn>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Selected Works
                <br />
                2021
              </Heading>
            </SimpleBarReact>
          </FirstColumn>
          <Column>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Visual Diary
                <br />
                Mostly Leica Q2
              </Heading>
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
            </SimpleBarReact>
          </Column>
          <Column>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Stream of CONSCIOUSNESS
                <br />
                @mwdwrd
              </Heading>
              <Tweets tweets={tweets} />
            </SimpleBarReact>

          </Column>
        </Columns>
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const bearerToken = process.env.BEARER_TOKEN;
  const params = {
    max_results: 100,
    expansions: 'attachments.media_keys',
    exclude: 'retweets,replies',
    'media.fields': 'duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text',
  };
  const options = {
    headers: {
      'User-Agent': 'v2UserTweetsJS',
      authorization: `Bearer ${bearerToken}`,
    },
  };
  const userId = process.env.TWITTER_ID;
  const url = `https://api.twitter.com/2/users/${userId}/tweets`;
  const res = await needle('get', url, params, options);
  const tweets = res.body;

  return {
    props: {
      tweets,
    },
  };
}

export default Home;
