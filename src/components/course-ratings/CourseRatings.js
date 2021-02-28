import React from 'react';

// Styles
import {
  StyledCourseRatings,
  Ratings,
  BestComment,
  TotalAverage,
  General,
} from './Styles';

// Components
import {
  ProgressBar
} from '../progress-bar/ProgressBar';

// Icons ANTD
import {
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';

export const CourseRatings = () => {
  return (
    <StyledCourseRatings>
      <h3>Valoraciones</h3>

      <Ratings>
        <TotalAverage>
          <span>4.8</span>
          <div>
            <div>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <span>Media total</span>
          </div>
        </TotalAverage>

        <General>
          <ProgressBar percent={ 100 }/>
          <ProgressBar percent={ 50 }/>
          <ProgressBar percent={ 20 }/>
        </General>
      </Ratings>

      <BestComment>
        
      </BestComment>
    </StyledCourseRatings>
  )
}
