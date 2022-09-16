userName = prompt("Enter Username")
document.write("Welcome, " + userName);
console.log("Username: " + userName);


var cookies = 0
console.log(cookies);

function score() {
    document.querySelector("#cookies").innerHTML ++;
    console.log("cookies");
    console.log(cookies);
}

    if (cookies >= 5) {
        score() = document.querySelector("#cookies").innerHTML = cookies + 2;
        console.log("BOOST")
    }


// if (cookies >= 5) {
//     function score() {
//         document.querySelector("#cookies").innerHTML = cookies += "2";
//         console.log("BOOST");
//     }
// }
