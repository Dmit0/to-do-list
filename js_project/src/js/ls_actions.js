export function add_Task_toLS(input,name_of_list,id){
 
    const allTasks=getTasks(name_of_list);
    const Task={
         text:input,
         done:false,
         id:id
       }
     allTasks.push(Task);
     localStorage.setItem(name_of_list,JSON.stringify(allTasks));
  }
  
  
  export function getTasks(list){
    return  JSON.parse(localStorage.getItem(list) || '[]');
  }
  
  
  
  export function  delete_from_LS(id){
    let name_of_list=document.getElementById('name_of_task_list').innerHTML;
    let tasks=getTasks(name_of_list);
    tasks = tasks.filter(n => n.id !== id);
    localStorage.setItem(name_of_list,JSON.stringify(tasks));
  }

  
  
  
  
  export function changeTask(id,type){
 
    let name_of_list=document.getElementById('name_of_task_list').innerHTML;
    let tasks=getTasks(name_of_list);
    
    for(let task of tasks){
      if(id==task.id){
        if(type==true){
          task.done='checked'; 
        }else task.done=false;
  
      }
    }
   let newTasks=[];
   for(let task of tasks){
      newTasks.push(task);
    }
    localStorage.setItem(name_of_list,JSON.stringify(newTasks));
  }

  