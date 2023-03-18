import { useEffect } from "react";
import { useRouter } from "next/router";
import { checkIfLoggedIn, goMainPage } from '../utils/utils';
import { useRecoilState } from "recoil";
import { nicknameState } from "components/atom";

const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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';
const REDIRECT_URI = "http://localhost:3000";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = async () => {
      const loggedIn = await checkIfLoggedIn(router);
      console.log('login status: ', loggedIn);
      if (loggedIn) {
        goMainPage(router);
      }
    };
    isLoggedIn();
  }, []);

  const handleLogin = async () => {
    const url = `https://api.intra.42.fr/oauth/authorize?client_id=${UID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.assign(url);
  };

  return (
    <div>
      <h1>HELLO!</h1>
      <img src="https://t1.daumcdn.net/cfile/tistory/99C9493C5F32979520" width='300'></img>
      <br></br>
      <button onClick={handleLogin}>Login button</button>
    </div>
  );
};

export default Login;
