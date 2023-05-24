import {FC, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store';
import {devDomain} from '../../vars';

import './header.css';

interface UserI {
    id: number,
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

    const token = useSelector((state: RootState) => state.authTokenReducer.token);
    if(token) sessionStorage.setItem('token', token);

    const getUserData = async () => {
        if(token || sessionStorage.getItem('token') ) {
            await fetch(`${devDomain}/auth/user?token=${token || sessionStorage.getItem('token')}`)
            .then(res => res.json())
            .then(res => {
                setUserData(res[0])
            });
        }
    }

    console.log(userData)

    useEffect(() =>{
        getUserData();
    }, []);

    return (
        <>
            <header className="header">
                {userData?.name}
                <input
                    type="text" 
                    className="input" 
                    placeholder="Поиск"
                    id="employees"
                    required
                />
                <Link to="/login">
                    <button className="btn header__btn">Вход</button>
                </Link>
            </header>
        </>
    );
};

export default Header;