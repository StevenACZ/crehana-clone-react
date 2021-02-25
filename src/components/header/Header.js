import React from 'react';

import LogoImg from '../../assets/images/logo.png';
import { CustomButton } from '../button/CustomButton';

import { HeaderContainer, Logo, StyledHeader } from './Styles';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={ LogoImg } />

        <CustomButton outline={ 3 }>
          Registrate gratis
        </CustomButton>
      </HeaderContainer>
    </StyledHeader>
  )
}
