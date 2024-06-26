import React from 'react';
import { Button, useMediaQuery, Theme } from '@mui/material';
import SearchInput from '@/components/SearchInput';
import LanguageSystem from '@/lang';
import { Box } from '@mui/system';

interface ControlsBarProps {
    nextPageExists: boolean;
    previousPageExists: boolean;
    onNextPage: () => void;
    onPreviousPage: () => void;
    search: string;
    handleSearchChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

const ControlsBar: React.FC<ControlsBarProps> = ({
    nextPageExists,
    previousPageExists,
    onNextPage,
    onPreviousPage,
    search,
    handleSearchChange,
}) => {
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );

    const styles = {
        box: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '10px' : '0',
            justifyContent: 'space-around',
            padding: '5px',
            borderBottom: '1px solid black',
            boxShadow: '0 2px 3px 1px rgba(0, 0, 0, .3)',
            height: isMobile ? '120px' : '80px',
        },
        innerBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px',
            alignItems: 'center',
            height: '100%',
        },
    };

    return (
        <Box sx={styles.box}>
            <SearchInput
                value={search}
                onChange={(event) =>
                    handleSearchChange(
                        event as React.ChangeEvent<
                            HTMLInputElement | HTMLTextAreaElement
                        >,
                    )
                }
                aria-label={LanguageSystem.getTranslation('search')}
            />

            <Box sx={styles.innerBox}>
                <Button
                    onClick={onPreviousPage}
                    disabled={!previousPageExists}
                    variant="outlined"
                    aria-label={LanguageSystem.getTranslation('previousPage')}
                >
                    {LanguageSystem.getTranslation('previous')}
                </Button>
                <Button
                    onClick={onNextPage}
                    disabled={!nextPageExists}
                    variant="outlined"
                    aria-label={LanguageSystem.getTranslation('nextPage')}
                >
                    {LanguageSystem.getTranslation('next')}
                </Button>
            </Box>
        </Box>
    );
};

export default ControlsBar;
