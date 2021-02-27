import React from 'react';

// Styles
import {
  StyledCoursePrice,
  MainPrice,
  SecondaryPrice
} from './Styles';

export const CoursePrice = ({
  price,
  real_price,
  ...rest
}) => {
  return (
    <StyledCoursePrice>
      <MainPrice { ...rest }>
        <span>co</span>
        <p>${ price }</p>
      </MainPrice>

      <SecondaryPrice { ...rest }>
        CO${ real_price }
      </SecondaryPrice>
    </StyledCoursePrice>
  )
}
