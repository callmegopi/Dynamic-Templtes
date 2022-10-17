var person = {
    email: "",
    fullName: "",
    userName: "",
}

// var DisplayPersons = []
var DisplayPersons = JSON.parse(localStorage.getItem("userData"));
// ========== create ============
function getUserData() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    DisplayPersons.push({ ...person })
    var allData = JSON.stringify(DisplayPersons)
    localStorage.setItem("userData", allData)
    clear()
    displayingPersons()
    valiDate()


}
// ============= clear ===============
function clear() {
    for (a in person) {
        document.getElementById(a).value = ""
    }
}
// ========== display persons =============
function displayingPersons() {
    document.querySelector("tbody").innerHTML = "";
    DisplayPersons.forEach((person, i) => {
        var myTr = document.createElement("tr")
        indexTd = document.createElement("td")
        indexTd.innerHTML = i + 1
        myTr.appendChild(indexTd)
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
        }

        // Edit
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)

        // Delete
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}

// =========== valiDate ================
// function valiDate() {
//     console.log("you presses a key")
//     let application = true;
//     for (a in person) {
//         let inputData = document.getElementById(a).value
//         if (inputData.length == 0) {
//             application = false;
//         }
//     }

//     if (application) {
//         document.querySelector("button").removeAttribute("disabled")
//     } else {
//         document.querySelector("button").setAttribute("disabled", true)
//     }
// }

// ============= validate - 2 =================
function valiDate() {
    console.log("you pressed a key")
    var application = true;
    for (all in person) {
        let inputData = document.getElementById(all).value
        if (all !== "email") {
            if (inputData.length == 0) {
                application = false
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(inputData)) {
                application = false;
            }
        }
    }

    if (application) {
        document.querySelector("button").removeAttribute("disabled")
    } else {
        document.querySelector("button").setAttribute("disabled", true)
    }
}
var index;
// ======================= edit person =======================
function editPerson(i) {
    index = i;
    for (a in person) {
        document.getElementById(a).value = DisplayPersons[i][a]
    }
    document.getElementById("update").style.display = "block"
    document.getElementById("submit").style.display = "none"
}

// ==================== delete person =========================
function deletePerson(i) {
    DisplayPersons.splice(i, 1)
    localStorage.setItem("userData", JSON.stringify(DisplayPersons))
    displayingPersons()
}

// ====================== update person ==========================
function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    DisplayPersons[index] = { ...person }
    displayingPersons()
    localStorage.setItem("userData", JSON.stringify(DisplayPersons));
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clear();

}