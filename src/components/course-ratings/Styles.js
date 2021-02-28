import styled from 'styled-components';

export const StyledCourseRatings = styled.section`
  max-width: 1152px;
  margin: 48px auto 0 auto;

  & > h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    & > h3 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 24px;
    }
  }
`;

export const Ratings = styled.div`
  max-width: 480px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto; 
    grid-row-gap: 24px;
  }
`;

export const TotalAverage = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 16px;

  & > span {
    font-size: 52px;
    font-weight: 800;
    line-height: 60px;
  }

  & > div {
    color: #8d8d9d;
    font-size: 15px;
    
    & > span {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    align-items: center;
  }
`;

export const General = styled.div`
  width: 100%;
`;

export const BestComment = styled.div`
  max-width: 550px;
  margin-top: 33px;
`;