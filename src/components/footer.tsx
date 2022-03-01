import React from "react";
import FormatButton from "components/format-button";
import SendButton from "components/send-button";

function Footer() {

    return ( 
        <div className="footer">
            <SendButton />
            <p className="github">@ilyashandulskiy</p>
            <FormatButton />
        </div>
     );
}

export default Footer;