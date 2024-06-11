import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    borderTop: '1px solid black',
                    boxShadow: '0 -2px 3px 1px rgba(0, 0, 0, .3)',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginLeft: '1rem',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    flexGrow: 1,
                    backgroundColor: 'white',
                    padding: '15px',
                    maxHeight: '100px',
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
                    borderBottom: '1px solid black',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'black',
                    borderColor: 'black',
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                InputLabelProps: {
                    shrink: true,
                },
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
                    borderRadius: '4px',
                    border: '1px solid black',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid black',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.50)',
                    '&:hover': {
                        transform: 'translateY(-10px)',
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#FFDFFB',
        },
    },
});

export default theme;
