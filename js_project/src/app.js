import './scss/style.scss';
import './js/bar.js';
import './js/variables.js';

import {isActive} from './js/activeTask.js';
import {taskCreate,Del,tasksLoad} from './js/taskList.js';
import {isValid} from './js/additional.js';
import {listCreate,listLoad,delete_list} from './js/list_of_tasks.js';
import {active_list} from './js/active_list.js';



const text_of_input_task=document.getElementById("text_of_task");
const add_task_btn=document.querySelector('#add_task_btn');
const del_task_btn=document.querySelector('#btnDelTask');
const taskList=document.getElementById('taskList');
//all about list
const text_of_input_list=document.querySelector("#text_of_list");
const add_list_btn=document.querySelector('#add_list_btn');
const del_list_btn=document.querySelector('#del_list_btn');
const list_lists=document.querySelector('.list_of_lists');

//is input have no text?
text_of_input_task.addEventListener('input',()=>{
    add_task_btn.disabled=!isValid(text_of_input_task.value)
})
text_of_input_list.addEventListener('input',()=>{
    add_list_btn.disabled=!isValid(text_of_input_list.value)
})


//all about  tasks 
add_task_btn.addEventListener('click',taskCreate);
taskList.addEventListener('click',isActive);
del_task_btn.addEventListener('click',Del);
window.addEventListener('load',tasksLoad);
window.addEventListener('load',listLoad);
//all about lists
add_list_btn.addEventListener('click',listCreate);
list_lists.addEventListener('click',active_list)
del_list_btn.addEventListener('click',delete_list)
