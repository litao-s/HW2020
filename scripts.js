let tasks=[];

function renderEditor() {
    let inputEl=document.querySelector("#default-todo-panel .todo-editor> input");  
     
    let addTask = ()=>{
        let newTask = {
            title: inputEl.value,
            done: false,
        };
        inputEl.value="";
        tasks.push(newTask);
        console.log("tasks: ",tasks); 

        renderTasktems() 
    }

    inputEl.onkeypress = (e) =>{
    
    if(e.key==="Enter"){
        addTask();

    }
};
    

    let addEl=document.querySelector("#default-todo-panel .todo-editor> button"); 
    addEl.onclick = (e) => {
        addTask();
        };
} 
function renderTasktems() {
    console.log("render items");
   let itemsEl = document.querySelector("#default-todo-panel .todo-items");
   
   itemsEl.querySelectorAll("div").forEach((node)=>node.remove());
       
   
       
   console.log(itemsEl);

   for(let i=0;i<tasks.length;i++){
       let task =tasks[i];
       let itemEl=document.createElement("div");
       itemEl.className="task";
       


       let doneEl = document.createElement("input");
       doneEl.type ="checkbox";
       
       doneEl.checked=task.done;
       if(task.done){
       itemEl.classList.add("done");    
       } else{
        itemEl.classList.remove("done"); 
       }

       doneEl.onchange=(e)=>{
           task.done=e.target.checked;
           if(task.done){
            itemEl.classList.add("done");    
            } else{
             itemEl.classList.remove("done"); 
            }
       }
       itemEl.append(doneEl);

       let titleEl = document.createElement("label");
       titleEl.innerText =task.title;
       itemEl.append(titleEl);

       let cancelEl = document.createElement("button");
       cancelEl.innerText = "x";
       
      cancelEl.onclick=()=> {
          tasks.splice(i,1);
      };

       itemEl.append(cancelEl);

       itemsEl.append(itemEl);

      
       

   }
}
renderEditor();
renderTasktems();