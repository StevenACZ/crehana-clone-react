import React from 'react';

// Styles
import {
  StyledCourseRatings,
  Ratings,
  BestComment,
  TotalAverage,
  General,
} from './Styles';

// Icons ANTD
import {
  StarFilled,
  StarOutlined,
  DownOutlined
} from '@ant-design/icons';

// Components
import { ProgressBar } from '../progress-bar/ProgressBar';
import { Comment } from '../comment/Comment';
import { CustomButton } from '../button/CustomButton';

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
          <ProgressBar percent={ 90 }/>
          <ProgressBar percent={ 50 }/>
          <ProgressBar percent={ 20 }/>
          <ProgressBar percent={ 10 }/>
          <ProgressBar percent={ 15 }/>
        </General>
      </Ratings>

      <BestComment>
        <Comment />
      </BestComment>

      <CustomButton anchorlink="true">
        textlink <DownOutlined />
      </CustomButton>
    </StyledCourseRatings>
  )
}
