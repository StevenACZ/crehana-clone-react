import React, { useState } from 'react';

// React Router
import { useHistory } from 'react-router-dom';

// Styles
import {
  Logo,
  StyledHeader,
  ButtonsContainer
} from './Styles';

// Logo
import LogoImg from '../../assets/images/logo.png';

// Icons ANTD
import {
  MenuOutlined,
  SearchOutlined
} from '@ant-design/icons';

// Components ANTD
import { Drawer } from 'antd';

// Components
import { CustomButton } from '../button/CustomButton';

export const Header = () => {

  const history = useHistory()

  const [ visible, setVisible ] = useState( false );

  const showDrawer = () => {
    setVisible( true );
  };
  
  const onClose = () => {
    setVisible( false );
  };

  return (
    <StyledHeader>
      <MenuOutlined onClick={ showDrawer } />

      <Drawer
          placement="left"
          closable={ false }
          onClose={ onClose }
          visible={ visible }
        >
          <ButtonsContainer>
            <CustomButton>
              Loggout
            </CustomButton>

            <CustomButton outline={ 3 }>
              Registrate gratis
            </CustomButton>

            <CustomButton outline={ 3 }>
              Sobre nosotros
            </CustomButton>

            <CustomButton outline={ 3 }>
              Cursos
            </CustomButton>
          </ButtonsContainer>
        </Drawer>

      <Logo src={ LogoImg } onClick={ () => history.push('/') } />

      <SearchOutlined />

      <CustomButton outline={ 3 }>
        Registrate gratis
      </CustomButton>
    </StyledHeader>
  )
}