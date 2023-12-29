const increase = document.querySelectorAll('#add-num-button')
const decrease = document.querySelectorAll('#sub-num-button')
const completeGroceryList = document.querySelectorAll('#grocery-list .item span')
const incompleteGroceryList = document.querySelectorAll('#grocery-list .item span.complete')

const completeMealPlan = document.querySelectorAll('#meal-plan .item span.item-name.incomplete')
const incompleteMealPlan = document.querySelectorAll('#meal-plan .item span.item-name.complete')
const itemsMealPlan = document.querySelectorAll('#meal-plan .item span.item-name')

// const itemCompleted = document.querySelectorAll('.item span.completed')
// const deleteBtn = document.querySelectorAll('.fa-trash')

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

// subNumOfItem.addEventListener('click', _ => {
//     fetch('/subNum', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
            
//         })
//     })
// })


// ~~~~~~~~~
// Meal Plan Delete Functionality Start
// ~~~~~~~~~
const deleteBtn = document.querySelectorAll('.fa-trash')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

async function deleteItem(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('/deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
        })
      const data = await response.json()
      console.log(data)
      location.reload()

  }catch(err){
      console.log(err)
  }
}
// ~~~~~~~~~
// Meal Plan Delete Functionality End
// ~~~~~~~~~


// ~~~~~~~~~
// Meal Plan Mark Complete Functionality Start
// ~~~~~~~~~
Array.from(completeMealPlan).forEach((element)=>{
    element.addEventListener('click', markCompleteMealPlan)
})

console.log('complete: ', Array.from(completeMealPlan))

Array.from(incompleteMealPlan).forEach((element)=>{
    element.addEventListener('click', markIncompleteMealPlan)
})

console.log('incomplete: ', Array.from(incompleteMealPlan))


async function markCompleteMealPlan(){
    const itemText = this.parentNode.childNodes[1].innerText
    let id = this.parentNode.id

    id = id.charAt(0).toUpperCase() + id.slice(1)
    // console.log('id: ', id)

    console.log('markComplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`markCompleteMealPlan${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncompleteMealPlan(){
    const itemText = this.parentNode.childNodes[1].innerText
    let id = this.parentNode.id

    id = id.charAt(0).toUpperCase() + id.slice(1)
    // console.log('id: ', id)

    console.log('markIncomplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`markIncompleteMealPlan${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// ~~~~~~~~~
// Meal Plan Mark Complete Functionality End
// ~~~~~~~~~


// ~~~~~~~~~
// Meal Plan Edit Functionality Start
// ~~~~~~~~~
const addNoteBtn = document.querySelectorAll('.fa-sticky-note')
const noteInput = document.querySelector('.item-note-form')

Array.from(addNoteBtn).forEach((element)=>{
    console.log('Array.from(addNoteBtn): ', addNoteBtn)
    element.addEventListener('click', addNoteToItem)
})

function addNoteToItem() {
    console.log('noteInput: ', noteInput)
    // document.querySelector('.item-note-form').style.display = 'block'
    noteInput.classList.toggle('item-note-display-toggle')
    console.log('Add Note To Item')
}

// ~~~~~~~~~
// Meal Plan Edit Functionality End
// ~~~~~~~~~


Array.from(completeGroceryList).forEach((element)=>{
    element.addEventListener('click', markCompleteGroceryList)
})

// console.log('complete: ', Array.from(completeGroceryList))

Array.from(incompleteGroceryList).forEach((element)=>{
    element.addEventListener('click', markIncompleteGroceryList)
})

// console.log('incomplete: ', Array.from(incompleteGroceryList))

// Array.from(itemCompleted).forEach((element)=>{
//     element.addEventListener('click', markUnComplete)
// })

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

async function subNumOfItem(){
    const itemNameS = this.parentNode.querySelector('.item-name').innerText
    const numItemS = this.parentNode.querySelector('.num-of-item').innerText
    console.log('numItemS:', numItemS);
    try{
        const response = await fetch('subNum', {
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

async function markCompleteGroceryList(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markCompleteGroceryList', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markIncompleteGroceryList(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markIncompleteGroceryList', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
