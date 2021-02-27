import styled from 'styled-components';

export const StyledCourseVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 900;
    font-size: 40px;
    cursor: pointer;
    
    span:last-child {
      font-size: 20px;
      line-height: 28px;
      margin-top: 16px;
    }
  }
`;