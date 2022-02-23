/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

function FullscreenButton() {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

    const onFullscreen = () => {
        if (isFullscreen) {
            document.exitFullscreen()
            setIsFullscreen(false)
        } else {
            document.body.requestFullscreen()
            setIsFullscreen(true)
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