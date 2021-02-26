import styled from 'styled-components';

export const StyledCoursesFilters = styled.div`
  display: grid;
  align-items: flex-end;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    height: 52px;
    grid-template-columns: 1fr;

    & > div {
      display: none;
    }
  }

  & > div:last-child {
    background-color: red !important;
  }
`;

export const ButtonsContainer = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;

  & > button:first-child {
    width: 100%;
    display: block;
  }

  & > button:last-child {
    display: none;
  }

  @media (max-width: 768px) {
    & > button:first-child {
      display: none;
    }

    & > button:last-child {
      width: 100%;
      height: 100%;
      display: block;

      span {
        font-size: 18px;
      }
    }
  }
`;

export const StyledCoursesFiltersItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 12px;
    font-weight: 800;
    line-height: 20px;
    text-transform: uppercase;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;