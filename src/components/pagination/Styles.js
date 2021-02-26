import styled from 'styled-components';

export const StyledPagination = styled.div`
  & > div:first-child {
    display: none;
  }

  & > div:last-child {
    display: grid;
  }

  @media (max-width: 768px) {
    & > div:first-child {
      display: flex;
    }

    & > div:last-child {
      display: none;
    }
  }
`;

export const MobilePagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    border: none;
    font-size: 32px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 5px;

    span {
      font-size: 16px;
      margin: 0;
    }

    span:first-child {
      font-weight: 800;
    }
  }
`;

export const DesktopPagination = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: flex-end;
  align-items: center;
  grid-column-gap: 24px;

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