export const showImgFunc = (path) => {
    let modifiedString = path.replace(/\\/g, '/');
    document.documentElement.style.setProperty('--showimg' , 'flex')
    document.documentElement.style.setProperty('--imgpath' , `url(${modifiedString})`)
    document.documentElement.style.setProperty('--imgani' , 'imganimation')
}

export const closeImgFunc = () => {
    setTimeout(() => {
        document.documentElement.style.setProperty('--showimg' , 'none')
    }, 300);
    document.documentElement.style.setProperty('--imgani' , 'closeimganimation')
}