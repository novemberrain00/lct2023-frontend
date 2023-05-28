import {FC, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../../store';
import {devDomain} from '../../vars';

import './header.css';
import { setToken } from '../../redux/authTokenSlice';

interface UserI {
    id: number | null,
    name: string,
    surname: string,
    fathername: string,
    company_name: string,
    inn: string,
    website: string,
    industry: string,
    city: string,
    job: string,
    country: string,
}

const Header: FC = () => {
    const [userData, setUserData] = useState<UserI>();
    const [isIserLoggedIn, setIsUserLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.authTokenReducer.token);
    if(token) sessionStorage.setItem('token', token);

    const getUserData = async () => {
        if(token || sessionStorage.getItem('token') ) {
            await fetch(`${devDomain}/auth/user?token=${token || sessionStorage.getItem('token')}`)
            .then(res => res.json())
            .then(res => {
                setIsUserLoggedIn(true);
                setUserData(res[0])
            });
        }
    }

    const logout = () => {
        setIsUserLoggedIn(false);
        dispatch(setToken(''));
        setUserData({
            id: null,
            name: '',
            surname: '',
            fathername: '',
            company_name: '',
            inn: '',
            website: '',
            industry: '',
            city: '',
            job: '',
            country: '',
        });

        sessionStorage.removeItem('token');
    }

    useEffect(() =>{
        getUserData();
    }, []);

    return (
        <>
            <header className="header">
                <span className="header__username">{userData?.name}</span>
                {
                    isIserLoggedIn ?
                    <button onClick={() => logout()} className="btn header__btn">Выход</button>
                    :<Link to="/login"><button className="btn header__btn">Вход</button></Link> 
                }
            </header>
        </>
    );
};

export default Header;