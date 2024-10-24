import React, {useEffect, useState} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./AvailableRoutes";
import News from "../../Pages/News";
import AdminPanel from "../../Pages/AdminPanel";
import { useAuth } from "../context/AuthContext";

//Объект отвечающий за обработку маршрутов сайта (используется react-router-dom)

/**
 * @returns {HTML} Маршруты по которым пользователь может переходить
 */
export default function AppRouter({news,setNews}){
    
    const {isAuth} = useAuth();

    useEffect(()=>{
        console.log(isAuth);
    },[isAuth])

    return (
        <Routes>
            {
                PublicRoutes.map((route)=>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            {
                <Route key={"route-news"} path={'/news'} element={<News news={news}/>}/>
            }
            {
                PrivateRoutes.map((route)=>
                    isAuth ? <Route key={route.path} path={route.path} element={route.element}/>
                    :
                    null)
            }
            {
                isAuth ? <Route key={"route-admin"} path="/admin" element={<AdminPanel setNews={setNews}/>}/> : null 
            }
            <Route key={"route-main"} path="/" element={<Navigate to={'/main'}/>}/>
            <Route key={"route-notFound"} path="/*" element={<Navigate to={'/404NotFound'}/>}/>
        </Routes>
    );
}