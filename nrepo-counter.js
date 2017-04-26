
function addCounter(answer) {
    let countElem = document.createElement("div");
    countElem.innerText = "文字数: " + "0";
    answer.parentNode.appendChild(countElem);
    answer.addEventListener("keyup", (e) => {
        countElem.innerText = "文字数: " + e.currentTarget.value.length;
    });
}

let answers = document.getElementsByTagName("textarea");
for (var i = 0; i < answers.length; i++) {
    addCounter(answers[i]);
}
