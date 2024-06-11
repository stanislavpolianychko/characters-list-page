import { AppProps } from 'next/app';
import '@/styles/globals.css';
import AppConfig from '@/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';
import LoadingOverlay from '@/components/LoadingOverlay';
import LoadingProvider from '@/contexts/LoadingContext';
import GradientBox from '@/components/GradientBox';

AppConfig.load();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <LoadingOverlay />
                <CssBaseline />
                <GradientBox sx={{}}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </GradientBox>
            </LoadingProvider>
        </ThemeProvider>
    );
}

export default MyApp;
