import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

// Desktop
export const DesktopCheckout = styled.main`
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1152px) {
    padding: 0 20px;
  }
`;

export const DeskTopLeft = styled.div`
  padding: 30px 0 45px;

  & > div:first-child {
    max-width: 490px;
    margin-bottom: 38px;
  }

  & > div:last-child {
    max-width: 464px;
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
  max-width: 500px;
  background-color: ${ color.colorGreyLight2 };
  padding: 43px 72px;

  & > div:last-child {
    margin-top: 60px;
  }
`;

// Mobile
export const MobileCheckout = styled.main`
  padding: 0 20px;

  & > div:last-child {
    margin-top: 24px;
    padding-bottom: 50px;
  }
`;

export const Summary = styled.div`
  margin-bottom: 24px;

  & > h3 {
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    color: ${ color.colorPrimary };
    margin-top: 20px;
    margin-bottom: 16px;
  }

  & > div {
    background-color: ${ color.colorGreyLight2 };
    border-radius: 2px;
    padding: 16px;
  }
`;