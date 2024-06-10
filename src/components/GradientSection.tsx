import { Box, keyframes, styled } from '@mui/system';

const gradientAnimation = keyframes`
    0% {background-position: 100% 0;}
    50% {background-position: 0 100%;}
    100% {background-position: 100% 0;}
`;

const GradientBox = styled(Box)(({ theme }) => ({
    height: '100%',
    background: 'linear-gradient(270deg, white, #FFDFFB 30%, white)',
    animation: `${gradientAnimation} 20s ease infinite`,
}));

export default GradientBox;
