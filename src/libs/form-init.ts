
import { Iitem, Iinput } from '../types'

interface IformInit {
    (
        data: Iitem[],
        setFormdata: {
            (value: Iinput[]) : void
        }
    ) : void
}

const formInit : IformInit = (data, setFormdata) => {
    const initFormdata = data.map((item: Iitem) =>
            ({ value: '', id: item.id, required: item.required, error: false })
        )
    setFormdata(initFormdata)
}

export default formInit