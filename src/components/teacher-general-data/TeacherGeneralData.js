// React
import React from 'react';

// Styles
import { StyledTeacherGeneralData } from './Styles';

export const TeacherGeneralData = ({
  teacher_name,
  teacer_position
}) => {
  return (
    <StyledTeacherGeneralData>
      <div></div>
      <div>
        <p>{ teacher_name }</p>
        <span>{ teacer_position }</span>
      </div>
    </StyledTeacherGeneralData>
  )
}
