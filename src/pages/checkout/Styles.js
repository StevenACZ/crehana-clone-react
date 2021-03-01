import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

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

export const LegalNotes = styled.div`
  & > span {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: ${ color.colorPrimary };
  }

  & > p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 8px 0 0 0;
  }
`;

export const DeskTopRight = styled.div`
  background-color: ${ color.colorGreyLight2 };
  padding: 43px 72px;

  & > div:last-child {
    margin-top: 60px;
  }
`;

// Mobile
export const MobileCheckout = styled.main`

`;