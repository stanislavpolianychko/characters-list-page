import React from 'react';
import Logo from '@/components/Logo';
import useLoading from '@/hooks/useLoading';
import LanguageSystem from '@/lang';
import { Box } from '@mui/system';

function LoadingOverlay() {
    const { isLoading } = useLoading();

    const styles = {
        box: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        },
    };

    if (!isLoading) {
        return null;
    }

    return (
        <Box
            sx={styles.box}
            aria-label={LanguageSystem.getTranslation('loading')}
            role="status"
        >
            <Logo isSpinning={true} />
        </Box>
    );
}

export default LoadingOverlay;
