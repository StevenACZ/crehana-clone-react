import React from 'react';

// IsMobile?
import {
  // isMobile
} from "react-device-detect";

// Styles
import {
  CourseDetail,
} from './Styles';

// Components
// import { CustomButton } from '../../components/button/CustomButton';
import { CourseHero } from '../../components/course-hero/CourseHero';
import { CourseSyllabus } from '../../components/course-syllabus/CourseSyllabus';

export const CourseDetailScreen = () => {
  return (
    <CourseDetail>
      <CourseHero />

      <CourseSyllabus />
      
      {/* <CourseSummary>

      </CourseSummary>

      <CourseProjects>

      </CourseProjects>

      <CourseRatings>

      </CourseRatings>

      <CourseQuestions>

      </CourseQuestions> */}
    </CourseDetail>
  )
}
