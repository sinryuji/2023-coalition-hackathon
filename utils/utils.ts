import { useRouter, NextRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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';
const REDIRECT_URI = "http://localhost:3000";
const MAIN_PAGE = "/";

// function removeCodeFromUrl() {
//   const { protocol, host, pathname } = window.location;
//   const newUrl = `${protocol}//${host}${pathname}`;
//   window.history.replaceState({}, document.title, newUrl);
// }

// export async function setCookieFromCode() {
//   const code = new URLSearchParams(window.location.search).get("code");
//   if (code !== null) {
//     removeCodeFromUrl();
//     try {
//       //const { data } = await getToken(code);
//       const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
//         grant_type: 'authorization_code',
//         client_id: UID,
//         client_secret: SECRET,
//         code: code,
//         redirect_uri: REDIRECT_URI,
//       });
//       if (data.status >= 400) {
//         throw new Error("Failed to get access token");
//       }
//       Cookies.set("accessToken", data.access_token);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

async function getToken(code: string) {
  const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
    grant_type: 'authorization_code',
    client_id: UID,
    client_secret: SECRET,
    code: code,
    redirect_uri: REDIRECT_URI,
  });
  return data;
}

// export async function checkIfLoggedIn(router: NextRouter) {
//   const token = Cookies.get('accessToken');

//   if (token) {
//     try {
//       const response = await axios.get(
//         "https://api.intra.42.fr/v2/me",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status >= 400) {
//         throw new Error("Not Authorized");
//       }
//     } catch (error) {
//       router.push("/login");
//     }
//   }
//   else {
//     router.push("/login");
//   }
// }

export async function checkIfLoggedIn(router: NextRouter): Promise<boolean> {
  const token = Cookies.get('accessToken');

  if (token) {
    try {
      const response = await axios.get(
        "https://api.intra.42.fr/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("Not Authorized");
      }
      return true;
    } catch (error) {
      // router.push("/login");
      return false;
    }
  } else {
    //router.push("/login");
    return false;
  }
}

export function logOut() {
  Cookies.set('accessToken', '', { expires: 0} );
}

export function goMainPage(router: NextRouter) {
  router.push(MAIN_PAGE);
}