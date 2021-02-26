import React from 'react';

import { StyledCoursesList } from './Styles';

import { CoursesListItem } from '../courses-list-item/CoursesListItem';

export const CoursesList = ({ courses }) => {
  return (
    <StyledCoursesList>
      {
        courses.map( course => (
          <CoursesListItem
            key={ course.id }
            { ...course }
          />
        ))
      }
    </StyledCoursesList>
  )
}
