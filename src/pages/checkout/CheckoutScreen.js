import React, { useState } from 'react';

// IsMobile?
import {
  CustomView,
  isMobileOnly,
  isBrowser,
  isTablet
} from "react-device-detect";

// Styles
import {
  DesktopCheckout,
  DeskTopLeft,
  DeskTopRight,
  MobileCheckout
} from './Styles';

// Components ANTD
import {
  Steps
} from 'antd'

// Components
import { CustomSteps } from '../../components/steps/CustomSteps';
import { PaymentMethod } from '../../components/payment-method/PaymentMethod';

export const CheckoutScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { Step } = Steps;

  const onChangee = ( e ) => {
    setCurrentStep( e );
  }

  return (
    <>
      <CustomView condition={ isBrowser || isTablet }>
        <DesktopCheckout>
          <DeskTopLeft>
            <CustomSteps
              type="navigation"
              size="small"
              current={ currentStep }
              onChange={ onChangee }
              className="site-navigation-steps"
            >
              <Step status="process" title="Proceso de pago" />
              <Step status="wait" title="Paso 2" />
              <Step status="wait" title="Paso 3" disabled />
            </CustomSteps>

            <PaymentMethod />
          </DeskTopLeft>

          <DeskTopRight>

          </DeskTopRight>
        </DesktopCheckout>
      </CustomView>
      
      <CustomView condition={ isMobileOnly }>
        <MobileCheckout>

        </MobileCheckout>
      </CustomView>
    </>
  )
}
