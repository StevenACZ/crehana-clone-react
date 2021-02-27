import styled from 'styled-components';

export const DesktopCourseHero = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const MobileCourseHero = styled.section`
  width: 100%;
  height: 100%;
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
    margin: 0;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
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
    background-color: #e8eaf0;
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