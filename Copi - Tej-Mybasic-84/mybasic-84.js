var h1 = document.createElement("h1")
h1.innerText = "Basic.84"
var print = document.getElementById("hgroup").appendChild(h1)

console.log(print)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Templates"
document.getElementById("hgroup").appendChild(h2)

// nav bar
for (i = 0; i < 5; i++) {
    var li = document.createElement("li")
    li.setAttribute("class", "lis")
    var anchor = document.createElement("a")
    anchor.innerText = "Text Link"
    li.appendChild(anchor)
    document.getElementById("navul").appendChild(li)
}
var print = document.getElementById("navul")
console.log(print)

for (j = 0; j < 4; j++) {
    if (j = 4) {
        var a = document.createElement("a")
        a.innerText = "Users Data"
        document.getElementsByClassName("lis")[j].appendChild(a)
        a.setAttribute("href", "./users.html")
        a.setAttribute("id", "user")


    }

}

var a1 = document.createElement("a")
document.getElementById("slider").appendChild(a1)
a1.setAttribute("id", "imga")

var img = document.createElement("img")
document.getElementById("imga").appendChild(img)
img.setAttribute("src", "./images/demo/banner.gif")

var p = document.createElement("p")
p.innerText = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt namjusto cras urna."
document.getElementById("shout").appendChild(p)

document.getElementById("h1s").innerText = "Servics We Offer"
for (i = 0; i < 3; i++) {
    var article = document.createElement("article")
    document.getElementById("services").appendChild(article)
}
for (j = 0; j < 3; j++) {
    var figure = document.createElement("figure")
    figure.setAttribute("class", "img2")
    document.getElementsByTagName("article")[j].appendChild(figure)

    var strong = document.createElement("strong")
    strong.innerText = "Lorum ipsum dolor"
    document.getElementsByTagName("article")[j].appendChild(strong)

    var p = document.createElement("p")
    p.innerText = "For more HTML5 templates visit https://www.os-templates.com/ free website templates"
    document.getElementsByTagName("article")[j].appendChild(p)
}
var arts = document.getElementById("services")
console.log(arts)

var imgs = document.getElementsByClassName("img2")
console.log(imgs)
for (i = 0; i < imgs.length; i++) {
    var img = document.createElement("img")
    document.getElementsByClassName("img2")[i].appendChild(img)
    img.setAttribute("src", "./images/demo/32.gif")
}
for (i = 0; i < 3; i++) {
    var article = document.createElement("article")
    document.getElementById("latest").appendChild(article)
    article.setAttribute("class", "one_quarter")
}
for (i = 0; i < 3; i++) {
    var article = document.createElement("article")
    document.getElementById("latest").appendChild(article)
    article.setAttribute("class", "one_quarter")
}
var dd = document.getElementById("latest")
console.log(dd)


// ================== 215 x 315 latest================
for (i = 0; i < 4; i++) {
    var articleElement = document.createElement("a")
    article.setAttribute("class", "one_quarter")

    var figureElement = document.createElement("figure")
    var imgElement = document.createElement("img")
    imgElement.setAttribute("src", "./images/demo/215x315.gif")
    figureElement.appendChild(imgElement)

    var figcaption_Element = document.createElement("figcaption")
    figcaption_Element.innerHTML = "Image Caption Here"
    figureElement.appendChild(figcaption_Element)

    articleElement.appendChild(figureElement)

    document.getElementById("latest").appendChild(articleElement)

}



