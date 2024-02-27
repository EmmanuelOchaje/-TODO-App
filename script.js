const Content = document.querySelector('.content')
const AddItem = document.querySelector('.add-item')
const Add = document.querySelector('.add')
const Delete = document.querySelector('.delete')
const Edit = document.querySelector('.edit')
const Para = document.querySelector('.para')

const AddFunc = function(value){
    let html = `
    <div class="text">
          <div class="indiv">
            <div class="para">${value}</div>
            <div class="btn">
              <input type="button" class="delete" value="Delete" />
              <input type="button" class="edit" value="Edit" />
            </div>
    </div>
    `;
    Content.insertAdjacentHTML('beforeend',html)
}

Add.addEventListener('click', ()=>{
    //preventDefault()
    if(AddItem.value){
        let cont =  AddItem.value
        AddFunc(cont)
        //Para.textContent = 
        AddItem.value = ''
        console.log('Hey')
    }
})


Edit.addEventListener('click', ()=>{
    AddItem.value = Para.textContent
    Para.textContent = ''
})