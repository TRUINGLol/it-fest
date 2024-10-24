import React from "react";
import cl from "./Styles/NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className={cl.NotFound}>
            <p>Ууууупс.... Что то пошло не так</p>
            <p>404 NOT FOUND</p>
            <Link to={'/main'}>Вернуть время вспять</Link>
        </div>
    );
}