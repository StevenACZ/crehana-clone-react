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
import { CourseHero } from '../../components/course-hero/CourseHero';
import { CourseSyllabus } from '../../components/course-syllabus/CourseSyllabus';
import { CourseSummary } from '../../components/course-summary/CourseSummary';

export const CourseDetailScreen = () => {
  return (
    <CourseDetail>
      <CourseHero />

      <CourseSyllabus />
      
      <CourseSummary />

      {/* <CourseProjects>

      </CourseProjects>

      <CourseRatings>

      </CourseRatings>

      <CourseQuestions>

      </CourseQuestions> */}
    </CourseDetail>
  )
}
