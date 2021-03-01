import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-child {
    width: 100%;
    height: 4px;
    background-color: ${ color.colorGreyLight2 };
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 32px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${ color.colorPrimary };
      width: ${({ percent }) => percent && `${percent}%`};
      height: 100%;
    }
  }

  & > div:last-child {
    color: ${ color.colorGreyLight3 };
    display: flex;
    align-items: center;

    & > span:last-child {
      margin-left: 8px;
    }
  }
`;