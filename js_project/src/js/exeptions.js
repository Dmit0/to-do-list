export function throwExeption(){
    const err=document.querySelector('#err');
    const newError=document.createElement("div");
    newError.innerHTML=`<div class="alert alert-danger "id="err" role="alert">
    Need to chose a task
    </div>`
    err.prepend(newError);
    setTimeout(()=>{newError.remove()},500)
  }
