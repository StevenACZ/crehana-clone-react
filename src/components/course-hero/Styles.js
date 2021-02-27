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
  width: 100%;
  height: 100%;
`;