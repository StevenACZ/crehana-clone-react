import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCourseGeneralActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: ${ color.colorGreyLight3 };
  font-weight: 700;
  cursor: pointer;

  & > span:last-child {
    margin-top: 8px;
  }
`;