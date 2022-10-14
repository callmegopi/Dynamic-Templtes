var heading = document.createElement("h1")
var anchorTag = document.createElement("a")
anchorTag.innerHTML = "Basic 85"
heading.appendChild(anchorTag)

var heading2 = document.createElement("h2")
heading2.innerHTML = "Free HTML5 Website Template"
heading.appendChild(heading2)

document.getElementById("hgroup").appendChild(heading)

// ============== shout ==================
var para = document.createElement("p")
para.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."

document.getElementById("shout").appendChild(para)

// =================== section latest =============
var articleElement = document.createElement("article")
var figureElement = document.createElement("figure")
var ulElement = document.createElement("ul")
for (i = 0; i < 4; i++) {
    var liElement = document.createElement("li")
    liElement.setAttribute("class", "one_quarter")
    var imgElement = document.createElement("img")
    imgElement.setAttribute("src", "./images/demo/215x150.gif")
    imgElement.style.width = "215"
    imgElement.style.height = "150"
    liElement.appendChild(imgElement)
    ulElement.appendChild(liElement)
    figureElement.appendChild(ulElement)
    articleElement.appendChild(figureElement)

    document.getElementById("latest").appendChild(articleElement)
}

// =================== services =======================
for (i = 0; i < 8; i++) {
    var article_2 = document.createElement("article")
    article_2.setAttribute("class", "one_quarter")
    var figureElement_2 = document.createElement("figure")
    var imgElement_2 = document.createElement("img")
    imgElement_2.setAttribute("src", "./images/demo/32x32.gif")
    imgElement_2.style.width = "32"
    imgElement_2.style.height = "32"
    figureElement_2.appendChild(imgElement_2)
    var strongElement = document.createElement("strong")
    strongElement.innerHTML = "Lorum Ipsum Dolor"
    var para_2 = document.createElement("p")
    para_2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    var para_2_1 = document.createElement("p")
    para_2_1.setAttribute("class", "more")
    var anchorTag_2 = document.createElement("a")
    anchorTag_2.innerHTML = "Read More &raquo;"
    para_2_1.appendChild(anchorTag_2)

    article_2.appendChild(figureElement_2)
    article_2.appendChild(strongElement)
    article_2.appendChild(para_2)
    article_2.appendChild(para_2_1)

    document.getElementById("services").appendChild(article_2)
}

