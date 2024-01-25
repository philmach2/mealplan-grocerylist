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
    console.log('itemText: ', itemText)
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
const showNoteBtn = document.querySelectorAll('.fa-sticky-note')
// const noteInput = document.querySelector('.item-note-form')
const notes = document.querySelector('.item-note')
const notesSaveBtn = document.querySelectorAll('.save-button')

Array.from(showNoteBtn).forEach( element => {
    // console.log('Array.from(showNoteBtn): ', showNoteBtn)
    element.addEventListener('click', addNoteToItem)
})

function addNoteToItem() {
    // console.log('notes: ', notes)

    // console.log('the node list: ', this.parentNode.parentNode.childNodes)
    // document.querySelector('.item-note-form').style.display = 'block'

    // notes.classList.toggle('item-note-display-toggle')
    this.parentNode.parentNode.childNodes[10].classList.toggle('item-note-display-toggle')
    // notesSaveBtn.classList.toggle('button-display-toggle')
    this.parentNode.parentNode.childNodes[12].classList.toggle('button-display-toggle')
    console.log('Note button has been clicked')
}

// if (document.querySelector('#meal-plan-heading')) {
//     notesSaveBtn.addEventListener('click', editNote)
// }


Array.from(notesSaveBtn).forEach( element => {
    // console.log('Array.from(showNoteBtn): ', showNoteBtn)
    element.addEventListener('click', editNote)
})
// notesSaveBtn.addEventListener('click', editNote)
    

// Array.from(notesSaveBtn).forEach( element => {
//     console.log('Array.from(notesSaveBtn): ', notesSaveBtn)
//     element.addEventListener('click', editNoteTestTestTest)

//     // when you click the save button, send the text from the contenteditable div to the server. Update mealPlanStuff[i].note with that text. Then refresh the page.
    
// })


async function editNote(){
    const itemText = this.parentNode.childNodes[1].innerText
    const noteText = this.parentNode.childNodes[10].innerText
    const id = this.parentNode.id

    // id = id.charAt(0).toUpperCase() + id.slice(1)
    // console.log('editNote id: ', id)
    // console.log(itemText)
    // console.log(noteText)

    try{
        const response = await fetch(`edit-note-${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText,
                'noteFromJS': noteText
            })
          })
        const data = await response.json()
        console.log(data)
        // location.reload()
    }catch(err){
        console.log(err)
    }
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