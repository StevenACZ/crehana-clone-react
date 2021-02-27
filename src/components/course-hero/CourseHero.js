import React from 'react';

// IsMobile?
import {
  BrowserView,
  MobileView,
  // isMobile
} from "react-device-detect";

// Components
import { GeneralCourseData } from '../general-course-data/GeneralCourseData';
import { TeacherGeneralData } from '../teacher-general-data/TeacherGeneralData';
import { CourseGeneralActions } from '../course-general-actions/CourseGeneralActions';

// Styles
import {
  DesktopCourseHero,
  MobileCourseHero,
  HeroInformation,
  HeroCard
} from './Styles';

export const CourseHero = () => {
  return (
    <>
      <BrowserView>
        <DesktopCourseHero>
          <HeroInformation>
            <h2>Ttile H2 - Nombre del curso</h2>
            <p>
              Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
            </p>

            <GeneralCourseData
              level="Avanzado"
              users="123"
              course_score="4.8"
            />

            <TeacherGeneralData />

            <CourseGeneralActions />
          </HeroInformation>

          <HeroCard>

          </HeroCard>
        </DesktopCourseHero>
      </BrowserView>

      <MobileView>
        <MobileCourseHero>
          Hello Mobile
        </MobileCourseHero>
      </MobileView>
    </>
  )
}
