import React, {useContext,createContext,useState, useEffect} from "react";

//Контекст для управления авторизацией

const AuthContext = createContext();

export function AuthProvider({children}){
    
    const [isAuth, setIsAuth] = useState(()=>{
        return localStorage.getItem('isAuth') === 'true';
    });

    //Логика авторизации
    const login = (credentials) => {
        //используем переменные окружения так как нету сервера(((
        if(credentials.username === process.env.REACT_APP_ADMIN_USERNAME && credentials.password === process.env.REACT_APP_ADMIN_PASSWORD){
            setIsAuth(true);
            localStorage.setItem('isAuth', 'true');
        }
    };

    //Логика выхода
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('isAuth');
    }

    //Проверка статуса при запуске сайта
    useEffect(()=>{
        const checkAuth = ()=>{
            const authStatus = localStorage.getItem('isAuth');
            setIsAuth(authStatus==='true');
        }
        checkAuth();
    },[]);
    
    
    return (
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

//Хук для использования этого контекста
export function useAuth(){
    return useContext(AuthContext);
}