import React from 'react';

// Styles
import {
  StyledCourseQuestions,
  StyledCourseQuestionsContainer
} from './Styles';

// Components ANTD
import {
  Collapse,
} from 'antd';

// Components
import { CustomCollapse } from '../collapse/CustomCollapse';

export const CourseQuestions = () => {
  const { Panel } = Collapse;

  const text = `
    Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
  `;

  return (
    <StyledCourseQuestions>
      <h3>Preguntas frecuentes</h3>

      <StyledCourseQuestionsContainer>
        <CustomCollapse>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </CustomCollapse>
      </StyledCourseQuestionsContainer>
    </StyledCourseQuestions>
  )
}
