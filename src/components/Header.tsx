import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Logo isSpinning={false} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
