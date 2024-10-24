import React, {useState} from "react";
import cl from "./Footer.module.css";

export default function Footer(){
    
    const [email, setEmail] = useState('');
    
    function submitHandler(e){
        e.preventDefault();
        
        //в идеале здесь должна быть работа с сервером
        //но мы сохраняем это в localStorage

        localStorage.setItem('email', email);
    }

    return (
        <div className={cl.Footer}>
            <div className={cl.res}>
                <h3>Внешние ресурсы</h3>
                <ul>
                    <li>Министерство образования и науки РФ</li>
                    <li>Министерство просвещения РФ</li>
                    <li>Министерство образования и науки Челябинской области</li>
                    <li>Единая коллекция цифровых образовательных ресурсов</li>
                    <li>Портал государственных услуг РФ</li>
                    <li>Федеральный портал “Российское образование”</li>
                    <li>Телефон доверия для детей, подростков и их родителей</li>
                    <li>ЗНАНИУМ. Электронная библиотечная система</li>
                    <li>ГТО</li>
                </ul>
            </div>
            <div id="contact" className={cl.contactForm}>
                <h3>Форма обратной связи</h3>
                <form onSubmit={submitHandler}>
                    <input type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <button type="submit">СВЯЗАТЬСЯ</button>
                </form>
            </div>
        </div>
    );
}