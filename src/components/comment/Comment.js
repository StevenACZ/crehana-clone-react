// React
import React from 'react';

// Styles
import {
  StyledComment,
  Header,
  Body
} from './Styles';

// Icons ANTD
import {
  StarFilled,
  StarOutlined
} from '@ant-design/icons';

export const Comment = () => {
  return (
    <StyledComment>
      <Header>
        <div></div>
        <div>
          <span>Usuario213</span>
          <div>
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>
        </div>
      </Header>

      <Body>
        <p>
          Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sed ut.
        </p>
      </Body>
    </StyledComment>
  )
}
