var head1 = document.createElement("h1")
var anchor1 = document.createElement("a")
anchor1.innerHTML = "Basic 86"
head1.appendChild(anchor1)
var head2 = document.createElement("h2")
head2.innerHTML = "Free HTML5 Website Template"
head1.appendChild(head2)
document.querySelector("#hgroup").appendChild(head1)

// =================== silder ==================
var figureTag = document.createElement("figure")
var imgTag = document.createElement("img")
imgTag.setAttribute("src", "./images/demo/630x300.gif")
figureTag.appendChild(imgTag)
var figcaptionTag = document.createElement("figcaption")
var caption_head2 = document.createElement("h2")
caption_head2.innerHTML = "Eu justo augue estas"
var para = document.createElement("p")
para.innerHTML = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo."
var footerTag = document.createElement("footer")
footerTag.setAttribute("class", "more")
var footer_anchorTag = document.createElement("a")
footer_anchorTag.innerHTML = "Read More &raquo;"
footerTag.appendChild(footer_anchorTag)

figcaptionTag.appendChild(caption_head2)
figcaptionTag.appendChild(para)
figcaptionTag.appendChild(footerTag)

figureTag.appendChild(figcaptionTag)

document.querySelector("#slider").appendChild(figureTag)


// ================ services ========================
for (i = 0; i < 3; i++) {
    var article_Element = document.createElement("article")
    article_Element.setAttribute("class", "one_third")
    var header_Element = document.createElement("h2")
    header_Element.innerHTML = "Lorum Ipsum dolor"
    var img_Element = document.createElement("img")
    img_Element.setAttribute("src", "./images/demo/80x80.gif")
    var para_Element = document.createElement("p")
    para_Element.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus. Inpede cumst vitae ris tellentesque fring intesquet."
    var footer_Element = document.createElement("footer")
    footer_Element.setAttribute("class", "more")
    var anchor_Element = document.createElement("a")
    anchor_Element.innerHTML = "Read More &raquo;"
    footer_Element.appendChild(anchor_Element)

    article_Element.appendChild(header_Element)
    article_Element.appendChild(img_Element)
    article_Element.appendChild(para_Element)
    article_Element.appendChild(footer_Element)

    document.getElementById("services").appendChild(article_Element)
}

// =============== latest ==================================
for (i = 0; i < 4; i++) {
    var article_Element_2 = document.createElement("article")
    article_Element_2.setAttribute("class", "one_quarter")
    var figureElement_2 = document.createElement("figure")

    var img_Element_2 = document.createElement("img")
    img_Element_2.setAttribute("src", "./images/demo/215x100.gif")

    var figure_caption_2 = document.createElement("figcaption")
    var head_2 = document.createElement("h2")
    head_2.innerHTML = "Indonectetus facilis"
    var para_2 = document.createElement("p")
    para_2.innerHTML = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
    var footer_Element_2 = document.createElement("footer")
    footer_Element_2.setAttribute("class", "more")
    var footer_anchorTag_2 = document.createElement("a")
    footer_anchorTag_2.innerHTML = "Read More &raquo;"
    footer_Element_2.appendChild(footer_anchorTag_2)

    figure_caption_2.appendChild(head_2)
    figure_caption_2.appendChild(para_2)
    figure_caption_2.appendChild(footer_Element_2)

    figureElement_2.appendChild(img_Element_2)
    figureElement_2.appendChild(figure_caption_2)

    article_Element_2.appendChild(figureElement_2)

    document.querySelector("#latest").appendChild(article_Element_2)
}