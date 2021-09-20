console.log('PostMan Clone (API Tester)');

//INITIAL DOM MANIPULATIONS
let apiUrlInput = document.getElementById('apiUrlInput');
let parameterBox = document.getElementById('parameterBox');
let jsonInputBox = document.getElementById('jsonInputBox');
jsonInputBox.style.display = 'none';
parameterBox.style.display = 'none';
let checkBoxCustom = document.getElementById('checkBoxCustom');
let checkBoxJson = document.getElementById('checkBoxJson');
let code = document.getElementById('code');

//UTILITY FUNCTIONS
function convertStringToHtml(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    div.classList.add('my-2');
    return div.firstElementChild;
}


//WHEN GET METHOD IS CHECKED
let checkBoxGet = document.getElementById('checkBoxGet');
checkBoxGet.addEventListener('click', () => {
    jsonInputBox.style.display = 'none';
    parameterBox.style.display = 'none';
    checkBoxCustom.setAttribute('disabled', '');
    checkBoxJson.setAttribute('disabled', '');
    checkBoxCustom.checked = false;
    checkBoxJson.checked = true;
})

//WHEN POST METHOD IS CHECKED
let checkBoxPost = document.getElementById('checkBoxPost');
checkBoxPost.addEventListener('click', () => {
    jsonInputBox.style.display = 'block';
    checkBoxCustom.removeAttribute('disabled');
    checkBoxJson.removeAttribute('disabled');

    checkBoxJson.addEventListener('click', () => {
        jsonInputBox.style.display = 'block';
        parameterBox.style.display = 'none';
    })

    checkBoxCustom.addEventListener('click', () => {
        parameterBox.style.display = 'block';
        jsonInputBox.style.display = 'none';
    })
})

//ADD AND DELETE PARAMETERS IN POST -> CUSTOM
let addParamCount = 1;
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', (e) => {
    e.preventDefault();
    let string = `<div> 
                        <label class="form-label">Parameter ${addParamCount + 1} :</label>
                    <div class="row g-3">
                        <div class="col-10 col-md-5">
                            <input type="text" class="form-control" id="paramKey${addParamCount + 1}" placeholder="Enter Parameter ${addParamCount + 1} Key" id="paramKey${addParamCount + 1}">
                        </div>
                        <div class="col-10 col-md-5">
                            <input type="text" class="form-control" placeholder="Enter Parameter ${addParamCount + 1} Value"
                                id="paramValue${addParamCount + 1}">
                        </div>
                        <div class="col-2">
                            <a href="#" class="btn btn-primary deleteParam">
                                <span class="iconify" data-icon="akar-icons:minus"></span>
                            </a>
                        </div>
                    </div>
                    </div>`;
    let paramElement = convertStringToHtml(string).parentElement;
    document.getElementById('addParamList').appendChild(paramElement);
    addParamCount++;

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (elem of deleteParam) {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.parentElement.parentElement.remove();
        })
    }
})


//ON SUBMITTING REQUEST
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //CHECKING IF URL FIELD IS NULL
    if (apiUrlInput.value === null || apiUrlInput.value === '' || apiUrlInput.value === undefined) {
        apiUrlInput.focus();
    }
    else {
        //GET ALL VALUES FROM FORM
        let urlInput = apiUrlInput.value;
        let methodType = document.querySelector("input[name='checkBoxMethod']:checked").value;
        let responseType = document.querySelector("input[name='checkBoxResponse']:checked").value;

        //FETCHING INPUTS BASED ON CHECKBOXES CHECKED
        if (methodType === 'GET') {
            //INITIATE REQUEST
            fetch(urlInput)
                .then(response => response.json())
                .then((data) => {
                    data = JSON.stringify(data, null, 2);
                    code.innerHTML = data;
                    Prism.highlightAll();
                }).catch(error => code.innerHTML = error.message)

        } else {
            //POST REQUEST
            //CHECK WHICH RESPONSE IS SELECTED
            if (responseType === 'JSON') {
                //CHECK IF JSON INPUT TEXTAREA IS EMPTY
                let jsonInput = document.getElementById('JsonInput');
                if (jsonInput.value == null || jsonInput.value == '' || jsonInput.value == undefined) {
                    jsonInput.focus();
                } else {
                    let jsonInputValue = jsonInput.value;
                    //INITIATE REQUEST
                    fetch(urlInput, {
                        method: "POST",
                        body: jsonInputValue,
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                        .then((response => response.json()))
                        .then((data) => {
                            data = JSON.stringify(data, null, 2);
                            code.innerHTML = data;
                            Prism.highlightAll();
                        }).catch(error => code.innerHTML = error.message)
                }
            } else {
                //RESPONSE TYPE CUSTOM PARAMETERs
                let paramObj = {};
                let i;
                for (i = 0; i < addParamCount; i++) {
                    //CHECK IF ELEMENT IS PRESENT
                    if (document.getElementById(`paramKey${i + 1}`) != undefined) {
                        let key = document.getElementById(`paramKey${i + 1}`).value;
                        let value = document.getElementById(`paramValue${i + 1}`).value;
                        //BIND ALL VALUES INTO OBJECT
                        paramObj[key] = value;
                    }
                }
                paramObj = JSON.stringify(paramObj);
                //INITIATE REQUEST
                fetch(urlInput, {
                    method: "POST",
                    body: paramObj,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
                    .then((response => response.json()))
                    .then((data) => {
                        data = JSON.stringify(data, null, 2);
                        code.innerHTML = data;
                        Prism.highlightAll();
                    }).catch(error => code.innerHTML = error.message)
            }
        }
    }
})

