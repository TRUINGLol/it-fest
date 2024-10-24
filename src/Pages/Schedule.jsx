import React from "react";
import cl from "./Styles/Schedule.module.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import DownloadButton from "../Components/downloadButton/DownloadButton";

export default function Schedule(){
    
    const files = [
        { name: '25 октября, пятница 1,2 курсы', url: '../Schedules/25 октября, пятница 1,2 курсы.doc', filename: '25 октября, пятница 1,2 курсы.doc' },
        { name: '26 октября, пятница 1,2 курсы', url: '../Schedules/26 октября, пятница 1,2 курсы.doc', filename: '26 октября, пятница 1,2 курсы.doc' },
        { name: '28 октября, пятница 1,2 курсы', url: '../Schedules/28 октября, пятница 1,2 курсы.doc', filename: '28 октября, пятница 1,2 курсы.doc' }
    ];
    
    return (
        <div>
            <Header/>
            <div className={cl.Schedule}>
                <h2>Расписание ЮУРГТК</h2>
                {
                    files.map((file)=>
                        <DownloadButton key={file.url} name={file.name} url={file.url} filename={file.filename}/>)
                }
            </div>
            <Footer/>
        </div>
    );
}