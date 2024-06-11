import { Box, keyframes, styled } from '@mui/system';

const GradientBox = styled(Box)(({ theme }) => {
    const gradientAnimation = keyframes`
        0% {background-position: 100% 0;}
        50% {background-position: 0 100%;}
        100% {background-position: 100% 0;}
    `;

    return {
        height: '',
        background: `linear-gradient(270deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main})`,
        animation: `${gradientAnimation} 20s ease infinite`,
    };
});

export default GradientBox;
