import { useEffect, FC } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import withAuth from "../components/withAuth";

const UID = process.env.API_UID;
const SECRET = process.env.API_SECRET;
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