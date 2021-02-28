import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-child {
    width: 100%;
    height: 4px;
    background-color: #f6f7f9;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 32px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      width: ${({ percent }) => percent && `${percent}%`};
      height: 100%;
    }
  }

  & > div:last-child {
    color: #8d8d9d;
    display: flex;
    align-items: center;

    & > span:last-child {
      margin-left: 8px;
    }
  }
`;