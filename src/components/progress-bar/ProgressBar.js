import React from 'react';

// Styles
import {
  StyledProgressBar
} from './Styles';

// Icons ANTD
import {
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';

export const ProgressBar = ({
  percent,
  ...rest
}) => {
  return (
    <StyledProgressBar
      percent={ percent }
      { ...rest }
    >
      <div></div>
      <div>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarOutlined />
        <span>{ percent }%</span>
      </div>
    </StyledProgressBar>
  )
}
