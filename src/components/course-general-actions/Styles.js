import styled from 'styled-components';

export const StyledCourseGeneralActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #8d8d9d;
  font-weight: 700;

  & > span:last-child {
    margin-top: 8px;
  }
`;