import React from "react";
import cl from "./Styles/News.module.css";
import Header from "../Components/header/Header";
import NewsCard from "../Components/news/NewsCard.jsx";

//Страница на которой отображенны новости
/**
 * @param {news} Массив объектов новостей 
 */

export default function News({news}){
    return(
        <div>
            <Header/>
            <div className={cl.News}>
                <h2>Новости нашего колледжа</h2>
                <div className={cl.NewsPlace}>
                    {
                        Object.keys(news).length !==0 ? news.map((n)=><NewsCard key={n.body} title={n.title} body={n.body} date={n.date}/>)
                         :
                         <p className={cl.None}>На данный момент здесь ничего нету</p>
                    }
                </div>
            </div>
        </div>
    );
}