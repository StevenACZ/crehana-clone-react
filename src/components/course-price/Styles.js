import styled from 'styled-components';

import { color } from '../../assets/styles/variables';

export const StyledCoursePrice = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 8px;
`;

export const MainPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  color: ${ color.colorPrimary };

  & > span {
    font-size: 18px;
    line-height: 32px;
  }
  
  & > p {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }

  ${( { size } ) => 
    size === "1"
      &&
        `
          & > span {
            font-size: 18px;
            line-height: 32px;
          }

          & > p {
            font-size: 24px;
            line-height: 32px;
            margin: 0;
          }
        `
  }
  
  ${( { size } ) => 
    size === "2"
      &&
        `
          & > span {
            font-size: 24px;
            line-height: 32px;
          }

          & > p {
            font-size: 40px;
            line-height: 44px;
            margin: 0;
          }
        `
  }
`;

export const SecondaryPrice = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${ color.colorGreyLight3 };
  text-decoration: line-through;

  ${( { size } ) => 
    size === "1"
      &&
        `
          font-size: 12px;
        `
  }

  ${( { size } ) => 
    size === "2"
      &&
        `
          font-size: 24px;
        `
  }
`;
