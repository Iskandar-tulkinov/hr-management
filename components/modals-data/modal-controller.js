"use strict";
const btns=document.querySelectorAll("[data-target]");
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");
const cancelBtn = document.querySelector(".cancel-btn");

btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    document.querySelector(btn.dataset.target).classList.remove('hidden')
    overlay.classList.remove("hidden")
  })
})
const closeModal = ()=>{
  modals.forEach(modal=>{
    modal.classList.add('hidden')
  })
  overlay.classList.add("hidden")
}


 document.addEventListener('keydown',(e)=>{
  if(e.key=='Escape'){
closeModal();
  }
 });

//////
const ageInputs = document.querySelectorAll(".age-input");
ageInputs.forEach(ageInput=>{
  ageInput.addEventListener("input", (e) => {
    const ageValue = e.target.value.replace(/\D/g, "");
    // remove non-numeric values
    e.target.value = ageValue.trim();
   });
 })