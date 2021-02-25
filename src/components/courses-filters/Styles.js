import styled from 'styled-components';

export const StyledCoursesFilters = styled.div`
  display: grid;
  align-items: flex-end;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
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