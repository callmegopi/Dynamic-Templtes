var person = {
    email: "",
    fullName: "",
    userName: "",
}

var Result = []

function getUserData(event) {
    event.preventDefault()

    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    Result.push({ ...person })
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
    Result.forEach((person) => {
        var tableRow = document.createElement("tr")
        for (a in person) {
            var tableColumn = document.createElement("td")
            tableColumn.innerHTML = person[a]
            tableRow.appendChild(tableColumn)
            document.querySelector("tbody").appendChild(tableRow)
        }
    })
}

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
document.querySelector("button").onclick = getUserData