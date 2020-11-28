var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function clickEventHandler() {
    // console.log(textInput.value);
    outputDiv.innerText = "translated: " + textInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
