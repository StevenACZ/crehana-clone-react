import styled from 'styled-components';

export const StyledCoursesListItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 160px;
  background-color: #e8eaf0;
  position: relative;

  & > span {
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: #8d8d9d;
    color: white;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: #f6f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const BodyTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #181b32;
    margin: 0;
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #181b32;
    margin: 0;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #8d8d9d;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;

  span {

  }
`;

export const BodyBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MainPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;

  & > span {
    font-size: 18px;
    line-height: 32px;
  }
  
  & > p {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }
`;

export const SecondaryPrice = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #8d8d9d;
  text-decoration: line-through;
`;

