import React from "react";
import FormatButton from "components/format-button";
import SendButton from "components/send-button";
import { observer } from "mobx-react-lite";

function Footer() {

    return ( 
        <div className="footer">
            <SendButton />
            <p className="github">@ilyashandulskiy</p>
            <FormatButton />
        </div>
     );
}

export default observer(Footer);