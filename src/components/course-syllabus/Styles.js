import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCourseSyllabus = styled.section`
  background-color: ${ color.colorGreyLight2 };
  width: 100%;

  margin-top: -40px;
  
  @media (max-width: 1152px) {
    padding: 0 20px;
  }
  
  @media (max-width: 768px) {
    margin-top: 0px;
    padding: 0px;
  }
`;

export const StyledCourseSyllabusContainer = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 40px 0;

  & > h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 24px;
    color: ${ color.colorBlack };
  }

  & > ol:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;

    & > h3 {
      font-size: 24px;
      color: ${ color.colorBlack };
    }
  }
`;

export const Module = styled.ol`
  margin-bottom: 28px;

  & > p {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${ color.colorPrimary };
    margin-bottom: 16px;
  }

  & > li {
    max-width: 636px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${ color.colorPrimary };

    & > span {
      color: ${ color.colorGreyLight1 };
    }
  }

  @media (max-width: 768px) {
    & > li {
      & > span {
        display: none;
      }
    }
  }
`;