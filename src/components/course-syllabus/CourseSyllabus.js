import React from 'react';

// Styles
import {
  StyledCourseSyllabus,
  Module,
  StyledCourseSyllabusContainer,
} from './Styles';

// Icons ANTD
import {
  EyeInvisibleFilled,
  DownOutlined,
} from '@ant-design/icons';

// Components
import { CustomButton } from '../button/CustomButton';

export const CourseSyllabus = () => {
  return (
    <StyledCourseSyllabus>
      <StyledCourseSyllabusContainer>
        <h3>H3 - Temario del curso</h3>

        <Module>
          <p>Introducción</p>
          <li>1. Un cuento de superacion con todo <EyeInvisibleFilled /></li>
          <li>El no ilustrador <EyeInvisibleFilled /></li>
          <li>Break 1: Subete al robot <EyeInvisibleFilled /></li>
        </Module>

        <Module>
          <p>Bildungsroman</p>
          <li>Un cuento de superacion con todo <EyeInvisibleFilled /></li>
          <li>El no ilustrador <EyeInvisibleFilled /></li>
          <li>Break 1: Subete al robot <EyeInvisibleFilled /></li>
        </Module>

        <Module>
          <p>¿Qué hacer con tu vida?</p>
          <li>Un cuento de superacion con todo <EyeInvisibleFilled /></li>
          <li>El no ilustrador <EyeInvisibleFilled /></li>
          <li>Break 1: Subete al robot <EyeInvisibleFilled /></li>
        </Module>

        <CustomButton anchorlink="true">
          textlink <DownOutlined />
        </CustomButton>
      </StyledCourseSyllabusContainer>
    </StyledCourseSyllabus>
  )
}
