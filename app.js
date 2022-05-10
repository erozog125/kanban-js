const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const done = document.getElementById('done');

const title = document.getElementById('input-title');
const description = document.getElementById('ta-description');
const priority = document.getElementById('select-priority');

const generate = document.getElementById('generate');

generate.addEventListener('click', GenerateCard);

function GenerateCard() {

    const card = document.createElement('div');
    card.classList.add('card-task');
    const titleList = document.createElement('h2');
    titleList.textContent = title.value;
    const descriptionList = document.createElement('p');
    descriptionList.textContent = description.value;
    const priorityList = document.createElement('p');
    priorityList.textContent = priority.value;
    const selectList = document.createElement('select');
    const optToDo = document.createElement('option');
    const optMove = document.createElement('option');
    const optDoing = document.createElement('option');
    const optDone = document.createElement('option');

    optMove.value = "Move";
    optToDo.value = "todo";
    optDoing.value = "doing";
    optDone.value = "done";

    optMove.textContent = "Move";
    optToDo.textContent = "todo";
    optDoing.textContent = "doing";
    optDone.textContent = "done";


    selectList.appendChild(optMove);
    selectList.appendChild(optToDo);
    selectList.appendChild(optDoing);
    selectList.appendChild(optDone);

    card.appendChild(titleList);
    card.appendChild(descriptionList);
    card.appendChild(priorityList);
    card.appendChild(selectList);

    todo.appendChild(card);
}


