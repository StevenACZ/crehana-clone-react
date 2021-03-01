import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledComment = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & > div:first-child {
    width: 40px;
    height: 40px;
    background-color: ${ color.colorGreyLight1 };
    border-radius: 10px;
    margin-right: 16px;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;

    & > span {
      font-size: 16px;
      font-weight: 700;
      color: ${ color.colorPrimary };
    }

    & > div {
      color: ${ color.colorGreyLight3 };
    }
  }
`;

export const Body = styled.div`
  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${ color.colorPrimary };
  }
`;