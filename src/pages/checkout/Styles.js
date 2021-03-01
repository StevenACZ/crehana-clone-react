import styled from 'styled-components';

// Desktop
export const DesktopCheckout = styled.main`
  display: grid;
  grid-template-columns: 1fr 608px;
`;

export const DeskTopLeft = styled.div`
  padding: 45px 80px;

  & > div:first-child {
    width: 490px;
    margin-bottom: 38px;
  }

  & > div:last-child {
    width: 564px;
  }
`;

export const DeskTopRight = styled.div`
`;

// Mobile
export const MobileCheckout = styled.main`

`;