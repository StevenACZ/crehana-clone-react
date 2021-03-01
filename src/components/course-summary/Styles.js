import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCourseSummary = styled.section`
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 0;

  & > h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 24px;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
    max-width: 662px;
    color: ${ color.colorPrimary };
  }
  
  @media (max-width: 1152px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    & > h3 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;