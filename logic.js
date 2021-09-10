console.log('Alarm App');

const inputAlarmTime = document.getElementById('inputAlarmTime');
const formText = document.getElementById('form-text');
const submitBtn = document.getElementById('submitBtn');
const showAlarmsSection = document.getElementById('showAlarmsSection');
const showAlarmsList = document.getElementById('showAlarmsList');
const noAlarms = document.getElementById('noAlarms');
let isDateValid = false;
let html;
const reg = /^([a-zA-Z]{1,3})\W([0-9]{1,2})\W([0-9]{4})\W([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})(\W)?$/;

class AlarmObj {
    constructor(param) {
        this.id = Math.random();
        this.title = param;
    }
};

let alarmArr = [];

inputAlarmTime.addEventListener('blur', () => {
    if (!reg.test(inputAlarmTime.value)) {
        //NO MATCh
        formText.innerHTML = `<span class="iconify-inline text-danger" data-icon="bx:bx-error-circle"></span>
        Specified Format is <span class="text-danger">"Sep 08 2021 16:23:45"</span>`;
        inputAlarmTime.classList.remove('is-valid');
        inputAlarmTime.classList.add('is-invalid');
        isDateValid = false;
    } else {
        // MATCHING REGEX BUT CHECK FOR TIME OBJECT 
        let checkTime = Date.parse(inputAlarmTime.value);
        if (isNaN(checkTime)) {
            formText.innerHTML = `<span class="iconify-inline text-danger" data-icon="bx:bx-error-circle"></span>
            Check Your Time, Hours can be <span class="text-danger">24</span>
        ,minutes can be <span class="text-danger">60</span>`;
            inputAlarmTime.classList.remove('is-valid');
            inputAlarmTime.classList.add('is-invalid');
            isDateValid = false;
        } else {
            formText.innerHTML = `<span class="text-success">Looks Good <span class="iconify-inline" data-icon="akar-icons:check"></span></span>`;
            inputAlarmTime.classList.remove('is-invalid');
            inputAlarmTime.classList.add('is-valid');
            isDateValid = true;
        }
    }
})

submitBtn.addEventListener('click', () => {
    if (isDateValid) {
        setAlarm();
    }
})


function setAlarm() {
    //CREATING AND PUSHING OBJECT INTO ARRAY
    let newAlarm = new AlarmObj(inputAlarmTime.value);
    alarmArr.push(newAlarm);

    //DATE FUNCTIONS
    let alarmTime = new Date(inputAlarmTime.value);
    let now = new Date().getTime();
    alarmTitle = `${alarmTime.toDateString()} ${alarmTime.toLocaleTimeString()}`;
    let timeDiff = alarmTime.getTime() - now;


    if (alarmTime.getTime() - now < 6000) {
        //ALARM BEING SET DOES NOT HAVE DIFFERENCE OF 1 MINUTE
        formText.innerHTML = `<span class="iconify-inline text-danger" data-icon="bx:bx-error-circle" ></span >
             Alarm can only be set for future and not at<span class="text-danger"> present minute</span> or in the
             <span class="text-danger"> past</span>`;
        inputAlarmTime.classList.remove('is-valid');
        inputAlarmTime.classList.add('is-invalid');
        now = new Date().getTime();
    } else {
        //INSERT INTO UI
        showAlarmsSection.classList.remove('visually-hidden');
        noAlarms.classList.add('visually-hidden');
        html = ` <li
                    class="list-group-item alarm rounded-pill my-2 bg-dark d-flex justify-content-between align-items-center">
                    <div class="d-none" id="${newAlarm.id}">Id</div>
                    <div class="bg-success text-light rounded-circle px-2 py-1">
                        <span class="iconify" data-icon="emojione-monotone:alarm-clock"></span>
                    </div>
                    <div class="fw-bold px-1 text-light">
                        ${alarmTitle}
                    </div>
                    <a href="#" id="delBtn" class="btn btn-danger rounded-pill px-2 py-1" data-bs-toggle="tooltip"
                        data-bs-placement="top" title="Delete Alarm">
                        <span class="iconify" data-icon="ant-design:delete-filled"></span>
                    </a>
                </li>`;
        showAlarmsList.innerHTML += html;
        ringAlarm(newAlarm, timeDiff);

        //CLEARING INPUT
        inputAlarmTime.focus();

        var delBtn = document.getElementById('delBtn');
        if (delBtn.click == true) {
            deleteAlarm(newAlarm);
        }
    }
}


function ringAlarm(alarmObj,timeDifference) {
    setTimeout(() => {
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();

        //ALARM HAS BEEN PLAYED, TIME TO DELETE IT
        setTimeout(deleteAlarm(alarmObj),5000);
    }, timeDifference);
}

function deleteAlarm(alarmObj) {
    //FINDS INDEX OF ALARM OBJ IN ARRAY
    let findIndex = alarmArr.findIndex((element) => {
        element.id === alarmObj.id;
    });
    //CHECKING IF ELEMENT IS FOUND IN ARRAY
    if (findIndex == -1) {
        //DELETING ELEMENT
        alarmArr.splice(findIndex, 1);
        //REMOVING FROM DOM
        let alarmToBeDel = document.getElementById(alarmObj.id).parentElement;
        alarmToBeDel.remove();

        if (alarmArr.length == 0) {
            showAlarmsSection.classList.add('visually-hidden');
            noAlarms.classList.remove('visually-hidden');
        }
    }
}










  



