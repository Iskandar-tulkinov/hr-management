"use strict";
const allModals = document.querySelector(".all-modals");
// All modals
allModals.innerHTML=`
<!-- Delete modal ----------->
<div
id="deleteModal"
class="modal hidden p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white z-10 font-bold flex-col justify-between gap-8">
<p
   class="block md:pl-4 md:pb-8 md:pr-16 text-[18px] md:text-[24px]">
   Are you sure to delete ?
</p>
<div class="flex justify-center gap-4 md:gap-8">
   <button onclick="deleteEmployeeData(${i})"
      class="deleteBtn py-[8px] px-[15px] bg-red-600 text-white rounded-xl active:scale-90 hover:bg-white hover:text-red-600 border-[2px] border-red-600 duration-300 ease-linear transition-all">
      Delete
   </button>
   <button
      onclick="closeModal()"
      class="btn cancel-btn bg-slate-400 py-[8px] px-[15px] rounded-xl duration-300 ease-linear transition-all hover:bg-slate-200 active:scale-90 border-slate-400 border-[2px]">
      Cancel
   </button>
</div>
</div>

</div>
`