import { Button, TextField } from '@mui/material';
import React from 'react';
import * as S from './styles';

interface SBProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SBProps> = ({ text, setText }) => {
    return (
        <S.Container>
            <TextField
                label="Pesquisar"
                value={text}
                onChange={(event) => setText(event.target.value)}
                fullWidth
            />
            <Button sx={{ fontSize: 16 }} onClick={() => setText('')}>
                Limpar
            </Button>
        </S.Container>
    );
};

export default SearchBar;
