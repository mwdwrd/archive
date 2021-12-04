/* eslint-disable func-names */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import needle from 'needle';
import TwitterFeed from '../components/TwitterFeed';
import VisualDiary from '../components/VisualDiary';

const Wrapper = styled.div`
  background-color: var(--bg);
  font-family: var(--fontHeading);
  margin: 0;
  color: var(--text);
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 24px;
  font-family: var(--fontHeading);
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  height: 100%;
  border-top: 1px solid var(--text);
`;
const Column = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid var(--text);
`;
const FirstColumn = styled.div`
  flex: 2;
  height: 100%;
  border-left: none;
`;

const Home: NextPage = function ({ tweets }: any) {
  return (
    <>
      <Head>
        <title>Matthew Woodward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Columns>
          <FirstColumn>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Selected Works
              </Heading>
            </SimpleBarReact>
          </FirstColumn>
          <Column>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Visual Diary
              </Heading>
              <VisualDiary />
            </SimpleBarReact>
          </Column>
          <Column>
            <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: '100%' }}>
              <Heading>
                Stream of CONSCIOUSNESS
              </Heading>
              <TwitterFeed tweets={tweets} />
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
