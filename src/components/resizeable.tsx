import { loadFromLocalStore, saveToLocalStorage } from "libs/localstore";
import React, { useEffect, useRef, useState } from "react";
import { ResizableBox } from 'react-resizable';
import ResizeHandler from "components/resize-handler";
import { initDimensions } from 'libs/dimensions'
import { Idimension } from 'types'


interface Iprops {
    firstField: React.ReactElement,
    secondField: React.ReactElement
}

function Resizeable({ firstField, secondField }: Iprops) {

    const [dimension, setDimension] = useState<Idimension>({width: 0, height: 0})

    useEffect(() => {
        initDimensions(setDimension)
    }, [])
    

    const ref = useRef<HTMLDivElement>(null)

    const saveWidth = (width: number) => {
        const k = width / dimension.width;
        if (k > 0 && k < 1) {
            saveToLocalStorage('SCALE', k.toString())
        } else {
            saveToLocalStorage('SCALE', '0.5')
        }
        
    }

    const initWidth = () => {
        const lastScale = loadFromLocalStore('SCALE')
        if (!lastScale) return dimension.width / 2

        let factWidth = dimension.width * (+lastScale);
        if (factWidth > dimension.width - 250) factWidth = dimension.width - 250
        if (factWidth < 250) factWidth = 250

        return factWidth
    }

    return ( 
        <div className="resizeable" ref={ref}>
            <ResizableBox
                width={initWidth()}
                height={dimension.height - 167}
                axis="x"
                minConstraints={[250, 0]}
                maxConstraints={[dimension.width-250, dimension.width]}
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