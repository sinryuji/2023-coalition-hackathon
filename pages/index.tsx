import { useEffect, FC } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import withAuth from "../components/withAuth";

const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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'
const REDIRECT_URI = "http://localhost:3000";

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
        client_id: UID,
        client_secret: SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
      });
      if (data.status >= 400) {
        throw new Error("Failed to get access token");
      }
      Cookies.set("accessToken", data.access_token);
      router.push('/');
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

  return <h1>home</h1>;
};

export default withAuth(Home);
