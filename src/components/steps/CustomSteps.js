import React from 'react';

// Styles
import {
  StyledCustomSteps
} from './Styles';

export const CustomSteps = ({
  children,
  ...rest
}) => {
  return (
    <StyledCustomSteps { ...rest }>
      { children }
    </StyledCustomSteps>
  )
}
