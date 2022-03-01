
const formatJSON = (input: string, checkAction: boolean) => {
    try {
        const object = JSON.parse(input)
        if (checkAction && !object.action) return null;
        return JSON.stringify(object, null, 4)
    } catch (error) {
        return null
    }
}

export default formatJSON