`use strict`

const form = document.getElementById ("form")
const input = document.getElementById ("input")
const msg = document.getElementById ("msg")
const posts = document.getElementById ("posts")

form.addEventListener ("submit",  (e) => {
    e.preventDefault ()
    formValidation ()
})

const formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank"
        console.log(`failure`);
    }
    else {
        console.log(`success`);
            msg.innerHTML = ""
            acceptData ()
    }
}

let data = {};

const acceptData = () => {
    data["text"] =  input.value
    console.log(data);
    createPost ();
}

const createPost = () => {
    posts.innerHTML+= `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost (this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost (this)" class="fa-solid fa-trash-can"></i>
    </span>
    </div>
    `
    input.value = ""
}

const deletePost = (e) => {
    e.parentElement.parentElement.remove ();
    console.log(`deleted post`);
}

const editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove ();
}

