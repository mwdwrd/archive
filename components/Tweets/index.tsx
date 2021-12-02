/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const TweetBlock = styled.div`
  padding: 0;
  margin: 0 24px 24px;
  font-family: ${(props) => props.theme.font.heading};
  font-size: 14px;
  font-weight: 100;
  border-bottom: 1px solid #333;
`;

const TweetBlockDesc = styled.div`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 12px;

  img {
    padding: 12px 0;
  }
`;

const Wrapper = styled.div`
    img {
    width: 100%;
    height: auto;
    display: block;
    }
`;

const Tweet = function ({ tweet }) {
  console.log(tweet);
  return (
    <TweetBlock>
      <a target="_blank" href={`https://twitter.com/mwdwrd/status/${tweet.id}`} rel="noreferrer">
        <TweetBlockDesc>
          {tweet.text}
          {tweet.media
        && (
        <>
          {tweet.media.type === 'photo'
            && (
            <img src={tweet.media.url} />
            )}
            {tweet.media.type === 'video'
            && (
            <img src={tweet.media.preview_image_url} />
            )}
        </>
        )}
        </TweetBlockDesc>
      </a>
    </TweetBlock>
  );
};

const Tweets = function ({ tweets }) {
  const { data, includes } = tweets;
  const tweetData = data.map((tweet) => {
    if (tweet.attachments) {
      const key = tweet.attachments.media_keys[0];
      const mediaObject = includes.media.filter((e) => e.media_key === key);
      return {
        ...tweet,
        media: mediaObject[0],
      };
    }
    return tweet;
  });

  return (
    <Wrapper>
      {tweetData.map((tweet: any, i: number) => <Tweet key={i} tweet={tweet} />)}
    </Wrapper>
  );
};

export default Tweets;
