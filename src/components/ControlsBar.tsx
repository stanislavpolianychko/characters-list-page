import React from 'react';
import { Button } from '@mui/material';
import SearchInput from '@/components/SearchInput';
import LanguageSystem from '@/lang';
import { Box, color } from '@mui/system';

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
    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5em',
                borderBottom: '1px solid black',
                boxShadow: '0 2px 3px 1px rgba(0, 0, 0, .3)',
            }}
        >
            <SearchInput
                value={search}
                onChange={(event) =>
                    handleSearchChange(
                        event as React.ChangeEvent<
                            HTMLInputElement | HTMLTextAreaElement
                        >,
                    )
                }
            />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="45%"
                height="100%"
            >
                <Button
                    onClick={onPreviousPage}
                    disabled={!previousPageExists}
                    variant="outlined"
                    sx={{ color: 'black', borderColor: 'black' }}
                >
                    {LanguageSystem.getTranslation('previous')}
                </Button>
                <Button
                    onClick={onNextPage}
                    disabled={!nextPageExists}
                    variant="outlined"
                    sx={{ color: 'black', borderColor: 'black' }}
                >
                    {LanguageSystem.getTranslation('next')}
                </Button>
            </Box>
        </Box>
    );
};

export default ControlsBar;
