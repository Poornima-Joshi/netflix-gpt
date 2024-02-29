import { Accordion, AccordionSummary, TextField } from '@mui/material';
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

export const MyStyledAccordion = styled(Accordion)`
  background-color: #2d2d2d;
  color: white;
  margin: 0.3rem 0;

  &:first-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &:last-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.Mui-expanded {
    margin: 0.3rem 0;
  }
`;

export const MyStyledAccordionSummary = styled(AccordionSummary)`
  .css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: white;
    transform: rotate(0deg);

    &.Mui-expanded {
      transform: rotate(45deg);
    }
  }

  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
    padding: 9px 23px;
  }

  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    border-bottom: 1px solid black;
  }

  .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
    margin: 12px 0;
  }
`;