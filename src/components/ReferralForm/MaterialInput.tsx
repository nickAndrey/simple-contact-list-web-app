import FormControl from '@mui/material/FormControl/FormControl';
import Input from '@mui/material/Input/Input';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { ChangeEvent, FC, ReactNode } from 'react';
import styled from 'styled-components';

const IconContainerStyled = styled.div`
  color: ${({ theme: { color } }) => color.blue7};

  svg {
    width: 16px;
  }
`;

const InputStyled = styled(Input)`
  input {
    ${({ theme: { font } }) => font['16-16-400']};
    color: ${({ theme: { color } }) => color.blue6};

    ::placeholder {
      opacity: 0.8;
      color: ${({ theme: { color } }) => color.blue3};
    }
  }
`;

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  icon?: ReactNode;
  type?: 'text' | 'email';
  required?: boolean;
};

const MaterialInput: FC<InputProps> = ({
  onChange,
  value,
  name,
  placeholder,
  icon,
  type = 'text',
  required = false,
}) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputStyled
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        size="medium"
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        required={required}
        startAdornment={
          icon && (
            <InputAdornment position="start">
              <IconContainerStyled>{icon}</IconContainerStyled>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};

export default MaterialInput;
