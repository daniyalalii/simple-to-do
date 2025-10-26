document.addEventListener("DOMContentLoaded", () => {

let input = document.getElementById("input");
let button = document.querySelector('.btn');
let table = document.getElementById("taskBody");

button.addEventListener("click",()=>{
    const tasks = input.value.trim();
    if(tasks=="") return;
    const row = document.createElement('tr');
    const data = document.createElement('td');

    data.textContent = tasks;

    const status = document.createElement("td");
    status.classList.add("status");
    status.textContent = "Pending";
    status.style.cursor = "pointer";

    // status.addEventListener("click",()=>{
    //     if(status.textContent==="pending"){
    //         status.textContent = "Completed";
    //     }
    //     else{
    //         status.textContent = "Pending";
    //     }
    // });
    
    status.addEventListener("click", () => {
            status.textContent = status.textContent === "Pending" ? "Completed" : "Pending";
        });

    const deleteData = document.createElement("td");
    const deleteBtn = document.createElement("td");

    deleteBtn.innerHTML = `<img src="delete.svg" alt="">`;
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click",()=>{
        row.remove();
    });

    deleteData.appendChild(deleteBtn);
    row.appendChild(data);
    row.appendChild(status);
    row.appendChild(deleteData);

    table.appendChild(row);

    input.value = "";
});

});