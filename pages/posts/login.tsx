import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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';
const REDIRECT_URI = "http://localhost:3000";

async function getToken(code: string) {
  const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
    grant_type: 'authorization_code',
    client_id: UID,
    client_secret: SECRET,
    code: code,
    redirect_uri: REDIRECT_URI,
  });
  console.log('in get token: ',data);
  return data.access_token;
}

function removeCodeFromUrl() {
  const { protocol, host, pathname } = window.location;
  console.log('removeCode go : ', protocol, host, pathname);
  const newUrl = `${protocol}//${host}${pathname}`;
  window.history.replaceState({}, document.title, newUrl);
}

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('useEffect go');
    const { code } = router.query;

    if (code) {
      getToken(code as string).then(token => {
        localStorage.setItem('token', token);
        setLoggedIn(true);
        removeCodeFromUrl();
      });
    }
  }, [router.query]);

  const handleLogin = () => {
    const authorizationUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${UID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = authorizationUrl;
  };

  return (
    <div>
      <h1>HELLO!</h1>
      <img src="https://t1.daumcdn.net/cfile/tistory/99C9493C5F32979520" width='250'></img>
      <br></br>
      {!loggedIn && <button onClick={handleLogin}>Login with 42</button>}
      {loggedIn && <p>You are logged in.</p>}
    </div>
  );
}
