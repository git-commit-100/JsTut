console.log('CV Screener Project');

const list = document.getElementById('list');
const nextBtn = document.getElementById('nextBtn');

function getCandidates() {
    Promise.all([
        fetch('https://randomuser.me/api/').then(response => response.json()),
        fetch('data.json').then(response => response.json())
    ])
        .then((data) => {
            printCv(data[0].results ,data[1].languages);
        })
        .catch(err => console.log(err))
}

getCandidates();

nextBtn.addEventListener('click', getCandidates);

function printCv(array1,array2) {

    let candidate = array1[0];
    let languages = array2;
    let randomInt = generateRandomInt(1, 4);

    //APPEND INTO UI
    list.innerHTML = `<li class="list-group-item"><img class="my-2" src="${candidate.picture.large}"></li>
    <li class="list-group-item">Name : ${candidate.name.title} ${candidate.name.first} ${candidate.name.last}</li>
    <li class="list-group-item">Email : ${candidate.email}</li>
    <li class="list-group-item">Age : ${candidate.dob.age}</li>
    <li class="list-group-item">Phone Number : ${candidate.phone}</li>
    <li class="list-group-item">Domain : ${languages[randomInt].domain}</li>
    <li class="list-group-item">Techstack : ${languages[randomInt].techStack}</li>
    <li class="list-group-item">Experience : ${languages[randomInt].experience} years</li>`;

}

//GENERATING RANDOM ARRAY 
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}














