import {FC, useState, FormEvent} from 'react';
import {Navigate, Link} from "react-router-dom";
import { devDomain } from '../../vars';

import './regPage.css'


interface RegisterI {
    name: string,
    surname: string,
    fathername: string,
    inn: string,
    password: string
}


const RegPage: FC = () => {
    const [formData, setFormData] = useState<RegisterI>({
        name: '',
        surname: '',
        fathername: '',
        inn: '',
        password: ''
    });

    const [registrationStatus, setRegistrationStatus] = useState('');

    const regHandler = async (e: FormEvent) => {
        e.preventDefault();
        console.log(formData)
        await fetch(`${devDomain}/auth/registration`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then(res => {
            if(res.result === 'USER_EXIST') {
                setRegistrationStatus('USER_EXIST');
            } else {
                setRegistrationStatus('SUCCESS');
            }
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const registrationStatusText = () => {
        if (registrationStatus === 'SUCCESS') {
            return <Navigate to="/login" replace={true}/> 
        } else if (registrationStatus === 'USER_EXIST') {
            return 'Пользователь с таким инн существует';
        }

        return '';
    }

    return (
        <div className='container'>
            <div className="back-link-wrapper back-link_margined">
                <Link to="/">
                    <span className="back-link">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 13L1.5 7L7.5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Назад
                    </span>
                </Link>
            </div>
            <form action="post" className="form" id="reg-form" onSubmit={(e: FormEvent) => regHandler(e)}>
                <h1 className="title form__title">Регистрация</h1>
                <label htmlFor="name" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setFormData({
                            ...formData,
                            name: (e.target as HTMLInputElement).value
                        })} 
                        type="text" 
                        className="input" 
                        id="name"
                        required
                    />
                    <span className="input__label-text">Имя</span>
                </label>
                <label htmlFor="surname" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setFormData({
                            ...formData,
                            surname: (e.target as HTMLInputElement).value
                        })} 
                        type="text" 
                        className="input" 
                        id="surname"
                        required
                    />
                    <span className="input__label-text">Фамилия</span>
                </label>
                <label htmlFor="fathername" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setFormData({
                            ...formData,
                            fathername: (e.target as HTMLInputElement).value
                        })} 
                        type="text" 
                        className="input" 
                        id="fathername"
                        required
                    />
                    <span className="input__label-text">Отчество</span>
                </label>
                <label htmlFor="inn" className="input__label">
                    <input 
                        onInput={(e: FormEvent) => setFormData({
                            ...formData,
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
                        onInput={(e: FormEvent) => setFormData({
                            ...formData,
                            password: (e.target as HTMLInputElement).value
                        })} 
                        type="password" 
                        className="input" 
                        id="password"
                        required
                    />
                    <span className="input__label-text">Пароль</span>
                </label>
                <input type="submit" value='Зарегестрироваться' className="btn form__btn"/>
                {
                    registrationStatusText()
                }
                <span className="form__text">
                    Уже есть аккаунт?
                    <Link to="/login">
                        <span className="link form__changer">Войти</span>
                    </Link>
                </span>
            </form>
        </div>
    )
}; 

export default RegPage;