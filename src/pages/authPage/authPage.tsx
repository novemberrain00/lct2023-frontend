import {FC, useState, FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {setToken} from '../../redux/authTokenSlice';
import {useDispatch} from 'react-redux';
import { devDomain } from '../../vars';

import './authPage.css'


interface LoginI {
    inn: string,
    password: string
}

const AuthPage: FC = () => {
    const dispatch = useDispatch();

    const [authData, setAuthData] = useState<LoginI>({
        inn: '',
        password: ''
    })

    const [authStatusText, setAuthStatusText] = useState('');
    const navigate = useNavigate();

    const authHandler = async (e: FormEvent) => {
        e.preventDefault();
        await fetch(`${devDomain}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(authData)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res.token) {
                setAuthStatusText('SUCCESS');
                dispatch(setToken(res.token));
                navigate('/');
            } else {
                setAuthStatusText('FAIL');
            }
        });
    };

    return (
        <>
            <form action="post" className="form" id="auth-form" onSubmit={(e: FormEvent) => authHandler(e)}>
                <h1 className="title form__title">Вход</h1>
                <label htmlFor="inn" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setAuthData({
                            ...authData,
                            inn: (e.target as HTMLInputElement).value
                        })} 
                        type="text" 
                        className="input" 
                        id="inn"
                        required
                    />
                    <span className="input__label-text">ИНН</span>
                </label>
                <label htmlFor="password" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setAuthData({
                            ...authData,
                            password: (e.target as HTMLInputElement).value
                        })} 
                        type="password" 
                        className="input" 
                        id="password"
                        required
                    />
                    <span className="input__label-text">Пароль</span>
                </label>
                <input type="submit" value='Войти' className="btn form__btn"/>
                {authStatusText === 'FAIL' ? 'Неверный логин или пароль' : ''}
                <span className="form__text">
                    Нет аккаунта?
                    <Link to="/registration">
                        <span className="link form__changer">Зарегестрироваться</span>
                    </Link>
                </span>
            </form>
        </>
    )
}; 

export default AuthPage;