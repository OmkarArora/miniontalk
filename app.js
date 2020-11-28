var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

function clickEventHandler() {
    console.log(textInput.value);
    console.log("click");
}

btnTranslate.addEventListener("click", clickEventHandler);
