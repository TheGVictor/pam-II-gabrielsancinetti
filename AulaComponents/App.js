import React from 'react';
import { 
  BodyMain,
  Title,
  Subtitle,
  SignInArea,
  InfoAccount,
  InputEmail,
  InputPassword,
  PasswordForgot,
  SignInButton
 } from './styles';

const Login = () => {
  return (
    
    <BodyMain>
      <Title>Welcome back!</Title>
      <Subtitle>We're so excited to see you again!</Subtitle>

      <SignInArea>
      <InfoAccount>Account Information</InfoAccount>
      <InputEmail placeholder = {"Email or Phone Number"}  placeholderTextColor = "#83878A"></InputEmail>
      <InputPassword placeholder = {"Password"}  placeholderTextColor = "#83878A" secureTextEntry={true}></InputPassword>
      <PasswordForgot>Forgot your password??</PasswordForgot>
      <SignInButton title = "Login" color  = "#5863F0"/>
      </SignInArea>

    </BodyMain>
    
  );
}


export default Login;