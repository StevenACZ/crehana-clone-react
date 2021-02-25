import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 48px;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;

  ${({ outline }) =>
    outline
      &&
        `
          background-color: white;
          color: black;
          border: 3px solid #181b32;
        `
  }

  span {
    font-size: 16px;
    line-height: 16px;
    font-weight: 800;
  }
`;