console.log('hello')
shownotes()

/*note addition wala part*/

let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }

     notesobj.push(addtxt.value);
     localStorage.setItem("notes",JSON.stringify(notesobj));
     addtxt.value="";
     console.log(notesobj);
     shownotes()

})

/* localstorage wala function*/

function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }

    let html=" ";
    notesobj.forEach(function(element,index) {
        html+= `
        <div class="notecard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)"  class="btn btn-warning">Delete Note</button>
        </div>
    </div>
    `  
    });
    let noteselm =document.getElementById('notes');
    if(notesobj.length!=0){
        noteselm.innerHTML=html;
    }
    else{
        noteselm.innerHTML=`Nothing to show Please "Add a Note."`
    }

    


}

/*note delete wala function*/

function deletenote(index){
    console.log("I am deleting",index);

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes()

}


/* abbb hmlog search wala code likhenge as usual boring sa kaaam */


let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener("input",function(){
    let inputval=searchtxt.value.toLowerCase();
   
    let notecard=document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";

        }
        
    })

})







