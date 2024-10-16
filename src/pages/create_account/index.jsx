import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdVerifiedUser } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, FazerLogin, Paragrafo } from './styles';



import React from 'react';

const CreateAccount = () => {


    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });


    const handleCreateAccount = () =>{
        
    }
  return (
    <>
    <Header/>
    <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make a change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(handleCreateAccount)}>
                        <Input placeholder="Nome completo" leftIcon={<FaUser/>} name="name" control={control} />
                        <Input  placeholder="E-mail" leftIcon={<MdEmail />}  name="email" control={control} />
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <br/>
                    <Paragrafo>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Provacidade e os Termos de Usa da DIO
                    </Paragrafo>
                    <Row>
                    <Paragrafo>
                        Já tenho conta.
                    </Paragrafo>
                    <FazerLogin> Fazer login</FazerLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export {CreateAccount}






