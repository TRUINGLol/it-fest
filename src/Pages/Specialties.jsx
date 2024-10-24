import React from "react";
import Spec from "../Components/spec/Spec";
import cl from "./Styles/Specialties.module.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

export default function Specialties(){
    return (
        <div>
            <Header/>
            <h2 className={cl.h2}>Наши специальности</h2>
            <div className={cl.Spec}>
                <Spec text={"07.02.01 Архитектура"}/>
                <Spec text={"08.02.01 Строительство и эксплуатация зданий и сооружений"}/>
                <Spec text={"08.02.04 Водоснабжение и водоотведение"}/>
                <Spec text={"08.02.07 Монтаж и эксплуатация внутренних сантехнических устройств, кондиционирования воздуха и вентиляции"}/>
                <Spec text={"08.02.09 Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий"}/>
                <Spec text={"08.02.11 Управление, эксплуатация и обслуживание многоквартирного дома"}/>
                <Spec text={"08.02.13 Монтаж и эксплуатация внутренних сантехнических устройств кондиционирования воздуха и вентиляции"}/>
                <Spec text={"08.02.14 Эксплуатация и обслуживание многоквартирного дома"}/>
                <Spec text={"22.02.08 Металлургическое производство"}/>
            </div>
            <Footer/>
        </div>
    );
}