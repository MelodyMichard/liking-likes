let count1 = 1;
let count2 = 1;
let count3 = 1;
let countElement1 = document.querySelector("#like1");
let countElement2 = document.querySelector("#like2");
let countElement3 = document.querySelector("#like3");

function like(e) {
    if(e === "button1") {
        countElement1.innerText = count1++ + " like(s)";
    }
    if(e === "button2") {
        countElement2.innerText = count2++ + " like(s)";
    }
    if(e === "button3") {
        countElement3.innerText = count3++ + " like(s)";
    }
}


