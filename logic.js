console.log('fetch api using async and await');

const fetchBtn = document.getElementById('fetchBtn');
const dataDiv = document.getElementById('data');
const url = 'https://jsonplaceholder.typicode.com/todos/';   //url

async function getTodos() {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('some error occurred');
    }
    const data = await response.json();
    return data;
}

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err))
