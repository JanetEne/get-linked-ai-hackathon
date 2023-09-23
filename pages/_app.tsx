import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <NextNProgress color="#D434FE" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
