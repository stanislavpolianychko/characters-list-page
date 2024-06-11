import React from 'react';
import { Container, Toolbar, Typography } from '@mui/material';
import LanguageSystem from '@/lang';

const Footer: React.FC = () => {
    return (
        <Container maxWidth={false} component="footer" role="contentinfo">
            <Toolbar>
                <Typography
                    component="footer"
                    role="contentinfo"
                    variant="body2"
                    color="black"
                >
                    {LanguageSystem.getTranslation('footerLabel')}
                </Typography>
            </Toolbar>
        </Container>
    );
};

export default Footer;
