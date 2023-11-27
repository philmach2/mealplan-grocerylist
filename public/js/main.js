// need to figure out how to add num and sub num of items, both for data in db and text on page

const addNumOfItem = document.querySelector('#add-num-button')
const subNumOfItem = document.querySelector('#sub-num-button')
const insertNum = Number()
// const tLikes = Number(this.parentNode.childNodes[5].innerText)

addNumOfItem.addEventListener('click', _ => {
    const itemCategory = 
    fetch('/addNum', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            // numItem: tLikes
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