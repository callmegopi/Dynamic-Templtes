var users = {
    email: "",
    fullName: "",
    userName: "",
}
var showTotalData = []
// ========== creating users ===============
function getUserData(event) {
    event.preventDefault()

    for (all in users) {
        users[all] = document.getElementById(all).value
    }
    showTotalData.push({ ...users })
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
    showTotalData.forEach((users) => {
        var MyTr = document.createElement("tr")
        for (all in users) {
            var MyTd = document.createElement("td")
            MyTd.innerHTML = users[all]
            MyTr.appendChild(MyTd)

        }
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
    for( a in users) {
        let totalData = document.getElementById(a).value 
        if (a !== "email") {
            if (totalData.length ==0) {
                formValid = false;
            }
        }else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(totalData)) {
                formValid = false;
            }
        }
    }

    if (formValid) {
        document.querySelector("button").removeAttribute("disabled")
    }else {
        document.querySelector("button").setAttribute("disabled",true)
    }
 }

document.querySelector("button").onclick = getUserData