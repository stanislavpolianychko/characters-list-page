import React from 'react';
import { TextField } from '@mui/material';
import LanguageSystem from '@/lang';

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
            label={LanguageSystem.getTranslation('search')}
            variant="outlined"
        />
    );
};

export default SearchInput;
