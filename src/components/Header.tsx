import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '@/components/Logo';
import LanguageSystem from '@/lang';

const Header: React.FC = () => {
    return (
        <AppBar
            position="sticky"
            aria-label={LanguageSystem.getTranslation('header')}
        >
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Logo isSpinning={false} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
