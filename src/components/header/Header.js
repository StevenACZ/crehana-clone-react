import React from 'react';

// Styles
import { Logo, StyledHeader } from './Styles';

// Components
import { CustomButton } from '../button/CustomButton';

// Logo
import LogoImg from '../../assets/images/logo.png';

// Icons ANTD
import {
  MenuOutlined,
  SearchOutlined
} from '@ant-design/icons';

export const Header = () => {
  return (
    <StyledHeader>
      <MenuOutlined />      

      <Logo src={ LogoImg } />

      <SearchOutlined />

      <CustomButton outline={ 3 }>
        Registrate gratis
      </CustomButton>
    </StyledHeader>
  )
}
