import Main from "../../Pages/Main.jsx";
import NotFound from "../../Pages/NotFound.jsx";

//Обьект отвечающий за хранение всех маршрутов сайта

//Публичные маршруты по которым может проходить каждый пользователь
export const PublicRoutes = [
    {path:'/main',element:<Main/>},
    {path:'/404NotFound', element:<NotFound/>}
]

//Частные маршруты по которым могут проходить ограниченный круг пользователей (админы, зарегестрированные пользователи)
export const PrivateRoutes = [
    {}
]