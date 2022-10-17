var person = {
    email: "",
    fullName: "",
    userName: "",
}
// var allPersonsDATA = []
var allPersonsDATA = JSON.parse(localStorage.getItem("usersIn_localStroage"))

// ========= create =============
function getUserData() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    allPersonsDATA.push({ ...person })
    var storageData = JSON.stringify(allPersonsDATA);
    localStorage.setItem("usersIn_localStroage", storageData)
    displayPersons()
    clearForm()
    valiDate()

}

// ======= clear =================
function clearForm() {
    for (a in person) {
        document.getElementById(a).value = ""
    }
}

// ========== display users in browser ============
function displayPersons() {
    document.querySelector("tbody").innerHTML = "";
    allPersonsDATA.forEach((person, i) => {
        var trow = document.createElement("tr")
        var indexTd = document.createElement("td")
        indexTd.innerHTML = i + 1
        trow.appendChild(indexTd)
        for (a in person) {
            var tcolumn = document.createElement("td")
            tcolumn.innerHTML = person[a]
            trow.appendChild(tcolumn)
        }

        // Edit
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editTd.appendChild(editBtn)
        trow.appendChild(editBtn)


        // Delete
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteTd.appendChild(deleteBtn)
        trow.appendChild(deleteBtn)


        document.querySelector("tbody").appendChild(trow)
    })

}
// ================= validate =====================
function valiDate() {
    console.log("You just pressed a key")
    var formValid = true
    for (a in person) {
        let inputdataStore = document.getElementById(a).value
        if (a !== "email") {
            if (inputdataStore.length == 0) {
                formValid = false
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(inputdataStore)) {
                formValid = false
            }
        }
    }

    if (formValid) {
        document.querySelector("button").removeAttribute("disabled")
    } else {
        document.querySelector("button").setAttribute("disabled", true)
    }
}

var index;
// ===================== edit person ===============================
function editPerson(i) {
    index = i;
    for (a in person) {
        document.getElementById(a).value = allPersonsDATA[i][a]
    }
    document.getElementById("update").style.display = "block";
    document.getElementById("submit").style.display = "none";
}

// ====================== delete person ==============================
function deletePerson(i) {
    allPersonsDATA.splice(i, 1)
    localStorage.setItem("usersIn_localStroage", JSON.stringify(allPersonsDATA))
    displayPersons();
}

// ======================= update person =============================
function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    allPersonsDATA[index] = { ...person }
    displayPersons();
    localStorage.setItem("usersIn_localStroage", JSON.stringify(allPersonsDATA))
    document.getElementById("update").style.display = "none"
    document.getElementById("submit").style.display = "block"
    clearForm();
}