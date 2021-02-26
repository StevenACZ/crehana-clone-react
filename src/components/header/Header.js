import React from 'react';

// Styles
import { HeaderContainer, Logo, StyledHeader } from './Styles';

// Components
import { CustomButton } from '../button/CustomButton';

// Logo
import LogoImg from '../../assets/images/logo.png';

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
