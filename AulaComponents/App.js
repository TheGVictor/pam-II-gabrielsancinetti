import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';
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
      <InputEmail placeholder = {"Email or Phone Number"}  placeholderTextColor = "#FFF"></InputEmail>
      <InputPassword placeholder = {"Password"}  placeholderTextColor = "#FFF" secureTextEntry={true}></InputPassword>
      <PasswordForgot>Forgot your password??</PasswordForgot>
      </SignInArea>

      <SignInButton title = "Login" />
    </BodyMain>
    
  );
}


export default Login;