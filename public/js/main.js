// need to figure out how to add num and sub num of items, both for data in db and text on page

const increase = document.querySelectorAll('#add-num-button')
const decrease = document.querySelectorAll('#sub-num-button')

Array.from(increase).forEach((element)=>{
    element.addEventListener('click', addNumOfItem)
})

// Array.from(decrease).forEach((element)=>{
//     element.addEventListener('click', subNumOfItem)
// })

// addNumOfItem.addEventListener('click', _ => {
//     const itemCategory = 
//     fetch('/addNum', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             // numItem: tLikes
//         })
//     })
// })


async function addNumOfItem(){
    const itemName = this.parentNode.childNodes[1].innerText
    const numItem = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addNum', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemName': itemName,
              'numItem': numItem
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// subNumOfItem.addEventListener('click', _ => {
//     fetch('/subNum', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
            
//         })
//     })
// })