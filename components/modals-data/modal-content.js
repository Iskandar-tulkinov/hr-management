"use strict";
export const addEditModal= document.createElement("div");
addEditModal.innerHTML=`
<!------ Add Employee modal  ----->
<div  id="employeeModal"
   class="modal  hidden flex-col absolute top-0 left-0 w-full md:w-fit h-full md:h-fit md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] bg-white z-30 md:rounded-xl md:overflow-y-auto">
   <div class="flex justify-between border-b-2 border-b-gray-400 p-6">
      <h2 class="modal__title text-[24px] font-bold">Add new Employee</h2>
      <button onclick="closeModal()"
         class="close-icon bg-slate-200 hover:bg-red-700 rounded-lg active:scale-90 duration-3 ease-linear transition-all focus:bg-red-700"
         role="button">
         <img class="" src="../../assets/img/close.svg" alt="Close icon" width="30" height="30" />
      </button>
   </div>
   <form id="employeeForm"
      class="flex flex-col justify-between p-6 gap-3 md:gap-6 lg:p-10 h-full md:h-full md:w-fit md:rounded-xl">
      <div class="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-10">

         <!-- Full Name -->
         <div class="flex flex-col gap-3">
            <label for="fullName"
               class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Your Full Name
            </label>
            <div class="w-full">
               <input type="text" id="fullName" name="fullName"
                  class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5 capitalize"
                  placeholder="John Smith" required />
            </div>
         </div>
         <!-- Age-->
         <div class="flex flex-col gap-3">
            <label for="age"
               class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Age
            </label>
            <div class="w-full">
               <input type="text" inputmode="numeric" min="14" max="100" maxlength="3" id="age" name="age"
                  class="age-input bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                  placeholder="22" required />
            </div>
         </div>
         <!-- Department -->
         <div class="flex flex-col gap-3">
            <label
               class="block w-full antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Department
            </label>
            <div class="relative  p-2 border rounded-lg ">
               <div class="department-wrapper flex items-center justify-between cursor-pointer">
                  <span id="department" class="w-full h-full">ِAccounting</span>
                  <img
                     class="downIcon  inline-block cursor-pointer  bg-gray-300 hover:bg-red-500 duration-200 transition-all  border rounded-lg active:scale-120 "
                     src="../../assets/img/icon-arrow-down.svg" alt="icon-arrow-down">
               </div>
               <ul
                  class="departmentList hidden  bg-white z-10  absolute bottom-0 left-0 translate-y-[102%] border border-gray-400 rounded-lg w-full duration-300 ease-linear transition-all cursor-pointer ">
                  <li class="departmentOption px-2 py-1 border-b  hover:bg-slate-200 ">Accounting</li>
                  <li class="departmentOption px-2 py-1 border-b hover:bg-slate-200">IT</li>
                  <li class="departmentOption px-2 py-1 border-b hover:bg-slate-200">Marketing</li>
                  <li class="departmentOption px-2 py-1 border-b hover:bg-slate-200">Management</li>
               </ul>
            </div>

         </div>
         <!-- Position -->
         <div class="flex flex-col gap-3">
            <label for="position"
               class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Position
            </label>
            <div class="w-full">
               <input type="text" id="position"
                  class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5 capitalize"
                  placeholder="Position" required />
            </div>
         </div>
         <!-- Gender -->
         <div class="flex flex-col gap-3">
            <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Gender
            </label>
            <div class="w-full">
               <div class="flex md:flex-col lg:flex-row lg:gap-5">
                  <label for="male" class="mt-px font-light text-gray-700 cursor-pointer select-none" for="Male">
                     <input type="radio" id="male" name="gender" value="Male">Male
                  </label>
                  <label for="female" class="mt-px font-light text-gray-700 cursor-pointer select-none" for="Female">
                     <input type="radio" id="female" name="gender" value="Female">Female
                  </label>
               </div>
            </div>
         </div>
         <!-- Date of birth -->
         <div class="flex flex-col gap-3">
            <label for="birthday"
               class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
               Date Of Birth
            </label>
            <div class="w-full">
               <input type="date" id="birthday" min="1920-01-01" max="20024-01-01"
                  class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                  placeholder="22" required />
            </div>
         </div>
      </div>
      <!-- Submit -->
      <div class="flex self-center justify-center items-center">
         <button type="submit" form="employeeForm"
            class="btn submit-btn bg-slate-950 border w-full h-fit border-slate-950 transition-all duration-200 font-bold text-sky-50 py-4 px-6 rounded-lg hover:bg-blue-600 active:text-slate-950 active:bg-sky-50 active:scale-95 cursor-pointer">Submit</button>
      </div>
   </form>
</div>
`
export const deleteModal= document.createElement('div');
deleteModal.innerHTML = `
<!-- Delete modal ----------->
<div id="deleteModal"
   class="modal hidden p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white z-30 font-bold flex-col justify-between gap-8">
   <p class="block md:pl-4 md:pb-8 md:pr-16 text-[18px] md:text-[24px]">
      Are you sure to delete ?
   </p>
   <div class="flex justify-center gap-4 md:gap-8">
      <button
         class="deleteBtn py-[8px] px-[15px] bg-red-600 text-white rounded-xl active:scale-90 hover:bg-white hover:text-red-600 border-[2px] border-red-600 duration-300 ease-linear transition-all">
         Delete anyway
      </button>
      <button onclick="closeModal()"
         class="btn cancel-btn bg-slate-400 py-[8px] px-[15px] rounded-xl duration-300 ease-linear transition-all hover:bg-slate-200 active:scale-90 border-slate-400 border-[2px]">
         Cancel
      </button>
   </div>
</div>
`
export const logoutModal=document.createElement('div')
logoutModal.innerHTML=` 
<!------------ Lougout modal ------------>
<div id="logoutModal"
   class="modal hidden p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white z-30 font-bold flex-col justify-between gap-8 ">
   <p class="block md:pl-4 md:pb-8 md:pr-16 text-[18px] md:text-[24px] text-center">
      Are you sure to
      <span class="text-red-700 text-[18px] md:text-[24px]">logout</span>
      ?
   </p>
   <div class="flex justify-center gap-4 md:gap-8">
      <button onclick="logout()"
         class="logoutBtn py-[8px] px-[15px] bg-red-600 text-white rounded-xl active:scale-90 hover:bg-white hover:text-red-600 border-[2px] border-red-600 duration-300 ease-linear transition-all">
         Logout anyway
      </button>
      <button onclick="closeModal()"
         class="btn cancel-btn bg-slate-400 py-[8px] px-[15px] rounded-xl duration-300 ease-linear transition-all hover:bg-slate-200 active:scale-90 border-slate-400 border-[2px]">
         Cancel
      </button>
   </div>
</div>
`