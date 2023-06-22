import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { 
  BodyMain,
  Title,
  Subtitle,
  InfoAccount,
  InputEmail,
  InputPassword,
  PasswordForgot,
  SignInButton
 } from './styles';

const Login = () => {
  return (
    
    <BodyMain>
      <Title>Welcome background!</Title>
      <Subtitle>We're so excited to see you again!</Subtitle>

      <InfoAccount>Account Information</InfoAccount>
      <InputEmail placeholder = {"Email or Phone Number"}></InputEmail>
      <InputPassword placeholder = {"Password"} secureTextEntry={true}></InputPassword>
      <PasswordForgot>Forgot your password?</PasswordForgot>

      <SignInButton value = {'Log In'} />
    </BodyMain>
    
  );
}


export default Login;