import {tasksLoad} from './taskList.js';
   

export function active_list(event){
  if(event.target.tagName!='A') return;
    document.getElementById('name_of_task_list').innerHTML=event.target.textContent;
  let list = document.getElementById('taskList');
  let el_to_remove=list.querySelectorAll('div');
  for(let i=0;i<el_to_remove.length;i++)
  {
      el_to_remove[i].remove();
  }
  tasksLoad();
  select_list(event.target);


}

function select_list(a)
{
  let tasks = document.querySelectorAll('a');
  for(let i=0;i<tasks.length;i++)
  {
    if (tasks[i].classList.contains("active_list"))
    {
      tasks[i].classList.remove('active_list');
    }
   
  }
 
 a.classList.add('active_list');
}
