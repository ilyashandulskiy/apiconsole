import { loadFromLocalStore, saveToLocalStorage } from "libs/localstore";
import React, { useEffect, useRef, useState } from "react";
import { ResizableBox } from 'react-resizable';
import ResizeHandler from "components/resize-handler";

interface Iprops {
    firstField: React.ReactElement,
    secondField: React.ReactElement
}

function Resizeable({ firstField, secondField }: Iprops) {

    const ref = useRef<HTMLDivElement>(null)
    const [componentHeight, setComponentHeight] = useState<number>(0)

    const { innerWidth, innerHeight } = window;

    useEffect(() => {
        setComponentHeight(ref.current?.clientHeight || 0)
        window.addEventListener('resize', () => setComponentHeight(ref.current?.clientHeight || 0));
      return window.removeEventListener('resize', () => setComponentHeight(ref.current?.clientHeight || 0));
    }, [])

    const saveWidth = (width: number) => {
        saveToLocalStorage('SCALE', (width/innerWidth).toString())
    }

    const initWidth = () => {
        const lastScale = loadFromLocalStore('SCALE')
        if (!lastScale) return innerWidth / 2

        let factWidth = innerWidth * (+lastScale);
        if (factWidth > innerWidth - 250) factWidth = innerWidth - 250
        if (factWidth < 250) factWidth = 250

        return factWidth
    }

    return ( 
        <div className="resizeable" ref={ref}>
            <ResizableBox
                width={initWidth()}
                height={componentHeight}
                axis="x"
                minConstraints={[250, 0]}
                maxConstraints={[innerWidth-250, innerHeight]}
                handle={ResizeHandler}
                onResizeStop={
                    (_event, data) => saveWidth(data.size.width)
                }
            >
                <div className="resizeable-left">
                    {firstField}
                </div>
            </ResizableBox>
            <div className="resizeable-right">
                {secondField}
            </div>
            
        </div>
     );
}

export default Resizeable;