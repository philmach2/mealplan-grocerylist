const increase = document.querySelectorAll('#add-num-button')
const decrease = document.querySelectorAll('#sub-num-button')

Array.from(increase).forEach(element => {
    element.addEventListener('click', addNumOfItem)
})

Array.from(decrease).forEach(element => {
    element.addEventListener('click', subNumOfItem)
})

async function addNumOfItem(){
    const itemNameS = this.parentNode.querySelector('.item-name').innerText
    const numItemS = this.parentNode.querySelector('.num-of-item').innerText
    console.log('numItemS:', numItemS);
    try{
        const response = await fetch('addNum', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemName': itemNameS,
              'numItem': numItemS
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}