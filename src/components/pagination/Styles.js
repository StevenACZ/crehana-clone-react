import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;

  & > button {
    padding: 14px;
    border-color: #e8eaf0;
  }

  & > span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #8d8d9d;
  }
`;