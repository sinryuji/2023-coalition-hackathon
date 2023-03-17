import { FC } from 'react';
import withAuth from "../components/withAuth";

const hihi: FC = () => {
  return <img src="https://blog.kakaocdn.net/dn/Rlbrq/btrykAumqLY/K9YY6U9r8u4bidz6gOb2xK/img.jpg" width="250"></img>;
};

export default withAuth(hihi);