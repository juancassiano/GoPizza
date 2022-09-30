import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import {Input} from '@components/Input/Index';
import { Button } from '@components/Button/Index';

import BrandImg from '@assets/brand.png';
import {Container, Content, Title, Brand, ForgotPasswordButton, ForgotPasswordLabel} from './styles';

export function SignIn(){
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS ==='ios' ? 'padding' : undefined }>
        <Content>
          < Brand source="BrandImg" />
          <Title>Login</Title>
          <Input 
            placeholder="Email" 
            type="secondary" 
            autoCorrect={false} 
            autoCapitalize="none"
          />
          <Input 
            placeholder="Senha" 
            type="secondary" 
            secureTextEntry
          />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha Senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type= "secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
