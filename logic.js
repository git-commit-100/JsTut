console.log('Iterators');

const myArr = ['bmw', 'audi', 'mercedes', 'volvo', 'rolls royce', 'jaguar'];
console.log('array is: ', myArr);

function iterateArray(array) {
    let nextIndex = 0;
    return {
        iterate: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

let returnArr = iterateArray(myArr);
console.log(returnArr.iterate());
console.log(returnArr.iterate());
console.log(returnArr.iterate());
console.log(returnArr.iterate());
console.log(returnArr.iterate());
console.log(returnArr.iterate());
console.log(returnArr.iterate());
