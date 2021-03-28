// React
import React from 'react';

// Styles
import { StyledCoursesList } from './Styles';

// Components
import { CoursesListItem } from '../courses-list/courses-list-item/CoursesListItem';

export const CoursesList = ({ courses }) => {
  return (
    <StyledCoursesList>
      {courses.map((course) => (
        <CoursesListItem key={course.id} {...course} />
      ))}
    </StyledCoursesList>
  );
};
