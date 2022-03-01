/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */

import { Idimension } from 'types'

interface Icallback {
    (data: Idimension): void
}

export const initDimensions = (callback : Icallback) => {
    const onDimensionChange = () => {
        let newWidth = 0;
        let newHeight = 0;

        if (document.fullscreenElement) {
            newWidth = window.screen.width
            newHeight = window.screen.height
        } else {
            newWidth = document.body.clientWidth
            newHeight = document.body.clientHeight
        }
        if (newWidth < 400) newWidth = 400
        if (newHeight < 400) newHeight = 400

        console.log('new dimension is' , newWidth, newHeight)

        callback({
            width: newWidth,
            height: newHeight
        })
    }
    addEventListener('fullscreenchange', onDimensionChange);
    addEventListener('resize', onDimensionChange);
    onDimensionChange()
}

export const initFullscreen = (callback: (fullscreen: boolean) => void) => {
    callback(false)

    const onFullscreenChanged = () => {
        if (document.fullscreenElement) return true
        return false
    }

    addEventListener('fullscreenchange', () => callback(onFullscreenChanged()));
}