import styled from 'styled-components';

export const StyledCourseQuestions = styled.section`
  max-width: 1152px;
  margin: 48px auto 0 auto;

  & > h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 25px;
  }

  @media (max-width: 1152px) {
    padding: 0 20px;
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

export const StyledCourseQuestionsContainer = styled.div`
  max-width: 662px;
`;