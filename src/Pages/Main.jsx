import React from "react";
import Header from "../Components/header/Header";
import cl from "./Styles/Main.module.css";
import Spec from "../Components/spec/Spec";
import { Link } from "react-router-dom";
import boys from "../Images/boys.jpg";
import banner from "../Images/banner.svg";
import u1 from "../Images/unity1.jpg";
import u2 from "../Images/unity2.png";
import u3 from "../Images/unity3.png";
import u4 from "../Images/unity4.png";
import u5 from "../Images/unity5.png";
import u6 from "../Images/unity6.png";
import u7 from "../Images/unity7.png";
import u8 from "../Images/unity8.png";
import u9 from "../Images/unity9.jpg";
import Footer from "../Components/footer/Footer";

//Стартовая страница сайта (/main)
export default function Main(){
    return (
        <div className={cl.Main}>
            <Header/>
            <div className={cl.profes}></div>
            <div className={cl.spec}>
                <h2>Специальности</h2>
                <div className={cl.specDiv}>
                    <div className={cl.specAbout}>
                        <p>Колледж сохраняет традицию подготовки специалистов технического профиля, причем доля технических специальностей неуклонно растет.</p>
                        <p>Колледж осуществляет подготовку по 5 направлениям:подготовка специалистов для строительной отрасли,
                                для предприятий машиностроения, подготовка
                                    специалистов связи, специалистов в области
                                        информационных технологий, специалистов в сфере землеустройства.</p>
                        <Link className={cl.specButton} to={"/spec"}>Посмотреть все специальности</Link>
                    </div>
                    <div className={cl.specIMG}><img src={boys} alt="boys" width={"392px"} height={"523px"}/></div>
                    <div className={cl.specCards}>
                        <Spec text={"15.02.07 Автоматизация технологических процессов и производств (по отраслям)"}/>
                        <Spec text={"09.02.06 Сетевое и системное администрирование"}/>
                        <Spec text={"13.02.11 Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)"}/>
                    </div>
                </div>
            </div>
            <div className={cl.gosuslugi}>
                <div className={cl.gosuslugiTEXT}>
                    <p>Есть предложения по организации учебного процесса или знаете, как сделать колледж лучше?</p>
                    <Link className={cl.gosuslugiButton} to={"https://www.gosuslugi.ru/"}>Сообщить о проблеме</Link>
                </div>
                <div className={cl.gosuslugiIMG}>
                    <img src={banner} alt="gosuslugi" />
                </div>
            </div>
            <div className={cl.unity}>
                <h2>Партнеры</h2>
                <div className={cl.unityIMG}>
                    <div className={cl.unityF}>
                        <img src={u1} alt="unitySoviet" width={"200px"}/>
                        <img src={u2} alt="Voice" width={"200px"}/>
                        <img src={u3} alt="VoiceC" width={"200px"}/>
                        <img src={u4} alt="Beto" width={"200px"}/>
                        <img src={u5} alt="Informa" width={"300px"}/>
                    </div>
                    <div className={cl.unityS}>
                        <img src={u6} alt="LD" width={"200px"}/>
                        <img src={u7} alt="CHEKPZ" width={"200px"}/>
                        <img src={u8} alt="CHTPZ" width={"200px"}/>
                        <img src={u9} alt="CHTZ" width={"200px"}/>
                    </div>
                </div>
            </div>
            <div className={cl.contact}>
                <h2>Есть вопросы?</h2>
                <p>Оставьте свои контакты и наши специалисты обязательно свяжутся с вами</p>
                <a href="#contact">ПЕРЕЙТИ</a>
            </div>
            <Footer/>
        </div>

    );
}  