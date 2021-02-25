import React from 'react';

import { Body, Header, StyledCoursesListItem, BodyTop, BodyBottom, IconContainer, Price, MainPrice, SecondaryPrice } from './Styles';

import {  BarChartOutlined, UsergroupDeleteOutlined, StarFilled  } from '@ant-design/icons';

import { CustomButton } from '../button/CustomButton';

export const CoursesListItem = () => {
  return (
    <StyledCoursesListItem>
      <Header>
        <span>Tag venta</span>
      </Header>

      <Body>
        <BodyTop>
          <h5>Nombre del curso</h5>
          <p>Profesor del curso</p>

          <div>
            <IconContainer>
              <BarChartOutlined />
              <span>Nivel 1</span>
            </IconContainer>

            <IconContainer>
              <UsergroupDeleteOutlined />
              <span>123 Usuarios</span>
            </IconContainer>

            <IconContainer>
              <StarFilled />
              <span>4.8</span>
            </IconContainer>
          </div>
        </BodyTop>

        <BodyBottom>
          <Price>
            <MainPrice>
              <span>co</span>
              <p>$349,929</p>
            </MainPrice>

            <SecondaryPrice>
              CO$164,434
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
