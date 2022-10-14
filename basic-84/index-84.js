// ======================HEAD GROUP ==================================
var hgroupElement = document.getElementById("hgroup")
var header1 = document.createElement("h1")
var header1_anchor = document.createElement("a")
header1_anchor.innerText = "Basic 84"
header1.appendChild(header1_anchor)
hgroupElement.appendChild(header1)

var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"
hgroupElement.appendChild(header2)


// =================== NAV BAR =====================================
for (i = 0; i < 5; i++) {
    console.log(i)
    var myLi = document.createElement("li")
    var myanchor = document.createElement("a")
    myanchor.innerText = "Text Link" 
    myLi.appendChild(myanchor)
    document.getElementById("myUl").appendChild(myLi)
}


// ============================= BANNER 960*280 ======================================
var anchorTag = document.createElement("a")
var imgElement = document.createElement("img")
imgElement.style.width = "100%"
imgElement.style.height = "400px"
imgElement.setAttribute("src", "http://cinebuds.com/wp-content/uploads/2021/04/Aha-Upcoming-Telugu-Movies-Release-Dates-with-Link.jpg")
anchorTag.appendChild(imgElement)
document.getElementById("slider").appendChild(anchorTag)


// ========================= SECTION SHOUT ==================================
var para = document.createElement("p")
para.innerText = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt namjusto cras urna."
document.getElementById("shout").appendChild(para)


// ============================== Home Page - services ====================================
myServices = [
    {
        imgTag_: "./images/demo/32x32.gif",
        heading_: "Lorum Ipsum Dolor",
        para_: "You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files.",
        anchor_: "Read More"
    }
]

myServices.forEach((user) => {

    for (i = 0; i < 3; i++) {

        var article_Services = document.createElement("article")
        var figure_services = document.createElement("figure")
        var img_services = document.createElement("img")
        img_services.src = user.imgTag_
        figure_services.appendChild(img_services)
        var header_services = document.createElement("strong")
        header_services.innerHTML = user.heading_
        var para_services = document.createElement("p")
        para_services.innerHTML = user.para_
        var anchor_services = document.createElement("a")
        anchor_services.innerHTML = user.anchor_
        anchor_services.href = "www.google.com"

        article_Services.appendChild(figure_services)
        article_Services.appendChild(header_services)
        article_Services.appendChild(para_services)
        article_Services.appendChild(anchor_services)
        document.getElementById("services").appendChild(article_Services)
    }
});



// ===================== SECTION LATEST ====================================
var allElements = document.getElementsByClassName("myImages")
var onlineLinks = ["https://www.movienewsletters.net/photos/306752R1.JPG", "https://static.toiimg.com/photo/msid-80265987/80265987.jpg", "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/14/Naga-Chaitanya-Sai-Pallavi-and-Sekhar-Kammula-s-Love-Story-Movie-First-Look-and-Sankranthi-Poster-.jpg?quality=80&zoom=1&ssl=1", "https://bingeddata.s3.amazonaws.com/uploads/2021/10/love-story.jpg"]

for (i = 0; i < onlineLinks.length; i++) {
    console.log(onlineLinks[i])

    var imgElement = document.createElement("img")
    imgElement.setAttribute("src", onlineLinks[i])
    imgElement.style.width = "100%"
    allElements[i].appendChild(imgElement)
}

