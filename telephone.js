let btnTel = document.getElementById("open-btn-telephone");
let modalTel = document.getElementById("my-modal-telephone");
let closeBtnTel = document.getElementById("close-my-modal-btn-telephone");

btnTel.addEventListener('click', () =>{
modalTel.classList.add("open-tel")
});

closeBtnTel.addEventListener("click",() => {
    modalTel.classList.remove("open-tel")
});

window.addEventListener("keydown" , (e) =>{
    if(e.key === "Escape"){
        modalTel.classList.remove("open-tel")
    }
});

document.querySelector("#my-modal-telephone .modal__box-telephone").addEventListener('click', e =>{
    e._isClickWithInModal = true;
});
modalTel.addEventListener("click", e =>{
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove("open-tel")
});

const TOKEN = "6566635638:AAFokwBsQ-s1BUkUix58MRnsfPibd1I2Vy8";
const CHAT_ID = "-1001956716955";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById("tg").addEventListener("submit", function(e){
    e.preventDefault();

    let massage = `<b>Заявка</b>\n`
    massage += `<b>Отправитель:</b>${this.name.value}\n`
    massage += `<b>Телефон:</b>${this.tel.value}\n`
    massage += `<b>Почта:</b>${this.email.value}`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: massage
    })
    .then((res) =>{
        this.name.value = ""
        this.tel.value = ""
        this.email.value = ""
        alert("Ваша заявка отправлена!")
        modal.classList.remove("open")
    })
    .catch((err) =>{
        console.warn(err)
    })
    .finally(() =>{
        console.log('Конец')
    })
})


