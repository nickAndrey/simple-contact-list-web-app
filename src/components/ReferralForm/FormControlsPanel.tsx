import { AccountCircle } from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/Cake';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TranslateIcon from '@mui/icons-material/Translate';
import Accordion from '@mui/material/Accordion/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import IconButton from '@mui/material/IconButton';
import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

import MaterialAutocomplete from './AddressAutocomplete';
import MaterialInput from './MaterialInput';

const AccordionStyled = styled(Accordion)`
  width: 100%;
`;

const SummaryContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ButtonContainerStyled = styled.div`
  position: absolute;
  right: 40px;

  button {
    color: ${({ theme: { color } }) => color.blue1};
  }
`;

const DetailsContainerStyled = styled.div`
  padding: 32px 56px 24px 56px;
`;

const RowStyled = styled.div`
  display: flex;
  gap: 32px;

  &:not(:last-of-type) {
    margin-bottom: 38px;
  }
`;

type ReferralNumberStyledProps = {
  referralNumber: number;
};

const ReferralNumberStyled = styled.div<ReferralNumberStyledProps>`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme: { font } }) => font['26-16-500']};
  color: ${({ theme: { color } }) => color.white};

  background-color: ${({ theme: { color }, referralNumber }) => {
    switch (referralNumber) {
      case 1:
        return color.green;
      case 2:
        return color.blue5;
      case 3:
        return color.blue3;
      case 4:
        return color.blue4;
      case 5:
        return color.blue1;
      default:
        return color.blue1;
    }
  }};
`;

type TitleStyledProps = {
  isNewReferral: boolean;
};

const TitleStyled = styled.p<TitleStyledProps>`
  ${({ theme: { font } }) => font['20-24-500']};
  color: ${({ theme: { color }, isNewReferral }) => (isNewReferral ? color.blue3 : color.blue6)};
`;

type FormControlsPanelProps = {
  referralNumber: number;
  hasActions: boolean;
  defaultExpanded: boolean;
  firstName: string;
  onFirstNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  lastName: string;
  onLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  dateOfBirth: string;
  onDateOfBirthChange: (e: ChangeEvent<HTMLInputElement>) => void;
  contactLanguage: string;
  onContactLanguageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  onPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  onAddressChange: (newAddress: string) => void;
  notes: string;
  onNotesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetCurrentId: () => void;
  onDeleteItem: () => void;
};

const FormControlsPanel: FC<FormControlsPanelProps> = ({
  referralNumber,
  hasActions,
  defaultExpanded,
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  dateOfBirth,
  onDateOfBirthChange,
  contactLanguage,
  onContactLanguageChange,
  phoneNumber,
  onPhoneNumberChange,
  email,
  onEmailChange,
  address,
  onAddressChange,
  notes,
  onNotesChange,
  onSetCurrentId,
  onDeleteItem,
}) => {
  const titleContent = firstName || lastName ? `${firstName} ${lastName}` : 'New Referral';

  return (
    <AccordionStyled onFocus={onSetCurrentId} defaultExpanded={defaultExpanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SummaryContentStyled>
          <ReferralNumberStyled referralNumber={referralNumber}>
            {referralNumber}
          </ReferralNumberStyled>

          <TitleStyled isNewReferral={!firstName && !lastName}>{titleContent}</TitleStyled>

          {hasActions && (
            <ButtonContainerStyled>
              <IconButton onClick={onDeleteItem}>
                <DeleteIcon />
              </IconButton>
            </ButtonContainerStyled>
          )}
        </SummaryContentStyled>
      </AccordionSummary>
      <AccordionDetails>
        <DetailsContainerStyled>
          <RowStyled>
            <MaterialInput
              onChange={onFirstNameChange}
              value={firstName}
              name="firstName"
              placeholder="First Name"
              icon={<AccountCircle />}
              required
            />
            <MaterialInput
              onChange={onLastNameChange}
              value={lastName}
              name="lastName"
              placeholder="Last Name"
              icon={<AccountCircle />}
              required
            />
          </RowStyled>

          <RowStyled>
            <MaterialInput
              onChange={onDateOfBirthChange}
              value={dateOfBirth}
              name="dateOfBirth"
              placeholder="Date of Birth"
              icon={<CakeIcon />}
              required
            />
            <MaterialInput
              onChange={onContactLanguageChange}
              value={contactLanguage}
              name="contactLanguage"
              placeholder="Contact Language"
              icon={<TranslateIcon />}
              required
            />
          </RowStyled>

          <RowStyled>
            <MaterialInput
              onChange={onPhoneNumberChange}
              value={phoneNumber}
              name="phoneNumber"
              placeholder="Phone"
              icon={<LocalPhoneIcon />}
              required
            />
            <MaterialInput
              onChange={onEmailChange}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              icon={<EmailIcon />}
              required
            />
          </RowStyled>

          <RowStyled>
            <MaterialAutocomplete
              onAddressChange={onAddressChange}
              value={address}
              name="address"
              placeholder="Address"
              required
            />
          </RowStyled>

          <RowStyled>
            <MaterialInput
              onChange={onNotesChange}
              value={notes}
              name="notes"
              placeholder="Notes/Reason"
            />
          </RowStyled>
        </DetailsContainerStyled>
      </AccordionDetails>
    </AccordionStyled>
  );
};

export default FormControlsPanel;
