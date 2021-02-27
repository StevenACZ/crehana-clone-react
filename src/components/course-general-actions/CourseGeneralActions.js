import React from 'react';

// Styles
import {
  StyledCourseGeneralActions,
  Action
} from './Styles';

// Icons ANTD
import {
  HeartFilled,
  MinusSquareFilled,
  CameraFilled
} from '@ant-design/icons'

export const CourseGeneralActions = () => {
  return (
    <StyledCourseGeneralActions>
      <Action>
        <HeartFilled />
        <span>Acción 1</span>
      </Action>
      
      <Action>
        <MinusSquareFilled />
        <span>Acción 1</span>
      </Action>
      
      <Action>
        <CameraFilled />
        <span>Acción 1</span>
      </Action>
    </StyledCourseGeneralActions>
  )
}
