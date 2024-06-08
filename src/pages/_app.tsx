import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppConfig from '@/config';
import Header from '../components/Header';
import Footer from '../components/Footer';

AppConfig.load();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
