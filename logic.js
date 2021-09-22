console.log('Drag And Drop Using Vanilla JS');

const whiteBoxes = document.querySelectorAll('.whiteBox');
const img = document.querySelector('.img');

img.addEventListener('dragstart', (e) => {
    setTimeout(() => {
        e.target.className = 'none';
    },0)

})

img.addEventListener('dragend', (e) => {
    e.target.className = 'img';
    e.target.classList.remove('hover');
    // console.log('drag end');
})

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragenter', (e) => {
        e.target.classList.add('hover');
    })
    whiteBox.addEventListener('dragleave', (e) => {
        e.target.classList.remove('hover');
    })
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // console.log('drag over')
    })
    whiteBox.addEventListener('drop', (e) => {
        e.target.append(img);
        e.target.classList.remove('hover');
    })
}