import { ReactNode } from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiProps {
  children: ReactNode;
}

const StyledUi = styled.div`
  color: #333;
`;

export function Ui({ children }: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
      {children}
    </StyledUi>
  );
}

export default Ui;
