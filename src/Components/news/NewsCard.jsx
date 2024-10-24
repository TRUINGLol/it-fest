import React from "react";
import cl from "./NewsCard.module.css";

export default function NewsCard({title, body, date}){
    return (
        <div className={cl.NewsCard}>
            <h2>{title}</h2>
            <p className={cl.date}>{date}</p>
            <p className={cl.body}>{body}</p>
        </div>
    );
}