// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Reducers
import { login } from '../../features/authSlice';

// Styles
import {
  BtnSubmit,
  Login,
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginFormInput,
  LoginFormItem,
  LoginFormSpan
} from './Styles';

// Custom Hooks
import useForm from '../../customHooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: ''
  };

  const [ formValues, handleInputChange, reset ] = useForm( initialState );

  const { email, password } = formValues;

  const handleLogin = ( e ) => {
    e.preventDefault();

    if ( email.length > 1 && password.length > 1 ) {
      dispatch( login( email, password ) );
      reset();
    }
  }

  return (
    <Login>
      <LoginContainer>
        <LoginForm onSubmit={ handleLogin }>
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>

          <LoginFormContainer>
            <LoginFormItem>
              <LoginFormInput
                type="text"
                name="email"
                value={ formValues.email }
                onChange={ handleInputChange }
              />
              <LoginFormSpan goUp={ email.length > 0 }>
                Email or Phone
              </LoginFormSpan>
            </LoginFormItem>

            <LoginFormItem>
              <LoginFormInput
                type="password"
                name="password"
                value={ formValues.password }
                onChange={ handleInputChange }
              />
              <LoginFormSpan goUp={ password.length > 0 }>
                Password
              </LoginFormSpan>
            </LoginFormItem>
          </LoginFormContainer>

          <BtnSubmit>Sign in</BtnSubmit>
        </LoginForm>
      </LoginContainer>
    </Login>
  )
}
