import { FC } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ReferralForm from './components/ReferralForm/ReferralForm';
import Layout from './layouts/Layout';

const MainStyled = styled.div`
  max-width: ${({ theme: { mainContainerWidth } }) => mainContainerWidth};
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  padding-top: 34px;
`;

const TitleStyled = styled.p`
  ${({ theme: { font } }) => font['24-32-500']};
  color: ${({ theme: { color } }) => color.blue6};
  margin-bottom: 8px;
  text-align: center;
`;

const SubtitleStyled = styled.p`
  ${({ theme: { font } }) => font['20-32-500']};
  color: ${({ theme: { color } }) => color.blue6};
  margin-bottom: 28px;
  text-align: center;
`;

const App: FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <MainStyled>
          <TitleStyled>Agent Referral List</TitleStyled>
          <SubtitleStyled>You can add up to five referrals at a time</SubtitleStyled>
          <ReferralForm />
        </MainStyled>
      </Layout>
    </>
  );
};

export default App;
