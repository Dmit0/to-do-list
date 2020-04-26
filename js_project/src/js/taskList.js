import {isValid} from './additional.js';
import {throwExeption} from './exeptions.js';
import './variables.js';
import {add_Task_toLS,delete_from_LS,getTasks} from './ls_actions.js';




const text_of_input_task=document.getElementById("text_of_task");
const list_tasks=document.querySelector('.list_of_tasks');
let taskList=document.getElementById('taskList');


let id=startId();

function startId(){
let name_of_list=document.getElementById('name_of_task_list').innerHTML;
let tasks=getTasks(name_of_list);
let mas=[]
for(let task of tasks){
  mas.push(task.id)
}
if(mas.length==0){
  return 1
}
else return Math.max.apply(null,mas)
}

export function taskCreate(){
 
     if(isValid(text_of_input_task.value)){  
        id++;
              const newTask=document.createElement("div");
              newTask.innerHTML=taskHtml(text_of_input_task.value,id,false);
              list_tasks.appendChild(newTask);
              let name_of_list=document.getElementById('name_of_task_list').innerHTML;
              add_Task_toLS(text_of_input_task.value,name_of_list,id);
              text_of_input_task.value="";  
    }
}

 function taskHtml(content,id,done){
   let check;
  if(done=="checked"){
     check='done';
   }
   else check='';
    return `<div class="box">
    <input id="${id}" type="checkbox"${done}>
    <span class="check"></span>
    <label for="${id}" class="${check}"><a href="#" class="list-group-item list-group-item-action">${content}</a>
  </div>
    `
    
  
}
export function Del(){
    let flag=0;
    let task_of_el=taskList.querySelectorAll('div');
    for(let i=0;i<task_of_el.length;i++){
      let task=task_of_el[i].querySelectorAll('a');
      for(let value of task){
         if(value.classList.contains('active_item')){
          const label=task_of_el[i].querySelector('label');
          let id=Number(label.htmlFor);
           task_of_el[i].remove();
           flag=1; 
           delete_from_LS(id);
         }
      }
     }
     
     if(flag===0){
        throwExeption();
    }
    
}


export function tasksLoad(){
  let name_of_list=document.getElementById('name_of_task_list').innerHTML;
  let tasks=getTasks(name_of_list);
  for(let task of tasks){
    vewTask(task.text,task.id,task.done)
  }
  
  

}

function vewTask(text,id,done){
  const newTask=document.createElement("div");
  newTask.innerHTML=taskHtml(text,id,done);
  list_tasks.appendChild(newTask);

}
