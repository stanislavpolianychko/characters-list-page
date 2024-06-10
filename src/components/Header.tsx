import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import Logo from '@/components/logo/Logo';
import GradientBox from '@/components/GradientSection';

const Header: React.FC = () => {
    return (
        <GradientBox>
            <AppBar
                position="sticky"
                style={{
                    flexGrow: 1,
                    backgroundColor: 'white',
                    padding: '15px',
                    maxHeight: '100px',
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
                    borderBottom: '1px solid black',
                }}
                elevation={0}
            >
                <CssBaseline />
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Logo isSpinning={false} />
                </Toolbar>
            </AppBar>
        </GradientBox>
    );
};

export default Header;
