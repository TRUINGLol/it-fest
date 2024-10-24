import React, {useEffect, useState} from "react";
import { useAuth } from "../Components/context/AuthContext";
import cl from "./Styles/Login.module.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const {login} = useAuth();
    const {isAuth} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        login({username,password});
        setUsername('');
        setPassword('');
    }

    useEffect(()=>{
        if(isAuth){
            nav('/admin');
        }
    },[isAuth, nav]);
    
    return (
        <div>
            <Header/>
            <div className={cl.login}>
                <h2>Войти</h2>
                <form onSubmit={handleSubmit}>
                    <input className={cl.username} type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required/>

                    <input className={cl.password} type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>

                    <button className={cl.button} type="submit">Войти</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}
