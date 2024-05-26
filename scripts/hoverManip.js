const socialIcons = Array.from(document.querySelectorAll('.social-icon'))

socialIcons.forEach(icon => {
    const defaultSrc = icon.getAttribute("src")
    const extension = defaultSrc.slice(-4)
    const defaultSrcNoExtension = defaultSrc.slice(0, -4)
    
    icon.addEventListener("mouseover", () => {
        icon.src = `${defaultSrcNoExtension}-accent${extension}`
    })
    icon.addEventListener("mouseout", () => {
        icon.src = defaultSrc
    })
})