import React from 'react';
import { TextField } from '@mui/material';

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <TextField
            type="text"
            value={value}
            onChange={(e) => onChange(e)}
            label={"LanguageSystem.getTranslation('password')"}
            variant="outlined"
            sx={{ marginBottom: '1rem', width: '70%' }}
        />
    );
};

export default SearchInput;
