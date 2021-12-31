let btn = document.getElementById('add');
let input = document.getElementById('maininput');
let nodata = document.getElementById('nodata');
let taskdata = document.getElementById('taskdata');
let pp = document.getElementById('pp');
let del = document.getElementById('delete')


let show = () =>{
    let task = input.value
    if(!task){
        alert('You must enter valid data');
    }else{
        pp.innerText = task;
        taskdata.style.display = 'flex';
        nodata.style.display = 'none'
    }
}

btn.addEventListener('click' , show)


let remove = () =>{
    taskdata.style.display = 'none';
    nodata.style.display = 'block'
}

del.addEventListener('click' , remove)