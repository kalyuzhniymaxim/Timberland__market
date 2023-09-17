
let btn = document.querySelectorAll(".open-btn");
let modal = document.querySelectorAll(".modal");
let closeBtn = document.querySelectorAll(".modal__lose-btn");
let closes = document.querySelectorAll(".modal .modal__box");

btn.forEach((button, bt) =>{
    button.addEventListener("click", () =>{
        modal.forEach((mod, ind) =>{
            if (ind === bt){
        mod.classList.add("open")}
            
        })
    })
})

closeBtn.forEach((button) =>{
    button.addEventListener("click", () =>{
        modal.forEach((mod) =>{
            mod.classList.remove("open")
        })
    })
})

window.addEventListener("keydown" , (e) =>{
    if(e.key === "Escape"){
        modal.forEach((mod) =>{
            mod.classList.remove("open")
        })
    }
})

closes.forEach((clo) =>{
    clo.addEventListener('click', e =>{
        e._isClickWithInModal = true;
    });
})

modal.forEach((mod) =>{
    mod.addEventListener("click", e =>{
        if (e._isClickWithInModal) return;
        e.currentTarget.classList.remove("open")
    });
})



var today = new Date();
var now = today.toLocaleString();
var personName = document.querySelector("#name");
var personMessage = document.querySelector("#message");
var contactBook = document.querySelector("#phoneBook");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard {
    constructor(){
    this.firstName = personName;
    this.message = personMessage;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message.value}</p>
        </div>
        `;
    }

}


function saveContact() {
    if (
        personName.value.length > 0 &&
        personMessage.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard();
        contactBook.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}

var personName1 = document.querySelector("#name1");
var personMessage1 = document.querySelector("#message1");
var contactBook1 = document.querySelector("#phoneBook1");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard1 {
    constructor(){
    this.firstName1 = personName1;
    this.message1 = personMessage1;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName1.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message1.value}</p>
        </div>
        `;
    }

}


function saveContact1() {
    if (
        personName1.value.length > 0 &&
        personMessage1.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard1();
        contactBook1.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}

var personName2 = document.querySelector("#name2");
var personMessage2 = document.querySelector("#message2");
var contactBook2 = document.querySelector("#phoneBook2");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard2 {
    constructor(){
    this.firstName2 = personName2;
    this.message2 = personMessage2;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName2.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message2.value}</p>
        </div>
        `;
    }

}


function saveContact2() {
    if (
        personName2.value.length > 0 &&
        personMessage2.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard2();
        contactBook2.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}

var personName3 = document.querySelector("#name3");
var personMessage3 = document.querySelector("#message3");
var contactBook3 = document.querySelector("#phoneBook3");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard3 {
    constructor(){
    this.firstName3 = personName3;
    this.message3 = personMessage3;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName3.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message3.value}</p>
        </div>
        `;
    }

}


function saveContact3() {
    if (
        personName3.value.length > 0 &&
        personMessage3.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard3();
        contactBook3.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}

var personName4 = document.querySelector("#name4");
var personMessage4 = document.querySelector("#message4");
var contactBook4 = document.querySelector("#phoneBook4");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard4 {
    constructor(){
    this.firstName4 = personName4;
    this.message4 = personMessage4;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName4.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message4.value}</p>
        </div>
        `;
    }

}


function saveContact4() {
    if (
        personName4.value.length > 0 &&
        personMessage4.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard4();
        contactBook4.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}

var personName5 = document.querySelector("#name5");
var personMessage5 = document.querySelector("#message5");
var contactBook5 = document.querySelector("#phoneBook5");
// var formBtn = document.querySelectorAll(".order-btn")




class ContactCard5 {
    constructor(){
    this.firstName5 = personName5;
    this.message5 = personMessage5;
    this.now = now;
    }


    render() {
        return `
        <div class="phoneCard">
        <div>
            <p>${this.firstName5.value}</p>
            <p>${this.now}</p>
        </div>
            <p>${this.message5.value}</p>
        </div>
        `;
    }

}


function saveContact5() {
    if (
        personName5.value.length > 0 &&
        personMessage5.value.length > 0 &&   
        now.length > 0 
    ) {
        let obj = new ContactCard4();
        contactBook5.innerHTML += obj.render();
        document.forms[0].reset();


    } else {
        alert("Заполните все поля!");
    }
}







