import { FC } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0 60px;
  background-color: ${({ theme: { color } }) => color.white};
`;

const TitleStyled = styled.p`
  ${({ theme: { font } }) => font['30-40-500']};
  color: ${({ theme: { color } }) => color.blue6};
  max-width: 311px;
  text-align: center;
`;

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <HeaderStyled>
      <TitleStyled>Agent Referral Form Agents Only</TitleStyled>
    </HeaderStyled>
  );
};

export default Header;
