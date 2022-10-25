`use strict`

const input = document.getElementById ("search")
const blog = document.querySelectorAll (".blog")

let timer;
let sec = 400;

function liveSearch () {
    for (let i = 0; i < blog.length;  i++) {
        if (blog[i].innerText.toLowerCase().includes (input.value.toLowerCase ())) {
            blog[i].classList.remove("hidden");
        } 
        else {
            blog[i].classList.add ("hidden");
        }
    }
}

input.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        // setTimeout for making delay 500ms
        timer = setTimeout (liveSearch, 500)
})