const openButton = document.getElementById("btn");
const closeButton = document.getElementById("btn2");
const modals = document.querySelector(".modal");
const openModal = () => {
    modals.classList.remove("hidden");
}

const closeModal = () => {
    modals.classList.add("hidden");
}

openButton.addEventListener("click",openModal);
closeButton.addEventListener("click",closeModal);