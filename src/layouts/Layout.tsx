import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { layoutWidth } }) => layoutWidth};
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme: { color } }) => color.blue2};
  padding-bottom: 100px;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
