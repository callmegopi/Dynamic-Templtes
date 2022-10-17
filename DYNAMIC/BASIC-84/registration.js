var person = {
    email: "",
    fullName: "",
    userName: "",
}

// var Result = []
var Result = JSON.parse(localStorage.getItem("users"));

function getUserData() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    Result.push({ ...person })
    var convertedDetails = JSON.stringify(Result)
    localStorage.setItem("users", convertedDetails)
    clearForm()
    displayingUsers()
    validate()
}
// =========== clear form ============
function clearForm() {
    for (a in person) {
        document.getElementById(a).value = ""
    }
}

// ====== displaying User ============
function displayingUsers() {
    document.querySelector("tbody").innerHTML = ""
    Result.forEach((person, i) => {
        var tableRow = document.createElement("tr")
        var indexTd = document.createElement("td")
        indexTd.innerHTML = i + 1
        tableRow.appendChild(indexTd)
        for (a in person) {
            var tableColumn = document.createElement("td")
            tableColumn.innerHTML = person[a]
            tableRow.appendChild(tableColumn)
            document.querySelector("tbody").appendChild(tableRow)
        }

        // Edit
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editTd.appendChild(editBtn)
        tableRow.appendChild(editTd)

        // Delete
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteTd.appendChild(deleteBtn)
        tableRow.appendChild(deleteTd)
    })
}
displayingUsers();

// ========== form validate ================
function validate() {
    console.log("Displaying users")
    var formValid = true;
    for (a in person) {
        let storeData = document.getElementById(a).value
        if (a !== "email") {
            if (storeData.length == 0) {
                formValid = false;
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(storeData)) {
                formValid = false;
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
// ================= edit ==============================
function editPerson(i) {
    index = i
    for (a in person) {
        document.getElementById(a).value = Result[i][a]
    }
    document.getElementById("update").style.display = "block";
    document.getElementById("submit").style.display = "none";
}

// ====================== delete =============================
function deletePerson(i) {
    Result.splice(i, 1)
    localStorage.setItem("users", JSON.stringify(Result))
    displayingUsers();
    clearForm();
}


// ================= update ====================================
function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    Result[index] = { ...person };
    displayingUsers();
    localStorage.setItem("users", JSON.stringify(Result));
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clearForm();
}
