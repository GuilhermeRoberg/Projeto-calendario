class event {
    title = "";
    description = "";
    date = new Date();
}

var events = [];

const editEvent = document.getElementById('editEvent');
const deleteEvent = document.getElementById('deleteEvent');
const createEvent = document.getElementById('createEvent');

const editEventDiv = document.getElementById('editEventDiv');
const deleteEventDiv = document.getElementById('deleteEventDiv');
const createEventDiv = document.getElementById('createEventDiv');

const editEventId = document.getElementById('editEventId');
const editDate = document.getElementById('editDate');
const editDescription = document.getElementById('editDescription');
const editTitle = document.getElementById('editTitle');

const editSave = document.getElementById('saveEvent');
const editCancel = document.getElementById('cancelEvent');

const cancelButton = document.getElementById('cancel');
const description = document.getElementById('eventDescription');
const title = document.getElementById('eventTile');
const list = document.getElementById('eventsList');
const data = document.getElementById('eventDate');
const addBut = document.getElementById('addEvent');

function resetAll() {
    editEvent.disabled = false;
    deleteEvent.disabled = false;
    createEvent.disabled = false;
    editEventDiv.style.display = 'none';
    deleteEventDiv.style.display = 'none';
    createEventDiv.style.display = 'none';
}

function clearEdit() {
    editEventId.value = "";
    editDate.value = "";
    editDescription.value = "";
    editTitle.value = "";
    editEventDiv.style.display = 'none';
}

function editEventById(value) {
    editTitle.value = events[value].title;
    editDescription.value = events[value].description;
    editDate.value = events[value].date.toISOString().split('T')[0];
    editEventId.value = value;
    editEventDiv.style.display = 'block';

    const buttonsNodeList = document.querySelectorAll('.editBtns');
    buttonsNodeList.forEach(editBtn => {
        editBtn.disabled = true;
    });
}

function updateList(parms = -1) {
    list.innerHTML = "<tr>\
                       <th>ID</th>\
                       <th>Date</th>\
                       <th>Title</th>\
                       <th>Description</th>\
                     </tr>";
    if (events.length === 0) return;

    events.forEach((event, index) => {
        const command = parms > -1
            ? (parms === 0
                ? `<button onclick='deleteEventById(${index})'>Delete</button>`
                : `<button class='editBtns' onclick='editEventById(${index})'>Edit</button>`)
            : "";

        list.innerHTML += `<tr>\
                             <td>${index}</td>\
                             <td>${event.date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</td>\
                             <td>${event.title}</td>\
                             <td>${event.description}</td>\
                             ${command ? `<td>${command}</td>` : ""}\
                           </tr>`;
    });
}

createEvent.addEventListener('click', function () {
    deleteEvent.disabled = true;
    editEvent.disabled = true;
    createEventDiv.style.display = 'block';
    cancelButton.style.display = 'block';
});

deleteEvent.addEventListener('click', function () {
    editEvent.disabled = true;
    createEvent.disabled = true;
    deleteEventDiv.style.display = 'block';
    cancelButton.style.display = 'block';
    updateList(0);
});

editEvent.addEventListener('click', function () {
    deleteEvent.disabled = true;
    createEvent.disabled = true;
    cancelButton.style.display = 'block';
    clearEdit();
    updateList(1);
});

editSave.addEventListener('click', function () {
    const date = new Date(editDate.value + 'T00:00:00'); 
    const now = new Date();
    now.setHours(0, 0, 0, 0); 

    if (date <= now) {
        alert("Data inválida");
        return;
    }

    events[editEventId.value].title = editTitle.value;
    events[editEventId.value].description = editDescription.value;
    events[editEventId.value].date = date;
    clearEdit();
    updateList(1);
});

editCancel.addEventListener('click', function () {
    clearEdit();
    updateList(1);
});

cancelButton.addEventListener('click', function () {
    resetAll();
    cancelButton.style.display = 'none';
    updateList(-1);
});

function addEvent() {
    const newEvent = new event();
    newEvent.title = title.value;
    newEvent.description = description.value;

    const date = new Date(data.value + 'T00:00:00');
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (isNaN(date.getTime())) {
        alert("Data inválida");
        return;
    }

    if (date < now) {
        alert("A data do evento não pode ser no passado");
        return;
    }

    if (title.value === "" || description.value === "" || data.value === "") {
        alert("Preencha todos os campos");
        return;
    }

    newEvent.date = date;
    events.push(newEvent);
    alert("Evento adicionado com sucesso");

    title.value = "";
    description.value = "";
    data.value = "";
    resetAll();
    updateList(-1);
    cancelButton.style.display = 'none';
}

function deleteEventById(value = -1) {
    if (value === -1) {
        events.splice(deleteID.value, 1);
    } else {
        events.splice(value, 1);
    }
    updateList();
}

addBut.addEventListener('click', addEvent);
updateList();
