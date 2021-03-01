import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledPurchaseSummary = styled.div`

`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 24px;

  & > div:first-child {
    width: 155px;
    height: 116px;
    border-radius: 10px;
    background-color: ${ color.colorGreyLight3 };
  }

  & > div:last-child {
    width: 304px;

    & > p {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: ${ color.colorPrimary };
      margin-bottom: 8px;
    }

    & > span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${ color.colorPrimary };
      margin-bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    align-items: center;
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }
`;

export const Body = styled.div`
  margin-top: 24px;

  & > div {
    margin-bottom: 8px;
  }

  & > div:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:first-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${ color.colorPrimary };
  }

  & > span:last-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${ color.colorGreyLight3 };
  }

  & > p {
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    color: ${ color.colorPrimary };
    margin: 0;
  }
`;