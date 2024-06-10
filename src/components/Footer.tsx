import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30px',
                backgroundColor: 'white',
                borderTop: '1px solid black',
                boxShadow: '0 -2px 3px 1px rgba(0, 0, 0, .3)',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <Typography
                variant="body2"
                color="black"
                sx={{ marginLeft: '1rem' }}
            >
                {"LanguageSystem.getTranslation('poweredBy')"}
            </Typography>
        </Box>
    );
};

export default Footer;
