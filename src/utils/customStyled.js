import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyStyledTextField = styled(TextField)({
    '& .MuiInputBase-input': {
    color: '#fff',
    padding: '13.5px 14px',
    background: 'rgb(158 143 143 / 47%)',
    borderRadius: '4px',
    '&:focus': {
      background:"#333",
    },
    },
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
    '& .MuiFormHelperText-root': {
      color: 'red',
    },
});