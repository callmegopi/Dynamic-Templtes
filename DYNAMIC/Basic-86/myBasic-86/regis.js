var users = {
    email: "",
    fullName: "",
    userName: "",
}
var showTotalData = []
// ========== creating users ===============
function getUserData() {
    for (all in users) {
        users[all] = document.getElementById(all).value
    }
    showTotalData.push({ ...users })
    var storageData = JSON.stringify(showTotalData)
    localStorage.setItem("gopi_users", storageData)
    displayUsers()

    clearForm()
    valiDate()
}
// ============ clear from ==================
function clearForm() {
    for (all in users) {
        document.getElementById(all).value = "";
    }
}
// ======== displaying =========================
function displayUsers() {
    document.querySelector("tbody").innerHTML = "";
    showTotalData.forEach((users, i) => {
        var MyTr = document.createElement("tr")
        var slNumberTd = document.createElement("td")
        slNumberTd.innerHTML = i + 1
        MyTr.appendChild(slNumberTd)
        for (all in users) {
            var MyTd = document.createElement("td")
            MyTd.innerHTML = users[all]
            MyTr.appendChild(MyTd)
        }

        // Edit
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editTd.appendChild(editBtn)
        MyTr.appendChild(editTd)

        // Delete
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteTd.appendChild(deleteBtn)
        MyTr.appendChild(deleteBtn)

        document.querySelector("tbody").appendChild(MyTr)
    })
}
// ============== validate keys =================
// function valiDate() {
//     console.log("you just pressed a key")
//     var formValid = true;
//     for (all in users) {
//         let allUsers = document.getElementById(all).value
//         if (allUsers.length == 0) {
//             formValid = false;
//         }
//     }

//     if (formValid) {
//         document.querySelector("button").removeAttribute("disabled")
//     } else {
//         document.querySelector("button").setAttribute("disabled",true)
//     }
// }

// ================ second valiDate =================
function valiDate() {
    console.log("your pressed a key")
    var formValid = true;
    for (a in users) {
        let totalData = document.getElementById(a).value
        if (a !== "email") {
            if (totalData.length == 0) {
                formValid = false;
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(totalData)) {
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
//  ========================= edit person =============================
function editPerson(i) {
    index = i;
    for (a in users) {
        document.getElementById(a).value = showTotalData[i][a]
    }
    document.getElementById("update").style.display = "block";
    document.getElementById("submit").style.display = "none";
}


// ============================ deleete person =========================
function deletePerson(i) {
    showTotalData.splice(i, 1)
    localStorage.setItem("gopi_users", JSON.stringify(showTotalData))
    displayUsers()
    clearForm()
}

// ============================= update Person ===========================
function updatePerson() {
    for (a in users) {
        users[a] = document.getElementById(a).value;
    }
    showTotalData[index] = { ...users }
    displayUsers()
    localStorage.setItem("gopi_users", JSON.stringify(showTotalData))
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clearForm()
}