import styled from 'styled-components';

import { Button } from 'antd'; 

export const StyledButton = styled( Button )`
  height: 48px;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  line-height: 16px;
  font-weight: 800;

  ${({ anchorLink }) =>
    anchorLink === "true"
      &&
        `
          padding: 0;
          background-color: transparent;
          color: black;
          border: none;
          height: auto;
        `
  }

  ${({ outline }) =>
    outline === 1
      &&
        `
          background-color: transparent;
          color: black;
          border: 1px solid #181b32;
        `
  }

  ${({ outline }) =>
    outline === 3
      &&
        `
          background-color: transparent;
          color: black;
          border: 3px solid #181b32;
        `
  }
  
  ${({ dropdown }) =>
    dropdown === "true"
      &&
        `
          background-color: transparent;
          color: black;
          border: 1px solid #8d8d9d;
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          span {
            font-weight: 400;
            text-transform: none;
            color: #8d8d9d;
            font-size: 16px;
          }
        `
  }
`;