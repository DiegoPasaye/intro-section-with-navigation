const funciones = document.querySelector(".funcionesContainer")
const menuFeatures = document.querySelector(".menuFeatures")
const menuCompany = document.querySelector(".menuCompany")
const company = document.querySelector(".funcionesCompany")
let estado = "off"
let estadoCompany = "off"
const featuresImage = document.querySelector(".featuresImage")
const main = document.querySelector(".container")
const menuMobile = document.querySelector(".menuMobile")
const openMenu = document.querySelector(".right")
const estadoMobile = "off"
const closeMenu = document.querySelector(".closeImg")

const mostrar = () => {
    if(estado == "off"){
        menuFeatures.style.visibility = "visible"
        featuresImage.src  = "images/icon-arrow-up.svg"
        estado = "on"
    }else{
        menuFeatures.style.visibility = "hidden"
        featuresImage.src  = "images/icon-arrow-down.svg"
        estado = "off"
    }
}
const mostrarCompany = () => {
    if(estadoCompany == "off"){
        menuCompany.style.visibility = "visible"
        menuCompany.classList.add = "opacidad"
        menuCompany.src  = "images/icon-arrow-up.svg"
        estadoCompany = "on"
    }else{
        menuCompany.style.visibility = "hidden"
        menuCompany.src  = "images/icon-arrow-down.svg"
        estadoCompany = "off"
    }
}

funciones.addEventListener("click", mostrar)
company.addEventListener("click", mostrarCompany)

openMenu.addEventListener("click", () => {
    menuMobile.style.visibility = "visible"
})
closeMenu.addEventListener("click", () => {
    menuMobile.style.visibility = "hidden"
})