import React from "react";
import cl from "./Spec.module.css";

export default function Spec({text}){
    return(
        <div className={cl.spec}>
            <p>{text}</p>
        </div>
    );
}