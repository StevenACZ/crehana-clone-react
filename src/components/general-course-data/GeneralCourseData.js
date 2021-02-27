import React from 'react'

// Icons ANTD
import {
  BarChartOutlined,
  UsergroupDeleteOutlined,
  StarFilled
} from '@ant-design/icons';

// Styles
import {
  StyledGeneralCourseData,
  IconContainer,
} from './Styles';

export const GeneralCourseData = ({
  level,
  users,
  course_score
}) => {
  return (
    <StyledGeneralCourseData>
      <IconContainer>
        <BarChartOutlined />
        <span>{ level }</span>
      </IconContainer>

      <IconContainer>
        <UsergroupDeleteOutlined />
        <span>{ users } Usuarios</span>
      </IconContainer>

      <IconContainer>
        <StarFilled />
        <span>{ course_score }</span>
      </IconContainer>
    </StyledGeneralCourseData>
  )
}
