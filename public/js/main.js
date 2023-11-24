// need to figure out how to add num and sub num of items, both for data in db and text on page

const addNumOfItem = document.querySelector('#add-num-button')
const subNumOfItem = document.querySelector('#sub-num-button')
const insertNum = Number()

addNumOfItem.addEventListener('click', _ => {
    fetch('/addNum', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

        })
    })
})

subNumOfItem.addEventListener('click', _ => {
    fetch('/subNum', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
        })
    })
})