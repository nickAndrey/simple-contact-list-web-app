import Button from '@mui/material/Button/Button';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';

import FormControlsPanel from './FormControlsPanel';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ButtonStyled = styled(Button)`
  width: max-content;
  text-transform: uppercase;
  ${({ theme: { font } }) => font['14-24-500']};
  color: ${({ theme: { color } }) => color.blue6};
`;

const SubmitButtonStyled = styled.button`
  width: 100%;
  padding: 12px 0;
  ${({ theme: { font } }) => font['14-24-500']};
  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.blue1};
  text-transform: uppercase;
  border-radius: 35px;
  border: 0;
  cursor: pointer;
`;

type Referral = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  contactLanguage: string;
  phoneNumber: string;
  email: string;
  address: string;
  notes: string;
};

const defaultReferral: Referral = {
  id: new Date().getTime(),
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  contactLanguage: '',
  phoneNumber: '',
  email: '',
  address: '',
  notes: '',
};

type ReferralFormProps = {};

const ReferralForm: FC<ReferralFormProps> = () => {
  const [referrals, setReferrals] = useState<Referral[]>([defaultReferral]);
  const [currentReferralId, setCurrentReferralId] = useState(defaultReferral.id);

  const onReferralChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setReferrals(
      referrals.map((referral) =>
        currentReferralId === referral.id && name in referral
          ? { ...referral, [name]: value }
          : referral,
      ),
    );
  };

  const onSetNewAddress = (newAddress: string, referralId: number) => {
    setReferrals(
      referrals.map((referral) =>
        referralId === referral.id ? { ...referral, address: newAddress } : referral,
      ),
    );
  };

  const addNewReferral = () => {
    setReferrals([...referrals, { ...defaultReferral, id: new Date().getTime() }]);
  };

  const onDeleteReferral = (referralId: number) => {
    setReferrals(referrals.filter((referral) => referral.id !== referralId));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add form validation

    // make a request here.

    console.log(referrals);
  };

  return (
    <FormStyled onSubmit={onSubmit} noValidate>
      {referrals.map((referral, index) => (
        <FormControlsPanel
          key={referral.id}
          referralNumber={index + 1}
          firstName={referral.firstName}
          onFirstNameChange={onReferralChange}
          lastName={referral.lastName}
          onLastNameChange={onReferralChange}
          dateOfBirth={referral.dateOfBirth}
          onDateOfBirthChange={onReferralChange}
          contactLanguage={referral.contactLanguage}
          onContactLanguageChange={onReferralChange}
          phoneNumber={referral.phoneNumber}
          onPhoneNumberChange={onReferralChange}
          email={referral.email}
          onEmailChange={onReferralChange}
          address={referral.address}
          notes={referral.notes}
          onNotesChange={onReferralChange}
          onAddressChange={(newAddress) => onSetNewAddress(newAddress, referral.id)}
          onSetCurrentId={() => setCurrentReferralId(referral.id)}
          onDeleteItem={() => onDeleteReferral(referral.id)}
          hasActions={referrals.length > 1}
          defaultExpanded={referrals.length === 1}
        />
      ))}

      <ButtonStyled onClick={addNewReferral} disabled={referrals.length === 5}>
        + add another referral
      </ButtonStyled>

      <SubmitButtonStyled>SEND REFERRALS</SubmitButtonStyled>
    </FormStyled>
  );
};

export default ReferralForm;