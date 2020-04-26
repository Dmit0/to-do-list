import {isValid} from './additional.js';


const text_of_input_list=document.querySelector("#text_of_list");
const list_lists=document.querySelector('.list_of_lists');


export function listCreate(){
 
    if(isValid(text_of_input_list.value)){  
      
      const newList=document.createElement("li");
      newList.innerHTML=listHtml(text_of_input_list.value);
      list_lists.appendChild(newList);
      text_of_input_list.value="";            
   }
}

export function listHtml(text){

   return `
   <a href='#'><i class="icon icon-th-list pr-2"></i>${text}</a>
   `
}

export function listLoad(){
   for (let j = 0; j < localStorage.length; j++){
     let myKey = localStorage.key(j);
     if(myKey!=='tasks' && myKey!=='loglevel:webpack-dev-server'){ 
         const newList=document.createElement("li");
         newList.innerHTML=listHtml(myKey);
         list_lists.appendChild(newList);
     }
     
   }
 }
 export function delete_list(){
   let task=list_lists.querySelectorAll('a');
   for(let i=0;i<task.length;i++)
    {
      if (task[i].classList.contains('active_list'))
      {
       
       
            for (let j = 0; j < localStorage.length; j++) 
               {
             
                let myKey = localStorage.key(j);
            
                  if (myKey==task[i].textContent)
                  {
                   
                    localStorage.removeItem(myKey);
                  }
                  
               }
               task[i].remove();
      }
        
    }
 }