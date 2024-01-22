"use strict";

import { addEditModal, deleteModal,logoutModal } from "../components/modals-data/modal-content.js";
document.body.prepend(addEditModal)
document.body.prepend(deleteModal)
document.body.prepend(logoutModal)

const btns=document.querySelectorAll("[data-target]");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const cancelBtn = document.querySelector(".cancel-btn");

//fun
 function openModal(){
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetElement = document.querySelector(btn.dataset.target);
      console.log("Target Element:", targetElement);

      if (targetElement) {
        targetElement.classList.remove('hidden');
        overlay.classList.remove("hidden");
      }
    });
  });

}



function closeModal (){
  modals.forEach(modal=>{
    modal.classList.add('hidden')
  })
  overlay.classList.add("hidden")
  document.body.classList.remove('overflow-hidden');
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
