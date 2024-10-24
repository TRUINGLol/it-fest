import React, { useState } from "react";
import Header from '../Components/header/Header';
import { useAuth } from "../Components/context/AuthContext";
import cl from './Styles/AdminPanel.module.css';
import { useNavigate } from "react-router-dom";

export default function AdminPanel({setNews}){
    
    const [newDataHeader, setDataHeader] = useState("");
    const [newDataBody, setDataBody] = useState("");
    const [newDataDate, setDataDate] = useState("");

    const {logout} = useAuth();

    const nav = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const data = {header:newDataHeader, body:newDataBody, date:newDataDate};

        setNews(prevState=>[...prevState, data]);
        setDataHeader("");
        setDataBody("");
        setDataDate("");
    }

    function logoutHandler(){
        nav('/main');
        logout();
    }

    return (
        <div>
            <Header/>
            <div className={cl.admin}>
                <h2>Админ панель</h2>

                <form onSubmit={handleSubmit}>
                    <h2>Добавить новость</h2>

                    <input type="text" 
                    value={newDataDate}
                    onChange={(e)=>setDataDate(e.target.value)}
                    placeholder="Дата новости"
                    required/>

                    <input type="text"
                    value={newDataHeader}
                    onChange={(e)=>setDataHeader(e.target.value)}
                    placeholder="Загаловок"
                    required/>
                    
                    <input type="text" 
                    value={newDataBody}
                    onChange={(e)=>setDataBody(e.target.value)}
                    placeholder="Новость"
                    required/>

                    <button className={cl.b} type="submit">Создать</button>
                </form>
            </div>
            <button onClick={logoutHandler}>Выйти из профиля</button>
        </div>
    );
}