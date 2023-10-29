let btn = document.getElementById("open-btn-category");
let modal = document.getElementById("my-modal-category");
let closeBtn = document.querySelectorAll(".modal__box-category li");

btn.addEventListener('click', () =>{
modal.classList.add("open")
});

closeBtn.forEach((close) =>{
    close.addEventListener("click",() => {
        modal.classList.remove("open")
    });
})

// closeBtn.addEventListener("click",() => {
//     modal.classList.remove("open")
// });

window.addEventListener("keydown" , (e) =>{
    if(e.key === "Escape"){
        modal.classList.remove("open")
    }
});

document.querySelector("#my-modal-category .modal__box-category").addEventListener('click', e =>{
    e._isClickWithInModal = true;
});
modal.addEventListener("click", e =>{
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove("open")
});


