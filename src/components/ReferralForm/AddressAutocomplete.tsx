import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextField from '@mui/material/TextField/TextField';
import { FC, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import styled from 'styled-components';

const TextFieldStyled = styled(TextField)`
  input {
    ${({ theme: { font } }) => font['16-16-400']};
    color: ${({ theme: { color } }) => color.blue6};

    ::placeholder {
      opacity: 0.8;
      color: ${({ theme: { color } }) => color.blue3};
    }
  }
`;

const IconContainerStyled = styled.div`
  color: ${({ theme: { color } }) => color.blue7};

  svg {
    width: 16px;
  }
`;

type MaterialAutocompleteProps = {
  onAddressChange: (newAddress: string) => void;
  value: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

const MaterialAutocomplete: FC<MaterialAutocompleteProps> = ({
  onAddressChange,
  name,
  value,
  placeholder,
  required,
}) => {
  const [inputHasFocus, setInputHasFocus] = useState(false);

  return (
    <PlacesAutocomplete value={value} onChange={onAddressChange}>
      {({ getInputProps, suggestions }) => (
        <Autocomplete
          options={suggestions.map((suggestion) => suggestion.description)}
          getOptionLabel={(option) => option}
          inputValue={value}
          onInputChange={(e, newAddress) => onAddressChange(newAddress)}
          renderInput={(params) => (
            <TextFieldStyled
              {...getInputProps(params)}
              variant="standard"
              placeholder={`${placeholder} ${required ? '*' : ''}`}
              required={required}
              name={name}
              onFocus={() => setInputHasFocus(true)}
              onBlur={() => setInputHasFocus(false)}
              InputProps={{
                ...params.InputProps,
                startAdornment: inputHasFocus && (
                  <InputAdornment position="start">
                    <IconContainerStyled>
                      <SearchIcon />
                    </IconContainerStyled>
                  </InputAdornment>
                ),
              }}
            />
          )}
          fullWidth
        />
      )}
    </PlacesAutocomplete>
  );
};

export default MaterialAutocomplete;
