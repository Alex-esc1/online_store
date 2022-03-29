import React, { useState } from 'react';
import {Button, Container, Form, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {NavLink, useLocation} from 'react-router-dom';
import {login, registration} from '../http/userAPI';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }
    
    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите Пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Пройти регистрацию</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                        }
                    </Row>
                    <Button 
                        className='align-self-end' 
                        onClick={click}
                        variant={"outline-success"}>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;