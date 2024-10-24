import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./Components/route/AppRouter";
import useNews from "./Hooks/useNews";
import { AuthProvider } from "./Components/context/AuthContext";

export default function App(){
  //Объкет для хранения состояния новостей
  const [news,setNews] = useNews();
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter news={news} setNews={setNews}/>
      </AuthProvider>
    </BrowserRouter>
  );
}