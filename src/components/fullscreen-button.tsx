/* eslint-disable no-restricted-globals */
import { initFullscreen } from "libs/dimensions";
import React, { useEffect, useState } from "react";

function FullscreenButton() {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

    useEffect(() => {
        initFullscreen(setIsFullscreen)
    }, [])

    const onFullscreen = () => {
        if (isFullscreen) {
            document.exitFullscreen()
        } else {
            document.body.requestFullscreen()
        }
        
    }

    const filename = isFullscreen ? 'close' : 'open';

    return ( 
        <button onClick={onFullscreen} type="button" className="fullscreen-button">
            <img src={`/images/fullscreen_${ filename }.png`} alt="fullscreen" className="fullscreen-button__image" />
        </button>
     );
}

export default FullscreenButton;