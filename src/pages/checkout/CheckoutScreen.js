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
  MobileCheckout,
  LegalNotes,
  Summary
} from './Styles';

// Components ANTD
import {
  Steps
} from 'antd'

// Components
import { CustomSteps } from '../../components/steps/CustomSteps';
import { PaymentMethod } from '../../components/payment-method/PaymentMethod';
import { PurchaseSummary } from '../../components/purchase-summary/PurchaseSummary';

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
            <PurchaseSummary />

            <LegalNotes>
              <span>Notas legales</span>
              <p>
                Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
              </p>
            </LegalNotes>
          </DeskTopRight>
        </DesktopCheckout>
      </CustomView>
      
      <CustomView condition={ isMobileOnly }>
        <MobileCheckout>
          <CustomSteps
            type="navigation"
            size="small"
            current={ currentStep }
            onChange={ onChangee }
            className="site-navigation-steps"
          >
            <Step status="process" title="Proceso de pago" />
            <Step status="wait" title="Paso 2" />
          </CustomSteps>

          <Summary>
            <h3>Resumen</h3>

            <div>
              <PurchaseSummary />
            </div>
          </Summary>

          <PaymentMethod />

          <LegalNotes>
            <span>Notas legales</span>
            <p>
              Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
            </p>
          </LegalNotes>
        </MobileCheckout>
      </CustomView>
    </>
  )
}
