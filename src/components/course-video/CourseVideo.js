// React
import React from 'react';

// Styles
import { StyledCourseVideo } from './Styles';

// Icons ANTD
import { PlayCircleFilled } from '@ant-design/icons';

export const CourseVideo = () => {
  return (
    <StyledCourseVideo>
      <div>
        <PlayCircleFilled />
        <span>Ver Trailer del curso</span>
      </div>
    </StyledCourseVideo>
  )
}
