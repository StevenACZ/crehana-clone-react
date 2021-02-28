import React from 'react';
import { CustomButton } from '../button/CustomButton';

// Styles
import {
  StyledCourseSummary
} from './Styles';

// Icons ANTD
import {
  DownOutlined,
} from '@ant-design/icons';

export const CourseSummary = () => {
  return (
    <StyledCourseSummary>
      <h3>H3 - ¿De qué trata este curso?</h3>
      <p>
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
      </p>
      <CustomButton anchorlink="true">
        textlink <DownOutlined />
      </CustomButton>
    </StyledCourseSummary>
  )
}
