const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const done = document.getElementById('done');

const title = document.getElementById('input-title');
const description = document.getElementById('ta-description');
const priority = document.getElementById('select-priority');


const generate = document.getElementById('generate');

generate.addEventListener('click', renderTask);

function renderTask() {
    GenerateCard();
}


function GenerateCard(board = todo) {
    
    const card = document.createElement('div');
    card.classList.add('card-task');
    const btnClose = document.createElement('button');
    btnClose.classList.add('btn-close');
    btnClose.textContent = 'X';    
    const titleList = document.createElement('h2');
    titleList.textContent = title.value;
    const descriptionList = document.createElement('p');
    descriptionList.textContent = description.value;
    const priorityList = document.createElement('p');
    priorityList.textContent = priority.value;
    const selectList = document.createElement('select');
    selectList.classList.add('select-list');
    const optToDo = document.createElement('option');
    const optMove = document.createElement('option');
    const optDoing = document.createElement('option');
    const optDone = document.createElement('option');

    optMove.value = "Move";
    optToDo.value = "ToDo";
    optDoing.value = "Doing";
    optDone.value = "Done";

    optMove.textContent = "Move";
    optToDo.textContent = "ToDo";
    optDoing.textContent = "Doing";
    optDone.textContent = "Done";

    selectList.appendChild(optMove);
    selectList.appendChild(optToDo);
    selectList.appendChild(optDoing);
    selectList.appendChild(optDone);

    card.appendChild(btnClose);
    card.appendChild(titleList);
    card.appendChild(descriptionList);
    card.appendChild(priorityList);
    card.appendChild(selectList);

    board.appendChild(card);

    const close = document.querySelector('.btn-close');
    close.addEventListener('click', closeCard);
    const selectMove = document.querySelector('.select-list');
    selectMove.addEventListener('change', moveCard);
}

function moveCard(event) {
    
    const selectCard = event.target.value;    
    
    if (selectCard === "ToDo") {
        GenerateCard();
    } else if (selectCard === "Doing") {
        GenerateCard(doing);
    } else {
        GenerateCard(done);
    }
}

function closeCard(event) {
    event.target.parentElement.remove();
}


