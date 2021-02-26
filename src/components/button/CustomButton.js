import React from 'react'

// Styles
import { StyledButton } from './Styles';

export const CustomButton = ({ children, ...props }) => {
  return (
    <StyledButton { ...props }>
      { children }
    </StyledButton>
  )
}
