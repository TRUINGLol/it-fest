import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./Components/route/AppRouter";
import useNews from "./Hooks/useNews";

export default function App(){
  //Обькет для хранения состояния новостей
  const [news,setNews] = useNews();
  return (
    <BrowserRouter>
      <AppRouter news={news} setNews={setNews}/>
    </BrowserRouter>
  );
}