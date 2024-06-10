import { Button, keyframes } from '@mui/material';
import { styled } from '@mui/system';

const gradientAnimation = keyframes`
    0% {background-position: 100% 0;}
    50% {background-position: 0 100%;}
    100% {background-position: 100% 0;}
`;

const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(270deg, white, #FFC9F8)',
    backgroundSize: '200% 200%',
    border: '1px solid black',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    animation: `${gradientAnimation} 3s ease infinite`,
}));

export default GradientButton;
