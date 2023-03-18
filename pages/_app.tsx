import type { AppProps /*, AppContext */ } from 'next/app'
import { RecoilRoot } from 'recoil';
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
   return (
   <RecoilRoot>
      <Component {...pageProps} />
   </RecoilRoot>)
}

export default App;
