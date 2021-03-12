// React
import
  React, {
  useEffect,
  useState 
} from 'react';

// React Router
import {
  useHistory,
  useLocation
} from 'react-router-dom';

// Redux
import {
  useDispatch,
  useSelector
} from 'react-redux';

// Redux - Reducers
import {
  logout,
  selectIsAuthenticated
} from '../../features/authSlice';

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

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector( selectIsAuthenticated );

  const history = useHistory();
  const location = useLocation();

  const [ visible, setVisible ] = useState( false );
  const [ currentLocation, setCurrentLocation ] = useState('');

  const showDrawer = () => {
    setVisible( true );
  };
  
  const onClose = () => {
    setVisible( false );
  };

  useEffect(() => {
    setCurrentLocation( location.pathname );
  }, [ location ])

  const handleLogout = () => {
		history.replace('/');
    dispatch( logout() );
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
                        isAuthenticated
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
                  isAuthenticated
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