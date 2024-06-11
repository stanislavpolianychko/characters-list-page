import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '@/components/Logo';
import LanguageSystem from '@/lang';

const Header: React.FC = () => {
    const styles = {
        toolbar: {
            justifyContent: 'space-between',
        },
    };

    return (
        <AppBar
            position="sticky"
            aria-label={LanguageSystem.getTranslation('header')}
            role="banner"
        >
            <Toolbar style={styles.toolbar}>
                <Logo isSpinning={false} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
