import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledTeacherGeneralData = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    background-color: ${ color.colorGreyLight1 };
    width: 64px;
    height: 64px;
    border-radius: 10px;
    margin-right: 16px;
    cursor: pointer;
  }

  div:last-child {
    color: ${ color.colorPrimary };
    
    & > p {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin: 0 0 4px 0;
    }

    & > span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;