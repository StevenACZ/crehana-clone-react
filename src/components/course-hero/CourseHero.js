import React from 'react';

// IsMobile?
import {
  BrowserView,
  MobileView,
  isMobile
} from "react-device-detect";

// Styles
import {
  DesktopCourseHero,
  MobileCourseHero
} from './Styles';

export const CourseHero = () => {
  return (
    <>
      <BrowserView>
        <DesktopCourseHero>
          Hello Desktop
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
