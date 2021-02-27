import React from 'react';

// Styles
import {
  Body,
  Header,
  StyledCoursesListItem,
  BodyTop,
  BodyBottom,
  Price,
  MainPrice,
  SecondaryPrice
} from './Styles';

// Components
import { CustomButton } from '../button/CustomButton';
import { GeneralCourseData } from '../general-course-data/GeneralCourseData';

export const CoursesListItem = ({
  course_name,
  level,
  username,
  real_price,
  price,
  course_score,
  users
}) => {
  return (
    <StyledCoursesListItem>
      <Header>
        <span>Tag venta</span>
      </Header>

      <Body>
        <BodyTop>
          <h5>{ course_name }</h5>
          <p>{ username }</p>

          <GeneralCourseData
            level={ level }
            users={ users }
            course_score={ course_score }
          />

        </BodyTop>

        <BodyBottom>
          <Price>
            <MainPrice>
              <span>co</span>
              <p>${ price }</p>
            </MainPrice>

            <SecondaryPrice>
              CO${ real_price }
            </SecondaryPrice>
          </Price>

          <CustomButton>
            Compra ahora
          </CustomButton>
        </BodyBottom>
      </Body>
    </StyledCoursesListItem>
  )
}
