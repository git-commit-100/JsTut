console.log("This is Js Tutorial");

const fetchBtn = document.getElementById("fetchBtn");
const list = document.getElementById("list");

fetchBtn.addEventListener("click", InsertDataIntoDb);
// fetchBtn.addEventListener("click", getDataFromDb);

function InsertDataIntoDb() {
  //INSTANTIATE XHR OBJECT
  const xhr = new XMLHttpRequest();

  //OPEN OBJECT

  //GET
  //FETCH DATA FROM TXT FIlE
  // xhr.open("GET",'fake.txt', true);

  //FETCH DATA FROM EXT LINKS
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  //POST
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  //WHEN RESPONSE IS IN PROGRESS
  xhr.onprogress = function () {
    console.log("Request Processing");
  };

  //WHEN RESPONSE IS READY
  xhr.onload = function () {
    // console.log(xhr.responseText);

    // INSERT DATA INTO HTML
    if (xhr.status === 429) {
      list.innerHTML = `<li class="collection-header"><h4>Server Error 429 !</h4>
      <li class="collection-item">OR same entry request !</li>`;
      return;
    } else {
      let jsonData = JSON.parse(xhr.responseText);
      //TO PRINT ID and MESSAGE
      let dataID = jsonData.data.id; 
      let dataMessage = jsonData.message;

      //PRINT TO DOM
      list.innerHTML = `<li class="collection-header"><h4>${dataMessage}</h4>
      <li class="collection-item">Id For Employee is: ${dataID}</li>`;
    }
  };

  //INITIATE REQUEST FOR GET
  // xhr.send();

  //INITIATE REQUEST FOR POST
  let data = `{"name":"employee657876","salary":"123","age":"23"}`;
  xhr.send(data);

  //WILL EXECUTE ASYNCRONOUSLY
  console.log("Exit");
}

function getDataFromDb() {
  const req = new XMLHttpRequest();

  req.open("GET", "https://dummy.restapiexample.com/api/v1/employees", "true"); //RETURNS JSON

  req.onprogress = function () {
    console.log("processing");
  };

  req.onload = function () {
    //DUE TO ERROR 429
    if (req.status === 200) {
      //PARSING DATA FROM DB i.e SERVER
      let dataFromDb = JSON.parse(req.responseText);

      //CONTAINS .data AS ARRAY
      let dataArr = dataFromDb.data;

      //ITERATING THROUGH ARRAY
      let data = "";
      for (key in dataArr) {
        data += `<li class="collection-item">${dataArr[key].employee_name}</li>`;
      }

      //PRINTING INTO DOM
      list.innerHTML = `<li class="collection-header"><h4>Employee List</h4>`+data;
    } else {
      list.innerHTML = `<li class="collection-header"><h4>Server Error 429 !</h4>
      <li class="collection-item">OR reload again !</li>`;
    }
  };
  req.send();
  console.log("exit");
}
