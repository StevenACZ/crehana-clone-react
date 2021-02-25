import React from 'react';

import LogoImg from '../../assets/images/logo.png';
import { Button } from '../button/Button';

import { HeaderContainer, Logo, StyledHeader } from './Styles';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={ LogoImg } />

        <Button outline>
          Registrate gratis
        </Button>
      </HeaderContainer>
    </StyledHeader>
  )
}
