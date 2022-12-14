`use strict`

const form = document.getElementById ("form")
const textInput = document.getElementById ("textInput")
const msg = document.getElementById ("msg")
const dateInput = document.getElementById ("dateInput")
const textArea= document.getElementById ("textArea")
const tasks = document.getElementById ("tasks")
const add = document.getElementById ("add")


form.addEventListener ('submit',  (e) => {
        e.preventDefault ();
        formValidation ();
});

const formValidation = () => {
    if (textInput.value === "") {
            console.log(`failure`);
            msg.innerHTML = "Task cannot be blank"
    }
    else {
            console.log(`success`);
            msg.innerHTML = ""
            acceptData ();
            createTask ();
    }
}

// const bookCover = document.getElementById ("bookCover")
// let uploadedBookCover = ""

// bookCover.addEventListener ("change", () => {
//     const reader = new FileReader ();
//     reader.addEventListener ("load", () => {
//         uploadedBookCover = reader.result;
//        const newCover =  document.getElementById("newCover").style.backgroundImage = `url(${uploadedBookCover})`
//     })
//     reader.readAsDataURL (this.files[0]);
// })


let data = {}

const acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value
    data["description"] = textArea.value
    data["image"] = bookCover.value
    console.log(data);
    add.setAttribute ("data-bs-dismiss", "modal");
    add.click ();
    (() => {
        add.setAttribute("data-bs-dismiss", "");
    })();
}

// <div id="newCover">${data.bookCover}</div>

const createTask = () => {
    tasks.innerHTML += 
    `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i onClick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deleteTask(this)" class="fa-solid fa-trash"></i>
    </span>
</div>
    `
    resetForm ();
}

const deleteTask = (e) => {
    e.parentElement.parentElement.remove ();
}

const updateTask = (e) => {
   const selectedTask = e.parentElement.parentElement
    textInput.value = selectedTask.children[0].innerHTML
    dateInput.value = selectedTask.children[1].innerHTML
    textArea.value = selectedTask.children[2].innerHTML
    deleteTask (e)
}

const resetForm = () => {
    textInput.value = ""
    dateInput.value = ""
    textArea.value = ""
}