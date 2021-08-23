console.log('Promises');

/*PROMISE:
  1. RESOLVE
  2. REJECT
  3. PENDING
*/

const mainDiv = document.getElementById('mainDiv');

function makePromise() {
  return new Promise(function (resolve, reject) {
    let x = 'javascript';
    let y = 'html';
    // let y = 'javascript';

    if (x === y) {
      resolve();
    } else {
      reject();
    }

  });
}

makePromise().then(function () {
  let successMsg = 'Promise Resolved : String Matched Successfully';
  mainDiv.innerHTML = `<h4 class="center green-text lighten-1">${successMsg}</h4>`;
}).catch(function () {
  let errorMsg = 'Promise Rejected : String Did Not Match';
  mainDiv.innerHTML = `<h4 class="center red-text lighten-1">${errorMsg}</h4>`;
})

