const preloadImages = (input: string[]) => {
    const images = input
    const HTMLimages = []
    for (let i = 0; i < images.length; i+=1) {
        HTMLimages[i] = new Image();
        HTMLimages[i].src = images[i];
    }
}

export default preloadImages