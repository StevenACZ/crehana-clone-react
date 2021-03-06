import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

// Desktop
export const DesktopCourseHero = styled.section`
  height: 100%;
  max-width: 1152px;
  margin: 41px auto 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1152px) {
    padding: 0 20px 25px;
  }
`;

export const HeroInformation = styled.div`
  min-width: 0px;
  max-width: 560px;
  height: 100%;

  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 40px;
    font-weight: 900;
    line-height: 44px;
    color: ${ color.colorPrimary };
    margin: 0;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${ color.colorPrimary };
    margin: 24px 0;
  }

  & > div:nth-child(3) {
    width: 318px;
  }

  & > div:nth-child(4) {
    margin: 40px 0;
  }

  & > div:nth-child(5) {
    width: 368px;
  }

  @media (max-width: 1152px) {
    max-width: 430px;
  }
`;

export const HeroCard = styled.div`
  width: 464px;
  height: auto;

  /* CourseVideo */
  & > div:first-child {
    height: 274px;
  }

  /* div */
  & > div:last-child {
    padding: 30px 24px 24px 24px;
    background-color: ${ color.colorGreyLight1 };
    border-radius: 0 0 10px 10px;

    & > nav {
      margin-top: 15px;
      display: flex;
      flex-direction: column;

      & > button:first-child {
        margin-bottom: 10px;
      }
    }
  }

`;

// Mobile
export const MobileCourseHero = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 320px;
  grid-auto-rows: auto;

  /* TeacherGeneralData */
  & > div:nth-child(3) {
    padding: 0 20px;
    margin: 42px 0;
  }
  
  /* CourseGeneralActions */
  & > div:nth-child(5) {
    padding: 0 20px;
    margin: 40px 0;
  }
`;

export const MobileHeroInformation = styled.div`
  padding: 26px 20px 0;

  & > h2 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin: 0 0 16px 0;
  }
  
  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 16px 0 16px 0;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${ color.colorGreyLight1 };
  padding: 24px 20px;

  & > button:first-child {
    margin-bottom: 24px;
  }
`;