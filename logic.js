console.log('PostMan Clone (API Tester)');

//INITIAL DOM MANIPULATIONS
let parameterBox = document.getElementById('parameterBox');
let jsonInputBox = document.getElementById('jsonInputBox');
jsonInputBox.style.display = 'none';
parameterBox.style.display = 'none';
let checkBoxCustom = document.getElementById('checkBoxCustom');
let checkBoxJson = document.getElementById('checkBoxJson');

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
                            <input type="text" class="form-control" placeholder="Enter Parameter ${addParamCount + 1} Key" id="paramKey${addParamCount + 1}">
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