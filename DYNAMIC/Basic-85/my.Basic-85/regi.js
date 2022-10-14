var person = {
    email: "",
    fullName: "",
    userName: "",
}
var allPersonsDATA = []
// ========= create =============
function getUserData(event) {
    event.preventDefault()

    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    allPersonsDATA.push({ ...person })
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
    allPersonsDATA.forEach((person) => {
        var trow = document.createElement("tr")
        for (a in person) {
            var tcolumn = document.createElement("td")
            tcolumn.innerHTML = person[a]
            trow.appendChild(tcolumn)
        }
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

document.querySelector("button").onclick = getUserData