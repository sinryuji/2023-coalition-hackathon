import { nicknameState } from 'components/atom';
import { useState, useEffect, FC } from 'react';
import { useRecoilState } from 'recoil';
import withAuth from "../components/withAuth";
import { getNickname } from '../utils/utils';

const hihi: FC = () => {
  console.log('in hihi', getNickname());
  return <img src="https://blog.kakaocdn.net/dn/Rlbrq/btrykAumqLY/K9YY6U9r8u4bidz6gOb2xK/img.jpg" width="250"></img>;
};

export default withAuth(hihi);