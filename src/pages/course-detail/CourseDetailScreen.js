// React
import React from 'react';

// Styles
import { CourseDetail } from './Styles';

// Components
import { CourseHero } from '../../components/course-hero/CourseHero';
import { CourseSyllabus } from '../../components/course-syllabus/CourseSyllabus';
import { CourseSummary } from '../../components/course-summary/CourseSummary';
import { CourseProjects } from '../../components/course-projects/CourseProjects';
import { CourseRatings } from '../../components/course-ratings/CourseRatings';
import { CourseQuestions } from '../../components/course-questions/CourseQuestions';

export const CourseDetailScreen = () => {
  return (
    <CourseDetail>
      <CourseHero />

      <CourseSyllabus />
      
      <CourseSummary />

      <CourseProjects />

      <CourseRatings />

      <CourseQuestions />
    </CourseDetail>
  )
}
