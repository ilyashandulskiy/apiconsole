import React from "react";

function Footer() {
    return ( 
        <div className="footer">
            <button type="button" className="btn">Отправить</button>
            <p className="github">@ilyashandulskiy</p>
            <button type="button" className="format-button">
                <img src="/images/format.png" alt="format" className="format-button__image" />
                <p className="format-button__text">Форматировать</p>
            </button>
        </div>
     );
}

export default Footer;