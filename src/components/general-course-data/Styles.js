import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledGeneralCourseData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-column-gap: 10px;
`;

export const IconContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-column-gap: 4px;
  color: ${ color.colorGreyLight3 };
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;