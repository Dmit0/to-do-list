import {changeTask} from './ls_actions.js';
export function isActive(event){
        if(event.target.tagName==="LABEL"){
              if(event.target.classList.contains('done')){
                    event.target.classList.remove('done');
                    changeTask(event.target.htmlFor,false); 
              }
              else{
                event.target.classList.add('done')
                changeTask(event.target.htmlFor,true)
              }
          
        }
        
        
        if (event.target.tagName != "A") return;
        
        if(event.target.classList.contains('active_item')){
          switcher(event.target);
        } 
        else singleselect(event.target)
    }

        
    
    function switcher(a){
          a.classList.remove('active_item');
        }

       
       
        function singleselect(a){
            
            let tasks = taskList.querySelectorAll('a');
            for(let i=0;i<tasks.length;i++)
            {
              if (tasks[i].classList.contains("active_item"))
              {
                tasks[i].classList.remove('active_item');
              }
            
            }
          
            a.classList.add('active_item');
        }
        
        
