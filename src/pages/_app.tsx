import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppConfig from '@/config';

AppConfig.load();

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
