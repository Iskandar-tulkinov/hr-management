"use sctrict";
const btns=document.querySelectorAll("[data-target]");
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");
const cancelBtn = document.querySelector(".cancel-btn")

btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    document.querySelector(btn.dataset.target).classList.remove('hidden')
    overlay.classList.toggle("hidden")
  })
})
const closeModal = ()=>{
  modals.forEach(modal=>{
    modal.classList.add('hidden')
  })
  overlay.classList.toggle("hidden")
}
