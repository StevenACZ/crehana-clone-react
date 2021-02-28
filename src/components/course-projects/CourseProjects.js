import React from 'react';

// Styles
import {
  StyledCourseProjects,
  GridCoursesImages
} from './Styles';

export const CourseProjects = () => {
  return (
    <StyledCourseProjects>
      <h3>H3 Proyectos del curso</h3>

      <GridCoursesImages>
        <li>
          <div>
            <div></div>
            <span>user_name</span>
          </div>
        </li>

        <li>
          <div>
            <div></div>
            <span>user_name</span>
          </div>
        </li>
        <li>
          <div>
            <div></div>
            <span>user_name</span>
          </div>
        </li>
        <li>
          <div>
            <div></div>
            <span>user_name</span>
          </div>
        </li>
        <li>
          <span>+07</span>
        </li>
      </GridCoursesImages>
    </StyledCourseProjects>
  )
}
