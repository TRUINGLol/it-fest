import {useState, useEffect} from "react";

//Хук отвечающий за логику хранения новостей

export default function useNews(){
    const [news,setNews] = useState(()=>{
        const savedNews = localStorage.getItem("news");
        return savedNews ? JSON.parse(savedNews) : [];
      });
    
      useEffect(()=>{
        localStorage.setItem("news", JSON.stringify(news));
      },[news]);
    return [news,setNews];
}