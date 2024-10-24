import React from "react";
import cl from "./DownloadButon.module.css";

//Компонент кнопки скачивания файла

export default function DownloadButton({name,url,filename}){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className={cl.button} onClick={handleDownload}>
            Скачать {name}
        </button>
    );
}