import React, {useState} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./AvailableRoutes";

//Объект отвечающий за обработку маршрутов сайта (используется react-router-dom)

/**
 * @returns {HTML} Маршруты по которым пользователь может переходить
 */
export default function AppRouter(){
    
    //TODO:Сделать логику Auth, отдлеьный файл?
    //25
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Routes>
            {
                PublicRoutes.map((route)=>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            {
                PrivateRoutes.map((route)=>
                    isAuth ? <Route key={route.path} path={route.path} element={route.element}/>
                    :
                    <Route path="/login" element={<Navigate to={'/login'}/>}/>)
            }
            <Route path="/" element={<Navigate to={'/main'}/>}/>
            <Route path="/*" element={<Navigate to={'/404NotFound'}/>}/>
        </Routes>
    );
}