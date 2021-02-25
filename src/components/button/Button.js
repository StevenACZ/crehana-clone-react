import React from 'react'

import { StyledButton } from './Styles';

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton { ...props }>
      <span>
        { children }
      </span>
    </StyledButton>
  )
}
