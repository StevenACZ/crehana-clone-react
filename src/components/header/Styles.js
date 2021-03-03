import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledHeader = styled.header`
  max-width: 1152px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > span {
    display: none;
  }

  @media (max-width: 1152px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
    height: 56px;

    & > button {
      display: none;
    }

    & > span {
      font-size: 24px;
      display: block;
    }
  }
`;

export const Logo = styled.img`
  width: 163px;
  height: 24px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 15px;
  
  & > button {
    width: 100%;
  }
`;

export const StyledHeaderCheckout = styled.header`
  /* max-width: 1152px; */
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${ color.colorPrimary };
`;