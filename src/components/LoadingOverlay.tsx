import React from 'react';
import GradientBox from '@/components/GradientSection';
import Logo from '@/components/logo/Logo';
import useLoading from '@/hooks/useLoading';

export function LoadingOverlay() {
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
        >
            <Logo isSpinning={true} />
        </GradientBox>
    );
}
