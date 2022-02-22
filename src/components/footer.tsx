import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    return ( 
        <div className="footer">
            <button onClick={() => navigate('/login')} type="button" className="btn">Отправить</button>
            <p className="github">@ilyashandulskiy</p>
            <button type="button" className="format-button">
                <img src="/images/format.png" alt="format" className="format-button__image" />
                <p className="format-button__text">Форматировать</p>
            </button>
        </div>
     );
}

export default Footer;