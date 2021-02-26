import styled from 'styled-components';

export const CourseCatalog = styled.main`
  max-width: 1152px;
  height: 100%;
  margin: 18px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;
  padding: 0 0 40px 0;

  @media (max-width: 1152px) {
    padding: 0 20px 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 0 0 40px 0;
    margin: 0 auto;
    gap: 40px;
  }
`;

export const Banner = styled.section`
  width: 100%;
  height: 304px;
  background-color: #f6f7f9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    line-height: 44px;
    margin: 0;
  }

  button {
    padding: 14px 40px;

    span {
      font-size: 18px;
    }
  }
`;

export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h4 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 20px;
  }
`;

export const CategoriesList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  overflow-x: scroll;
`;

export const CategoriesItem = styled.li`
  min-width: 120px;
  height: 112px;
  background-color: #f6f7f9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const Courses = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  h4 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 24px;
  }
`;