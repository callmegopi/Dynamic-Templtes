var person = {
    email: "",
    fullName: "",
    userName: "",
}

var DisplayPersons = []
// ========== create ============
function getUserData(event) {
    event.preventDefault()

    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    DisplayPersons.push({ ...person })
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
    DisplayPersons.forEach((person) => {
        var myTr = document.createElement("tr")
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
        }
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

document.querySelector("button").onclick = getUserData