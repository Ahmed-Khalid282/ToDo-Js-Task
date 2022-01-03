let btn = document.getElementById('add');
let input = document.getElementById('maininput');
let nodata = document.getElementById('nodata');
let tasks = document.getElementById('taskdata');


let addtask = () => {
    let task = input.value


    if (!task) {
        alert('You must enter a valid date');
        return;
    }

    nodata.classList.add('none')

    let taskdata = document.createElement('div')
    taskdata.classList = 'taskdata'

    let inputdata = document.createElement('input')
    inputdata.type = 'text'
    inputdata.classList = 'inputdata'
    inputdata.value = task
    taskdata.append(inputdata)
    inputdata.setAttribute('readonly', 'readonly')

    let delbtn = document.createElement('button')
    delbtn.classList = 'delbutton'
    delbtn.innerText = 'Delete'
    taskdata.append(delbtn)

    let edbtn = document.createElement('button')
    edbtn.classList = 'editebutton'
    edbtn.innerText = 'Edite'
    taskdata.append(edbtn)

    tasks.append(taskdata)

    let edite = () => {
        if (edbtn.innerText.toUpperCase() == "EDITE") {
            inputdata.removeAttribute('readonly')
            inputdata.focus()
            edbtn.innerText = "Save"
            edbtn.style.backgroundColor='#1e831e'
        } else {
            inputdata.setAttribute('readonly', 'readonly')
            edbtn.innerText = 'Edite'
            edbtn.style.backgroundColor='rgb(157 143 62)'
        }
    }

    edbtn.addEventListener('click', edite)

    let deletee = () => {
        tasks.removeChild(taskdata)
        if (tasks.childElementCount == 0) {
            nodata.classList.remove('none')
        }
    }


    delbtn.addEventListener('click', deletee)

    input.value = ''




}

btn.addEventListener('click', addtask)