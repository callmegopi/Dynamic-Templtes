var heading = document.createElement("h1")
var anchorTag = document.createElement("a")
anchorTag.innerHTML = "Basic 84"
heading.appendChild(anchorTag)
var heading2 = document.createElement("h2")
heading2.innerHTML = "Free HTML5 Website Template"
heading.appendChild(heading2)

document.getElementById("hgroup").appendChild(heading)

// ============= slider ==========
var anchorTag_slider = document.createElement("a")
var imgElement = document.createElement("img")
imgElement.setAttribute("src", "./images/demo/960x360.gif")
anchorTag_slider.appendChild(imgElement)
document.getElementById("slider").appendChild(anchorTag_slider)

// // ========== shout ====================
var para = document.createElement("p")
para.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt namjusto cras urna."
document.getElementById("shout").appendChild(para)

// // ================= services article ======================
for (i = 0; i < 3; i++) {
    var articleElement = document.createElement("article")
    var figureElement = document.createElement("figure")
    var imgElement_2 = document.createElement("img")
    imgElement_2.setAttribute("src", "./images/demo/32x32.gif")
    imgElement_2.style.width = "32"
    imgElement_2.style.height = "32"
    figureElement.appendChild(imgElement_2)
    var header = document.createElement("strong")
    header.innerHTML = "Lorum ipsum dolor"
    var para2 = document.createElement("p")
    para2.innerHTML = "This is a W3C compliant free website template from <a href=https://www.os-templates.com title=Free Website Templates>OS Templates</a>. For full terms of use of this template please read our <a href=https://www.os-templates.com/template-terms><a href=https://www.os-templates.com/template-terms>website template licence</a>."
    var para21 = document.createElement("p")
    para21.setAttribute("class", "more")
    var anchorTag_2 = document.createElement("a")
    anchorTag_2.innerHTML = "Read More &raquo;"
    para21.appendChild(anchorTag_2)

    articleElement.appendChild(figureElement)
    articleElement.appendChild(header)
    articleElement.appendChild(para2)
    articleElement.appendChild(para21)

    document.getElementById("services").appendChild(articleElement)
}


// ================ services latest =======================
for (i = 0; i < 4; i++) {
    var article_3 = document.createElement("article")
    article_3.setAttribute("class", "one_quarter")
    var figureElement_3 = document.createElement("figure")
    var imgElement_3 = document.createElement("img")
    imgElement_3.setAttribute("src", "./images/demo/215x315.gif")
    imgElement_3.style.width = "215"
    imgElement_3.style.height = "315"
    figureElement_3.appendChild(imgElement_3)
    var figcaption_3 = document.createElement("figcaption")
    figcaption_3.innerHTML = "Image Caption Here"
    figureElement_3.appendChild(figcaption_3)
    article_3.appendChild(figureElement_3)

    document.getElementById("latest").appendChild(article_3)
}