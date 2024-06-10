import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppConfig from '@/config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { LoadingProvider } from '@/contexts/LoadingContext';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import GradientBox from '@/components/GradientSection';
import { CssBaseline } from '@mui/material';

AppConfig.load();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <LoadingProvider>
                <LoadingOverlay />

                <CssBaseline />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </LoadingProvider>
        </>
    );
}

export default MyApp;
