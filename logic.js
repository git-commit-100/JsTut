console.log("Word API");

const word = document.getElementById("word");
const displayList = document.getElementById("displayList");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  //EMPTY INPUT VALIDATION
  if (word.value == null || word.value == "") {
    word.focus();
  } else {
    //DRIVER FUNCTION
    fetchWordApi(word.value);
    displayList.classList.remove("hide");
  }
});

function fetchWordApi(word) {
  const xhr = new XMLHttpRequest();

  let link = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  console.log(link);

  xhr.open("GET", link, true);

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("ok");
      let jsonData = JSON.parse(xhr.responseText);

      let data = jsonData[0];
      let dataWord = data.word;
      let dataMeaning = data.meanings[0];
      let dataPartOfSpeech = dataMeaning.partOfSpeech;
      let dataDefs = dataMeaning.definitions;
      let dataDef = "";

      for (key in dataDefs) {
        dataDef += `${dataDefs[key].definition}<br><br>`;
      }

      let htmlOfADef = `<p>${dataDef}</p>`;

      //INSERTING INTO DOM
      let htmlOfDataWord = `<li class="col s12 m12 l12 collection-item left"><h6>Searched Word is: &nbsp;${dataWord}</h6></li>`;
      let htmlOfPartOfSpeech = `<li class="col s12 m12 l12 collection-item left">Part Of Speech is: &nbsp;${dataPartOfSpeech}</li>`;
      let htmlOfDataDefinition = `<li class="col s12 m12 l12 collection-item left">Defintions: ${htmlOfADef}</li>`;

      displayList.innerHTML = `${
        htmlOfDataWord + htmlOfPartOfSpeech + htmlOfDataDefinition
      }`;
    }
    else{
      console.log('no');
    }
  };

  xhr.send();
}
