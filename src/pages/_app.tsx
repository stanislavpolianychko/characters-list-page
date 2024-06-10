import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppConfig from '@/config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { LoadingProvider } from '@/contexts/LoadingContext';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';

AppConfig.load();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <LoadingOverlay />
                <CssBaseline />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </LoadingProvider>
        </ThemeProvider>
    );
}

export default MyApp;
