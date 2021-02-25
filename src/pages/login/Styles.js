import styled from 'styled-components';

export const Login = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 352px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoginForm = styled.form`
  padding: 24px 32px 32px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 30px;
    line-height: 1.25;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    margin: 0 0 7px 0;
  }

  p {
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 400;
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 23px 0 23px 0;
`;

export const LoginFormItem = styled.label`
  position: relative;
  display: block;
  height: 52px;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.6);
  outline: none;
  border-radius: 4px;
  overflow: hidden;
`;

export const LoginFormInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 28px 12px 6px;
  transition: 332ms all cubic-bezier(0.165, 0.84, 0.44, 1);

  &:focus + span {
    font-size: 12px;
    transform: translateY(-100%);
    color: rgba(0, 0, 0, 1);
  }
`;

export const LoginFormSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 17px;
  line-height: 1.3333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  transform: translateY(-50%);
  transition: 334ms all cubic-bezier(0.165, 0.84, 0.44, 1);


  ${ ({ goUp }) => 
    goUp
      &&
        `
          font-size: 12px;
          transform: translateY(-100%);
          color: rgba(0, 0, 0, 1);
        `
  }
`;

export const BtnSubmit = styled.button`
  display: block;
  width: 100%;
  background: linear-gradient(270deg, #56A7F2 27.97%, rgba(255, 255, 255, 0) 83.44%), #2E52F8;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.15);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  height: 52px;
  border-radius: 28px;
  transition: 324ms all cubic-bezier(0, 0, 0.2, 1);

  &:hover {
    background-color: #006097;
  }
`;