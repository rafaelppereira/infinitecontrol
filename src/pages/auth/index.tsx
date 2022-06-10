import Head from "next/head";
import { 
  AuthContainer, 
  Box,
  FormInput,
  InputContainer,
  SignInButton
} from "../../styles/pages/Auth";

import { User, Lock, Key, Check } from 'phosphor-react';

export default function Auth() {
  return (
    <> 
      <Head>
        <title>Faça login no Infinite Control | Acesse o Infinite Dashboard</title>
      </Head>
      <AuthContainer> 
        <img src="/assets/logo-full.svg" alt="Logo completa do Infinite Control" />
        <Box>
          <div>
            <h2>Acesse sua conta</h2>
            <p>Use suas credenciais para acessar</p>
          </div>

          <FormInput>
            <InputContainer>            
              <div className="wrapper">
                <User size={18} color="#818181" />
                <input type="text" placeholder="Usuário credenciado" />
              </div>
              <div className="wrapper">
                <Lock size={18} color="#818181" />
                <input type="password" placeholder="Senha" />
              </div>
              <div className="wrapper">
                <Key size={18} color="#818181" />
                <input type="text" placeholder="Chave token de acesso" />
              </div>
            </InputContainer>
            <div className="connected">
              <div>
                <label>
                  <input type="checkbox" hidden />
                  <div className="checkbox">
                    <Check size={10} color="#ffffff" />
                  </div>
                  <span>Permanecer conectado por 2 dias</span>
                </label>
              </div>
              <a href="#">Esqueceu a senha?</a>
            </div>

            <SignInButton>
              Entrar na plataforma
            </SignInButton>
          </FormInput>
        </Box>
        <p className="copyright">@infinitecontrol  • 2022 • Privacidade e termos</p>
      </AuthContainer>
    </>
  );
}