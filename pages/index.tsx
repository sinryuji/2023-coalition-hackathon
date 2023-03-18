import { useEffect, FC } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import withAuth from "../components/withAuth";
import { goMainPage, getNickname } from '../utils/utils';

function removeCodeFromUrl() {
  const { protocol, host, pathname } = window.location;
  const newUrl = `${protocol}//${host}${pathname}`;
  window.history.replaceState({}, document.title, newUrl);
}

async function setCookieFromCode(router: NextRouter) {
  const code = new URLSearchParams(window.location.search).get("code");
  if (code !== null) {
    removeCodeFromUrl();
    console.log('code: ', code);
    try {
      const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_API_UID,
        client_secret: process.env.NEXT_PUBLIC_API_SECRET,
        code: code,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      });
      if (data.status >= 400) {
        throw new Error("Failed to get access token");
      }
      goMainPage(router);
      Cookies.set("accessToken", data.access_token);
    } catch (error) {
      console.error(error);
    }
  }
}

const Home: FC = () => {
  const router = useRouter();
  
  console.log("home page");
  useEffect(() => {
    setCookieFromCode(router);
  }, []);

  console.log(getNickname());

  return <h1>home</h1>;
};

export default withAuth(Home);
