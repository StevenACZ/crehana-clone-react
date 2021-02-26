import React from 'react';

// Styles
import {
  Body,
  Header,
  StyledCoursesListItem,
  BodyTop,
  BodyBottom,
  IconContainer,
  Price,
  MainPrice,
  SecondaryPrice
} from './Styles';

// Components
import { CustomButton } from '../button/CustomButton';

// Icons ANTD
import {
  BarChartOutlined,
  UsergroupDeleteOutlined,
  StarFilled
} from '@ant-design/icons';

export const CoursesListItem = ({
  course_name,
  level,
  username,
  real_price,
  price,
  course_score,
  users
}) => {
  return (
    <StyledCoursesListItem>
      <Header>
        <span>Tag venta</span>
      </Header>

      <Body>
        <BodyTop>
          <h5>{ course_name }</h5>
          <p>{ username }</p>

          <div>
            <IconContainer>
              <BarChartOutlined />
              <span>{ level }</span>
            </IconContainer>

            <IconContainer>
              <UsergroupDeleteOutlined />
              <span>{ users } Usuarios</span>
            </IconContainer>

            <IconContainer>
              <StarFilled />
              <span>{ course_score }</span>
            </IconContainer>
          </div>
        </BodyTop>

        <BodyBottom>
          <Price>
            <MainPrice>
              <span>co</span>
              <p>${ price }</p>
            </MainPrice>

            <SecondaryPrice>
              CO${ real_price }
            </SecondaryPrice>
          </Price>

          <CustomButton>
            Compra ahora
          </CustomButton>
        </BodyBottom>
      </Body>
    </StyledCoursesListItem>
  )
}
