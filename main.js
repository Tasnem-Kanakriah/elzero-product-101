document.body.style.backgroundColor = "#F5E8DD"
document.body.style.textAlign = "center"
document.body.style.fontSize = "18px"
document.body.style.fontFamily = "cursive"

//! start header
// header
let header = document.createElement("div")
header.id = "header"
header.style.padding = "0 20px"
header.style.backgroundColor = "#CCD3CA"
header.style.marginBottom = "10px"
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"

// logo in left in header
let logo = document.createElement("div")
let textLogo = document.createTextNode("LOGO")
logo.id = "logo"
logo.appendChild(textLogo)

// append logo to header
header.appendChild(logo)

// menu in right in header
let menu = document.createElement("div")
menu.id = "menu"
menu.style.display = "flex"
menu.style.gap = "10px"

// p in menu
let menuP1 = document.createElement("p")
menuP1.id = "home"
menuP1.style.opacity = 0.5
menu.appendChild(menuP1)
let textP1 = document.createTextNode("Home")
menuP1.appendChild(textP1)

let menuP2 = menuP1.cloneNode(true)
menuP2.id = "about"
menuP2.innerHTML = "About"
menu.appendChild(menuP2)

let menuP3 = menuP1.cloneNode(true)
menuP3.id = "service"
menuP3.innerHTML = "Service"
menu.appendChild(menuP3)

let menuP4 = menuP1.cloneNode(true)
menuP4.id = "contact"
menuP4.innerHTML = "Contact"
menu.appendChild(menuP4)

// append menu to header
header.appendChild(menu)

// append header to body
document.body.prepend(header)
//! end header



//? start content
let content = document.createElement("div")
content.id = "content"
content.style.display = "grid"
content.style.gap = "20px"
content.style.gridTemplateColumns = "repeat(3,1fr)"

for (let i = 0; i < 15; i++) {
    let product = document.createElement("div")
    product.id = `product-${i+1}`
    product.style.backgroundColor = "#fff"
    product.style.paddingBottom = "16px"
    product.style.backgroundColor = "#EED3D9"

    let productNum = document.createElement("h2")
    let num = document.createTextNode(`${i+1}`)
    productNum.id = `pro-${i+1}`
    product.appendChild(productNum)
    productNum.appendChild(num)

    let pTextContainer = document.createElement("p") ;
    let textProduct = document.createTextNode("product")
    pTextContainer.appendChild(textProduct)
    pTextContainer.style.opacity = "0.5"
    product.appendChild(pTextContainer)

    content.appendChild(product)

    header.after(content)
}
//? end content



//* start footer
//footer
let footer = document.createElement("footer")
let footerText = document.createTextNode("Copyright 2021")
footer.id = "footer"
footer.style.backgroundColor = "#B5C0D0"
footer.style.padding = "16px"
footer.style.marginTop = "20px"
footer.appendChild(footerText)
content.after(footer)
//* end footer