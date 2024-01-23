"use strict";

import { addEditModal, deleteModal,logoutModal } from "../components/modals-data/modal-content.js";
document.body.prepend(addEditModal)
document.body.prepend(deleteModal)
document.body.prepend(logoutModal)






//////
 const ageInputs = document.querySelectorAll(".age-input");
  ageInputs.forEach(ageInput=>{
    ageInput.addEventListener("input", (e) => {
      const ageValue = e.target.value.replace(/\D/g, "");
      // remove non-numeric values
      e.target.value = ageValue.trim();
     });
   })
