import React from 'react';
import { Container, Toolbar, Typography } from '@mui/material';
import LanguageSystem from '@/lang';

const Footer: React.FC = () => {
    return (
        <Container maxWidth="lg" component="footer">
            <Toolbar>
                <Typography variant="body2" color="black">
                    {LanguageSystem.getTranslation('footerLabel')}
                </Typography>
            </Toolbar>
        </Container>
    );
};

export default Footer;
