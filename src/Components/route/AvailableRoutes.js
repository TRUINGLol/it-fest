import Login from "../../Pages/Login.jsx";
import Main from "../../Pages/Main.jsx";
import NotFound from "../../Pages/NotFound.jsx";
import Specialties from "../../Pages/Specialties.jsx";
import Schedule from "../../Pages/Schedule.jsx";

//Обьект отвечающий за хранение всех маршрутов сайта

//Публичные маршруты по которым может проходить каждый пользователь
export const PublicRoutes = [
    {path:'/main',element:<Main/>},
    {path:'/404NotFound', element:<NotFound/>},
    {path:'/login', element:<Login/>},
    {path:'/spec', element:<Specialties/>},
    {path:'/schedule', element:<Schedule/>}
]

//Частные маршруты по которым могут проходить ограниченный круг пользователей (админы, зарегестрированные пользователи)
export const PrivateRoutes = [
    {}
]