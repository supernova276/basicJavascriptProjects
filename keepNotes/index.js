//<button class="add_note">ADD NOTE</button>
const addNote=document.querySelector(".writenote");

//for local storage
const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    textAreaData.forEach((note)=>{
            return notes.push(note.value);
    })
        
    localStorage.setItem('notes',JSON.stringify(notes));
    }

const addNewNote=(text='')=>{
    //here we use create element so that we can create a div using javascript
    const note=document.createElement('div');
    //to add class note inside div
    note.classList.add('note');

    const htmlData=`
    <div class="note-nav">
    <button id="green">
    <i class="fa fa-pencil-square-o" aria-hidden="true" class="write"></i>
    </button>
    <button id="red">
    <i class="fa fa-trash" aria-hidden="true" class="delete"></i>
    </button>
</div> 
<div class="main"></div>
<textarea class=""></textarea>`;

//now we need to add this data inside the div already created by us
note.insertAdjacentHTML('afterbegin',htmlData);
//console.log(note); prints the div in the console
//appends the div into the main body
document.body.appendChild(note);

//getting the refrences
const writeButton=note.querySelector('#green');
const delButton=note.querySelector('#red');
const mainDiv=note.querySelector('.main');
const textArea=note.querySelector('textarea');

//deleting the node
delButton.addEventListener('click',()=>{
note.remove();
})
//toggle using edit button

textArea.value=text;

writeButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

textArea.addEventListener('change',(event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value;

})
}
//getting back the local storage
const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note)=>addNewNote())}
addNote.addEventListener('click',()=>{
    addNewNote();
})

//before begin aftr begin
