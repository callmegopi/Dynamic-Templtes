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

// var outPut = []
var outPut = JSON.parse(localStorage.getItem("persons-Gopi"));

function getUserData(event) {
    event.preventDefault()
    for (all in person) {
        person[all] = document.getElementById(all).value
    }
    outPut.push({ ...person })
    var convertedDetailes = JSON.stringify(outPut)
    localStorage.setItem("persons-Gopi", convertedDetailes)
    displayingPersons()
    clearForm()
    validate()
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
    outPut.forEach((person, i) => {
        var myTr = document.createElement("tr")
        var indexTd = document.createElement("td")
        indexTd.innerHTML = i + 1
        myTr.appendChild(indexTd)
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
        }

        // ========== Edit Button ===============
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)


        // ============ Deletebutton =================
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteBtn)

        document.querySelector("tbody").appendChild(myTr)
    })
}
displayingPersons()

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


var index;

// ============ editPerson ================================
function editPerson(i) {
    index = i;
    for (a in person) {
        document.getElementById(a).value = outPut[i][a]
    }
    document.getElementById("update").style.display = "block"
    document.getElementById("submit").style.display = "none"
}

// ==================== deleteperson =========================
function deletePerson(i) {
    console.log("deleteperson " + i)
    outPut.splice(i, 1);
    localStorage.setItem("persons-Gopi", JSON.stringify(outPut))
    displayingPersons();
    clearForm()
}


// ===================== updateperson ============================
function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    outPut[index] = { ...person };
    displayingPersons();
    localStorage.setItem("persons-Gopi", JSON.stringify(outPut))
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clearForm()
}


document.querySelector("button").onclick = getUserData