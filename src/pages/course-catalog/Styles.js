import styled from 'styled-components';

export const CourseCatalog = styled.main`
  max-width: 1152px;
  height: 100%;
  border: 1px solid green;
  margin: 18px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;
`;

export const Banner = styled.section`
  width: 100%;
  height: 304px;
  border: 1px solid green;
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
  border: 1px solid red;

  h4 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
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
  border: 1px solid blue;

  h4 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
  }
`;