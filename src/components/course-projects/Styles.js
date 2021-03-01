import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCourseProjects = styled.section`
  max-width: 1152px;
  margin: 0 auto;

  & > h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 25px;
    color: ${ color.colorBlack };
  }

  @media (max-width: 1152px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 20px;

    & > h3 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 24px;
    }
  }
`;

export const GridCoursesImages = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 322px repeat(2, 150px);
  grid-template-rows: 150px 150px;
  gap: 21px;

  & > li {
    background-color: ${ color.colorGreyLight3 };
    border-radius: 10px;
    position: relative;

    & > div {
      position: absolute;
      bottom: 16px;
      left: 16px;
      display: flex;
      align-items: center;

      & > div {
        background-color: ${ color.colorPrimary };
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }

      & > span {
        color: ${ color.colorWhite };
        margin-left: 9px;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
      }
    }
  }

  & > li:first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }

  & > li:last-child {
    background-color: ${ color.colorPrimary };

    & > span {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 52px;
      font-weight: 800;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 160px);
    grid-template-rows: 160px;
    gap: 8px;
    overflow-x: scroll;

    & > li:first-child {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }
  }
`;