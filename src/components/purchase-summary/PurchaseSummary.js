import React from 'react';
import { GeneralCourseData } from '../general-course-data/GeneralCourseData';

// Styles
import {
  StyledPurchaseSummary,
  Header,
  Body,
  Price
} from './Styles';

export const PurchaseSummary = () => {
  return (
    <StyledPurchaseSummary>
      <Header>
        <div></div>
        <div>
          <p>Nombre del curso</p>
          <span>Profesor del curso</span>
          <GeneralCourseData
            level="Nivel 1"
            users="123"
            course_score="4.8"
          />
        </div>
      </Header>

      <Body>
        <Price>
          <span>
            Subtotal
          </span>
          <span>
            COS$ 199,999
          </span>
        </Price>

        <Price>
          <span>
            Tarjeta
          </span>
          <span>
            20% Dto.
          </span>
        </Price>

        <Price>
          <span>
            Total a pagar
          </span>
          <p>
            COS$ 149,999
          </p>
        </Price>
      </Body>
    </StyledPurchaseSummary>
  )
}
