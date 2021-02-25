import React from 'react'

import { StyledButton } from './Styles';

export const CustomButton = ({ children, ...props }) => {
  return (
    <StyledButton { ...props }>
      { children }
    </StyledButton>
  )
}
