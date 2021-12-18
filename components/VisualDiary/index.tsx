/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Entry = styled.div`
  padding: 24px;
  margin: 0 0 24px 0;
  font-family: var(--fontHeading);
  font-size: 14px;
  font-weight: 100;
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--primary);
`;
const Desc = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

const Media = styled.div`
  margin-top: 12px;
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
    margin-bottom: 3px;
  }
  video {
    width: 100%;
    height: auto;
  }
`;

const VisualDiary = function () {
  return (
    <Wrapper>
      <Entry>
        <Date>05.05.15</Date>
        <Desc>The 8th and final Series 3 - Entropy token was minted this morning to @FingerprintsDAO multisig vault, where it will remain in "mint condition". Entropy is a generative audiovisual work that will "degrade" each time the NFT is transferred.</Desc>
        <Media>
          <video controls>
            <source src="audiovisual.mp4" type="video/mp4" />
          </video>
        </Media>
      </Entry>
      <Entry>
        <Date>05.05.15</Date>
        <Desc>Robbie Russo shot for Deus Customs 2012</Desc>
        <Media>
          <a href="https://64.media.tumblr.com/91afb1dfa174e96945cb15a5e34ad846/tumblr_msc6fnNPju1r8ecsko1_1280.jpg" target="_blank" rel="noreferrer">
            <img alt="Fashion Week" src="https://64.media.tumblr.com/91afb1dfa174e96945cb15a5e34ad846/tumblr_msc6fnNPju1r8ecsko1_1280.jpg" />
          </a>
        </Media>
      </Entry>
      <Entry>
        <Date>05.05.15</Date>
        <Media>
          <a href="https://64.media.tumblr.com/f97601959a7bc57d4101ff319de6cd2b/tumblr_n7oe2npQrr1r8ecsko1_1280.jpg" target="_blank" rel="noreferrer">
            <img alt="Fashion Week" src="https://64.media.tumblr.com/f97601959a7bc57d4101ff319de6cd2b/tumblr_n7oe2npQrr1r8ecsko1_1280.jpg" />
          </a>
          <a href="https://64.media.tumblr.com/8ff8a350904ae0a08c6140cf02182403/tumblr_n3nfmmd5Zj1r8ecsko1_1280.jpg" target="_blank" rel="noreferrer">
            <img alt="Fashion Week" src="https://64.media.tumblr.com/8ff8a350904ae0a08c6140cf02182403/tumblr_n3nfmmd5Zj1r8ecsko1_1280.jpg" />
          </a>
        </Media>
      </Entry>
    </Wrapper>
  );
};

export default VisualDiary;
