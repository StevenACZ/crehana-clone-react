import React, { useContext, useEffect, useState } from 'react';

// React Router
import {
  useHistory,
  useLocation
} from 'react-router-dom';

// Styles
import {
  Logo,
  StyledHeader,
  ButtonsContainer,
  StyledHeaderCheckout
} from './Styles';

// Logo
import LogoBlack from '../../assets/images/logo-black.png';
import LogoWhite from '../../assets/images/logo-white.png';

// Icons ANTD
import {
  MenuOutlined,
  SearchOutlined
} from '@ant-design/icons';

// Components ANTD
import { Drawer } from 'antd';

// Components
import { CustomButton } from '../button/CustomButton';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const Header = () => {

  const history = useHistory();
  const location = useLocation();

  const [ visible, setVisible ] = useState( false );
  const [currentLocation, setCurrentLocation] = useState('');

  const showDrawer = () => {
    setVisible( true );
  };
  
  const onClose = () => {
    setVisible( false );
  };

  useEffect(() => {
    setCurrentLocation( location.pathname );
  }, [ location ])

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
		history.replace('/');
    
		dispatch({
      type: types.logout,
			payload: {}
		})

    onClose();
	}

  const handleLogin = () => {
    history.replace('/login');
    onClose();
  }

  return (
    <>
      {
        currentLocation !== "/checkout"
          ?
            (
              <StyledHeader>
                <MenuOutlined onClick={ showDrawer } />

                <Drawer
                    placement="left"
                    closable={ false }
                    onClose={ onClose }
                    visible={ visible }
                  >
                    <ButtonsContainer>

                      {
                        user.logged
                          ?
                            (
                              <CustomButton onClick={ handleLogout }>
                                Loggout
                              </CustomButton>
                            )
                          :
                            (
                              <CustomButton onClick={ handleLogin }>
                                Login
                              </CustomButton>
                            )
                      }

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

                <Logo src={ LogoBlack } onClick={ () => history.push('/') } />

                <SearchOutlined />
                
                {
                  user.logged
                    ?
                      (
                        <CustomButton
                          outline={ 3 }
                          onClick={ handleLogout }
                        >
                          Loggout
                        </CustomButton>
                      )
                    :
                      (
                        <CustomButton outline={ 3 }>
                          Registrate gratis
                        </CustomButton>
                      )
                }
              </StyledHeader>
            )
          :
            (
              <StyledHeaderCheckout>
                <Logo src={ LogoWhite } onClick={ () => history.push('/') } />
              </StyledHeaderCheckout>
            )
      }
    </>

  )
}