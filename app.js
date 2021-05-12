var btnTranslate = document.querySelector("#btn-Translate");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getUrl(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occurred!!", error);
    alert("Try again after sometime, server not responding")
}

function clickEventHandler(){
    var inputTxt = inputText.value

    fetch(getUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        console.log(json.contents.translated);
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)

