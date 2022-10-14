var header1 = document.createElement("h1")
header1.innerHTML = "Basic 83"
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"

header1.appendChild(header2)
document.getElementById("hgroup").appendChild(header1)


var person = {
    email: "",
    fullName: "",
    userName: ""
}

var outPut = []

function getUserData(event) {
    event.preventDefault()
    for (all in person) {
        person[all] = document.getElementById(all).value
    }
    outPut.push({ ...person })
    displayingPersons()
    clearForm()
}

// ====== clear  ===========
function clearForm() {
    for (a in person) {
        document.getElementById(a).value = "";
    }
}

// ======= displaying persons =========
function displayingPersons() {
    document.querySelector("tbody").innerHTML = ""
    outPut.forEach((person) => {
        var myTr = document.createElement("tr")
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
            
        }
        document.querySelector("tbody").appendChild(myTr)
    })
}

// ================ validate =========================
function validate() {
    console.log("you Just Pressed a key")
    var formvalid = true;
    for (a in person) {
        let userInput = document.getElementById(a).value;
        if (a !== "email") {
            if (userInput.length == 0) {
                formvalid = false;
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(userInput)) {
                formvalid = false;
            }
        }
    }

    if (formvalid) {
        document.querySelector("button").removeAttribute("disabled");
    } else {
        document.querySelector("button").setAttribute("disabled", true);
    }
}
document.querySelector("button").onclick = getUserData