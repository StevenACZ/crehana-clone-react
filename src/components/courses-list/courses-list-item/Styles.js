import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCoursesListItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${ color.colorGreyLight1 };
  position: relative;
  cursor: pointer;

  & > span {
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: ${ color.colorGreyLight3 };
    color: white;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 12px;
  padding: 16px;
  background-color: ${ color.colorGreyLight2 };
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const BodyTop = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 8px;

  & > h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${ color.colorPrimary };
    margin: 0;
    cursor: pointer;
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${ color.colorPrimary };
    margin: 0;
  }
`;

export const BodyBottom = styled.div`
  display: grid;
  grid-row-gap: 12px;
`;
