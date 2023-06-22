import React from 'react';
import { Button, TextInput, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const BodyMain = styled(ScrollView)`
    background-color: #35383F

`

export const Title = styled(Text)`
    color: #FFF
    text-align: center
    margin-top: 50px
    font-size: 30px
    font-weight: 600
    font-family: Calibri
`

export const Subtitle = styled(Text)`
    text-align: center
    font-family: Calibri
    font-weight: bold
    color: #9A9B9F
    font-size: 17px
    margin-top: 10px
`

export const SignInArea = styled(View)`
    margin-top: 30px
    width: 95%
    align-self: center
`

export const InfoAccount = styled(Text)`
    font-family: Calibri
    font-size: 16px
    font-weight: bold
    color: #B8B9BE
    text-transform: uppercase
`

export const InputEmail = styled(TextInput)`
    background-color: #212226
`

export const InputPassword = styled(TextInput)``

export const PasswordForgot = styled(Text)``

export const SignInButton = styled(Button)``

