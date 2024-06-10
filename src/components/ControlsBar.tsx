import React from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

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
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5em',
            }}
        >
            <TextField
                label="Search"
                variant="outlined"
                size="medium"
                value={search}
                onChange={(event) => handleSearchChange(event)}
            />

            <div>
                <Button onClick={onPreviousPage} disabled={!previousPageExists}>
                    Previous
                </Button>
                <Button onClick={onNextPage} disabled={!nextPageExists}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default ControlsBar;
