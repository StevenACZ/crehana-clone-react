import React from 'react';

// Styles
import {
  StyledPaymentMethod,
  Form,
  Terms
} from './Styles';

// Components ANTD
import {
  Collapse,
} from 'antd';

// Components
import { CustomCollapse } from '../collapse/CustomCollapse';
import { CustomButton } from '../button/CustomButton';

export const PaymentMethod = () => {
  const { Panel } = Collapse;

  const text = `
    Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Id mi, mauris aliquam phasellus quis semper diam fringilla.s
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
    Id mi, mauris aliquam phasellus quis semper diam fringilla. 
  `;

  return (
    <StyledPaymentMethod>
      <h3>Método de pago</h3>

      <CustomCollapse>
        <Panel header="Pagar con tarjeta" key="1">
          <Form>
            <div>
              <p>Correo electrónico</p>
              <input type="text" />
            </div>

            <div>
              <p>Número de tarjeta</p>
              <input type="text" />
            </div>

            <div>
              <p>Fecha de vencimiento</p>
              <input type="text" placeholder="Ej. 04 / 22" />
            </div>

            <div>
              <p>Código de seguridad</p>
              <input type="text" placeholder="CVC / CVV" />
            </div>
          </Form>
        </Panel>
        <Panel header="PagoEfectivo" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="PayPal" key="3">
          <p>{text}</p>
        </Panel>
      </CustomCollapse>

      <Terms>
        <div>
        </div>

        <p>
          Acepto expresamente todos los Términos y Condiciones.
        </p>
      </Terms>

      <CustomButton>
        Compra ahora
      </CustomButton>
    </StyledPaymentMethod>
  )
}
