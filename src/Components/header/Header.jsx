import React from "react";
import cl from './Header.module.css';
import logo from '../../Images/Logo.png';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className={cl.Header}>
            <div className={cl.up}>
                <ul>
                    <li><Link to={'/news'}>Новости</Link></li>
                    <li><Link to={'/main'}>Главная страница</Link></li>
                    <li><Link to={'/schedule'}>Расписание</Link></li>
                    <li><Link to={'/spec'}>Специальности</Link></li>
                </ul>
            </div>
            <div className={cl.bottom}>
                <div>
                    <p>г. Челябинск, ул. Горького, д. 15</p>
                    <p>Тел.: 8 (351) 775-49-79</p>
                    <p>E-mail: info@sustec.ru</p>
                </div>
                <div>
                    <img src={logo} alt="Logo" width={"300px"}/>
                </div>
                <div className={cl.ButtonDiv}>
                    <Link to="/login" className={cl.Button}>Войти</Link>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}