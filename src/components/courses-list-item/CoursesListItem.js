import React from 'react';

// Styles
import {
  Body,
  Header,
  StyledCoursesListItem,
  BodyTop,
  BodyBottom,
} from './Styles';

// Components
import { CustomButton } from '../button/CustomButton';
import { GeneralCourseData } from '../general-course-data/GeneralCourseData';
import { CoursePrice } from '../course-price/CoursePrice';
import { Link } from 'react-router-dom';

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
      <Link to="/course">
        <Header>
          <span>Tag venta</span>
        </Header>
      </Link>

      <Body>
        <BodyTop>
          <Link to="/course">
            <h5>{ course_name }</h5>
          </Link>

          <p>{ username }</p>

          <GeneralCourseData
            level={ level }
            users={ users }
            course_score={ course_score }
          />
        </BodyTop>

        <BodyBottom>          
          <CoursePrice
            price={ price }
            real_price={ real_price }
            size="1"
          />

          <CustomButton>
            Compra ahora
          </CustomButton>
        </BodyBottom>
      </Body>
    </StyledCoursesListItem>
  )
}
