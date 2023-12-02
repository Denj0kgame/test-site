function changePrice(element) {
    let elementParent = element.parentNode.children
    for (let i = 0; i < elementParent.length; i++) {
        // console.log(i)
        if (elementParent[i].className.indexOf(element.className) != -1) {
            elementParent[i].style.backgroundColor = "#922"
        } else {
            elementParent[i].removeAttribute('style')
        }
    }
    let priceElements = element.parentNode.parentNode.parentNode.children[2].children
    // console.log(priceElements)
    for (let i = 0; i < priceElements.length; i++) {
        if (priceElements[i].className.indexOf(element.className) != -1) {
            priceElements[i].style.display = "block"
        } else {
            priceElements[i].style.display = "none"
        }
    }
}