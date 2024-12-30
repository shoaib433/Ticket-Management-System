let historyContainer = document.getElementById("history-container");
let historyTable = document.getElementById("history");
let tasksContainer = document.getElementById("show");
let add = document.getElementById("book-ticket");
function check() {
    let name1 = document.getElementById("name1");
    let seat = document.getElementById("seat").value;
    let date = document.getElementById("date").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    if (!name1 || !seat || !date || !from || !to) {
        alert("Please fill the Ticket ? ");
    } else {
        acceptData();
    }
}

let data = JSON.parse(localStorage.getItem("data")) || [];
let acceptData = () => {
    data.push({
        name1: name1.value,
        seat: seat.value,
        date: date.value,
        from: from.value,
        to: to.value,
    });
    saveData();
    showHistory();
};
let showHistory = () => {
    historyTable.innerHTML = "";
    data.forEach((task, index) => {
        historyTable.innerHTML += `
            <tr id="show">
                <td>T${task.seat}</td>
                <td>${task.name1}</td>
                <td>${task.seat}</td>
                <td>${task.date}</td>
                <td>${task.from}</td>
                <td>${task.to}</td>
                <td>Booked</td>
                <td id="delete"><div id="delete" onClick="deleteTask(${index})">Delete</div></td>
            </tr>`;
    });
    historyContainer.style.display = "block";
    resetForm();
};
let deleteTask = (index) => {
    data.splice(index, 1); 
    saveData(); 
    showHistory();
};
let saveData = () => {
    localStorage.setItem("data", JSON.stringify(data));
};
let resetForm = () => {
    name1.value = "";
    seat.value = "";
    date.value = "";
    from.value = "";
    to.value = "";
};