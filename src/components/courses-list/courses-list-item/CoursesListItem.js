import React from 'react';

// React Router
import { useHistory } from 'react-router-dom';

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

export const CoursesListItem = ({
  course_name,
  level,
  username,
  real_price,
  price,
  course_score,
  users
}) => {

  const history = useHistory();

  return (
    <StyledCoursesListItem>
      <Header onClick={ () => history.push('/course') }>
        <span>Tag venta</span>
      </Header>

      <Body>
        <BodyTop>
          <h5 onClick={ () => history.push('/course') }>{ course_name }</h5>

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

          <CustomButton onClick={ () => history.push('/checkout') }>
            Compra ahora
          </CustomButton>
        </BodyBottom>
      </Body>
    </StyledCoursesListItem>
  )
}
