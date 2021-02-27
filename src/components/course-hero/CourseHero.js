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
import { CoursePrice } from '../course-price/CoursePrice';
import { CourseVideo } from '../course-video/CourseVideo';

// Styles
import {
  DesktopCourseHero,
  MobileCourseHero,
  HeroInformation,
  HeroCard
} from './Styles';
import { CustomButton } from '../button/CustomButton';

export const CourseHero = () => {
  return (
    <>
      <BrowserView>
        <DesktopCourseHero>
          <HeroInformation>
            <h2>Title H2 - Nombre del curso</h2>
            <p>
              Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
            </p>

            <GeneralCourseData
              level="Avanzado"
              users="123"
              course_score="4.8"
            />

            <TeacherGeneralData
              teacher_name="Subtitle 3 - Nombre profesor"
              teacer_position="body 3 - Cargo profesor"
            />

            <CourseGeneralActions />
          </HeroInformation>

          <HeroCard>
            <CourseVideo />

            <div>
              <CoursePrice
                price="349,929"
                real_price="164,434"
                size="2"
              />

              <nav>
                <CustomButton>
                  Comprar ahora
                </CustomButton>

                <CustomButton outline={ 3 }>
                  Agregar a carrito
                </CustomButton>
              </nav>
            </div>
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
