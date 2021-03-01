import styled from 'styled-components';

import { Button } from 'antd'; 

import { color } from '../../assets/styles/variables';

export const StyledButton = styled( Button )`
  height: 48px;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${ color.colorPrimary };
  color: white;
  border: none;
  font-size: 16px;
  line-height: 16px;
  font-weight: 800;

  ${({ anchorlink }) =>
    anchorlink === "true"
      &&
        `
          padding: 0;
          background-color: transparent;
          color: ${ color.colorPrimary };
          border: none;
          height: auto;
        `
  }

  ${({ outline }) =>
    outline === 1
      &&
        `
          background-color: transparent;
          color: ${ color.colorBlack };
          border: 1px solid ${ color.colorPrimary };
        `
  }

  ${({ outline }) =>
    outline === 3
      &&
        `
          background-color: transparent;
          color: ${ color.colorBlack };
          border: 3px solid ${ color.colorPrimary };
        `
  }
  
  ${({ dropdown }) =>
    dropdown === "true"
      &&
        `
          background-color: transparent;
          color: ${ color.colorBlack };
          border: 1px solid ${ color.colorGreyLight3 };
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          span {
            font-weight: 400;
            text-transform: none;
            color: ${ color.colorGreyLight3 };
            font-size: 16px;
          }
        `
  }
`;