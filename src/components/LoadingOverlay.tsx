import React from 'react';
import GradientBox from '@/components/GradientBox';
import Logo from '@/components/Logo';
import useLoading from '@/hooks/useLoading';
import LanguageSystem from '@/lang';

function LoadingOverlay() {
    const { isLoading } = useLoading();

    if (!isLoading) {
        return null;
    }

    return (
        <GradientBox
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
            aria-label={LanguageSystem.getTranslation('loading')}
        >
            <Logo isSpinning={true} />
        </GradientBox>
    );
}

export default LoadingOverlay;
