// React
import React from 'react';

// Styles
import { StyledCustomCollapse } from './Styles';

export const CustomCollapse = ({
  children,
  ...rest
}) => {
  return (
    <StyledCustomCollapse
      accordion
      expandIconPosition="right"
      { ...rest }
    >
      { children }
    </StyledCustomCollapse>
  )
}
