import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledPaymentMethod = styled.div`
  & > h3 {
    font-size: 40px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 16px;
  }

  & > .ant-collapse {
    & > .ant-collapse-item {
      background-color: ${ color.colorGreyLight2 };
      & > .ant-collapse-content {
        margin-top: 28px;
        background-color: transparent;
      }
    }
  }

  & > button {
    max-width: 320px;
    min-width: 320px;
  }

  @media (max-width: 768px) {
    & > h3 {
      font-size: 24px;
      font-weight: 800;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-row-gap: 24px;
  grid-column-gap: 24px;

  & > div {
    & > p {
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      color: ${ color.colorPrimary };
      margin-bottom: 8px;
    }

    & > input {
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      border: 0.5px solid ${ color.colorGreyLight5 };
    }
  }

  & > div:nth-child(1) {
    grid-column: 1 / 3; 
  }

  & > div:nth-child(2) {
    grid-column: 1 / 3; 
  }

  & > div:nth-child(3) {
    grid-column: 1 / 2; 
  }

  & > div:nth-child(4) {
    grid-column: 2 / 3; 
  }

  @media (max-width: 768px) {
    grid-row-gap: 16px;
    grid-column-gap: 0px;

    & > div:nth-child(3) {
      grid-column: 1 / 3; 
    }

    & > div:nth-child(4) {
      grid-column: 1 / 3; 
    }
  }
`;

export const Terms = styled.div`
  display: flex;
  align-items: center;
  margin: 26px 0 18px 0;

  & > div {
    width: 20px;
    height: 20px;
    background-color: ${ color.colorGreyLight3 };
    border-radius: 5px;
    margin-right: 10px;
  }

  & > p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${ color.colorGreyLight3 };
    margin: 0px;
  }

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;