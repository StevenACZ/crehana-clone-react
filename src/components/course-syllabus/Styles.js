import styled from 'styled-components';

export const StyledCourseSyllabus = styled.section`
  background-color: #f6f7f9;
  width: 100%;
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
  }

  & > ol:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;

    & > h3 {
      font-size: 24px;
    }
  }
`;

export const Module = styled.ol`
  margin-bottom: 28px;

  & > p {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 16px;
  }

  & > li {
    max-width: 636px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
      color: #e8eaf0;
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

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 800;

  cursor: pointer;

  & > span:first-child {
    margin-right: 8px;
  }
`;