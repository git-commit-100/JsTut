console.log("This is Editable Div Tut");

let getText = localStorage.getItem("text");

let editableDiv = document.getElementById("editableDiv");
editableDiv.style.textAlign = "center";
editableDiv.style.alignContent = "center";
editableDiv.style.padding = "3rem";

let text;

if (getText == null) {
  text = document.createTextNode("Click Here To Edit The Div");
} else {
  text = document.createTextNode(getText);
}
editableDiv.appendChild(text);

editableDiv.addEventListener("click", function () {
  let textAreaCount = document.getElementsByClassName("textArea").length;
  if (textAreaCount == 0) {
    let html = editableDiv.innerHTML;
    editableDiv.innerHTML = `<textarea rows='6' class='textArea' cols='40' style='border:none; 
    color: blue ;outline:none; font-family: Arial, Helvetica, sans-serif; font-size: 24px'>${html}</textarea>`;
  }
  let textArea = document.getElementsByClassName("textArea")[0];
  textArea.addEventListener("blur", function () {
    editableDiv.innerHTML = textArea.value;
    localStorage.setItem("text", textArea.value);
  });
});
