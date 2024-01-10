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
   <button
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

<!------------ Lougout modal ------------>
<div
id="logoutModal"
class="modal hidden p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white z-10 font-bold flex-col justify-between gap-8 h-[400px]">
<p
   class="block md:pl-4 md:pb-8 md:pr-16 text-[18px] md:text-[24px] text-center">
   Are you sure to
   <span class="text-red-700 text-[18px] md:text-[24px]">logout</span>
   ?
</p>
<div class="flex justify-center gap-4 md:gap-8">
   <button
      class="logoutBtn py-[8px] px-[15px] bg-red-600 text-white rounded-xl active:scale-90 hover:bg-white hover:text-red-600 border-[2px] border-red-600 duration-300 ease-linear transition-all">
      Logout
   </button>
   <button
      onclick="closeModal()"
      class="btn cancel-btn bg-slate-400 py-[8px] px-[15px] rounded-xl duration-300 ease-linear transition-all hover:bg-slate-200 active:scale-90 border-slate-400 border-[2px]">
      Cancel
   </button>
</div>
</div>



<!------------ Edit modal ------------->
<div
id="editModal"
class="modal hidden flex-col absolute top-0 left-0 w-full md:w-fit h-full md:h-fit md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] bg-white z-10 md:rounded-xl">
<div class="flex justify-between border-b-2 border-b-gray-400 p-6">
   <h2 class="text-[24px] font-bold">Edit Employee's Data</h2>
   <button onclick="closeModal()"
      class="close-icon bg-slate-200 hover:bg-red-700 rounded-lg active:scale-90 duration-3 ease-linear transition-all focus:bg-red-700"
      role="button">
      <img
         class=""
         src="../../assets/img/close.svg"
         alt="Close icon"
         width="30"
         height="30" />
   </button>
</div>
<form
   class="flex flex-col justify-between p-6 gap-3 md:gap-6 lg:p-10 h-full md:h-full md:w-fit md:rounded-xl">
   <div
      class="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-10">
      <div class="flex flex-col gap-3">
         <label
            for="fullName"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Your Full Name
         </label>
         <div class="w-full">
            <input
               type="text"
               id="fullName"
               name="fullName"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="John Khan"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="age"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Age
         </label>
         <div class="w-full">
            <input
               type="text"
               inputmode="numeric"
               min="14"
               max="100"
               maxlength="3"
               step="1"
               id="age"
               name="age"
               class="age-input bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="22"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            class="block w-full antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Department
         </label>
         <div class="w-full">
            <select
               required
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-fit p-2.5">
               <option value="Accounting">Accounting</option>
               <option value="IT">IT</option>
               <option value="Marketing">Marketing</option>
            </select>
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="position"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Position
         </label>
         <div class="w-full">
            <input
               type="text"
               id="position"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="Position"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Gender
         </label>
         <div class="w-full">
            <div class="flex md:flex-col lg:flex-row lg:gap-5">
               <div class="inline-flex items-center">
                  <label
                     class="relative flex items-center p-3 rounded-full cursor-pointer"
                     htmlFor="html">
                     <input
                        name="gender"
                        id="male"
                        type="radio"
                        class="before:content[''] peer relative p-2 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="male" />
                     <span
                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-3.5 w-3.5"
                           viewBox="0 0 16 16"
                           fill="currentColor">
                           <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"></circle>
                        </svg>
                     </span>
                  </label>
                  <label
                     class="mt-px font-light text-gray-700 cursor-pointer select-none"
                     for="male">
                     Male
                  </label>
               </div>
               <div class="inline-flex items-center">
                  <label
                     class="relative flex items-center p-3 cursor-pointer"
                     htmlFor="react">
                     <input
                        name="gender"
                        type="radio"
                        required
                        class="before:content[''] peer relative p-2 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="female" />
                     <span
                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-3.5 w-3.5"
                           viewBox="0 0 16 16"
                           fill="currentColor">
                           <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"></circle>
                        </svg>
                     </span>
                  </label>
                  <label
                     class="mt-px font-light text-gray-700 cursor-pointer select-none"
                     for="female">
                     Female
                  </label>
               </div>
            </div>
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="birthday"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Date Of Birth
         </label>
         <div class="w-full">
            <input
               type="date"
               id="birthday"
               min="1920-01-01"
               max="20024-01-01"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="22"
               required />
         </div>
      </div>
   </div>

   <div class="flex self-center justify-center items-center">
      <input
         class="btn bg-slate-950 border w-full h-fit border-slate-950 transition-all duration-200 font-bold text-sky-50 py-4 px-6 rounded-lg hover:bg-blue-600 active:text-slate-950 active:bg-sky-50 active:scale-95 cursor-pointer"
         role=" button"
         type="submit"
         value="Submit" />
   </div>
</form>
</div>


<!------ Add Employee modal  ----->

<div
id="addEmployeeModal"
class="modal hidden flex-col absolute top-0 left-0 w-full md:w-fit h-full md:h-fit md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] bg-white z-10 md:rounded-xl">
<div class="flex justify-between border-b-2 border-b-gray-400 p-6">
   <h2 class="text-[24px] font-bold">Add new Employee</h2>
   <button onclick="closeModal()"
      class="close-icon bg-slate-200 hover:bg-red-700 rounded-lg active:scale-90 duration-3 ease-linear transition-all focus:bg-red-700"
      role="button">
      <img
         class=""
         src="../../assets/img/close.svg"
         alt="Close icon"
         width="30"
         height="30" />
   </button>
</div>
<form
   class="flex flex-col justify-between p-6 gap-3 md:gap-6 lg:p-10 h-full md:h-full md:w-fit md:rounded-xl">
   <div
      class="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-10">
      <div class="flex flex-col gap-3">
         <label
            for="fullName"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Your Full Name
         </label>
         <div class="w-full">
            <input
               type="text"
               id="fullName"
               name="fullName"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="John Khan"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="age"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Age
         </label>
         <div class="w-full">
            <input
               type="text"
               inputmode="numeric"
               min="14"
               max="100"
               maxlength="3"
               id="age"
               name="age"
               class="age-input bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="22"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            class="block w-full antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Department
         </label>
         <div class="w-full">
            <select
               required
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-fit p-2.5">
               <option value="Accounting">Accounting</option>
               <option value="IT">IT</option>
               <option value="Marketing">Marketing</option>
            </select>
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="position"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Position
         </label>
         <div class="w-full">
            <input
               type="text"
               id="position"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="Position"
               required />
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Gender
         </label>
         <div class="w-full">
            <div class="flex md:flex-col lg:flex-row lg:gap-5">
               <div class="inline-flex items-center">
                  <label
                     class="relative flex items-center p-3 rounded-full cursor-pointer"
                     htmlFor="html">
                     <input
                        name="gender"
                        id="male"
                        type="radio"
                        class="before:content[''] peer relative p-2 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="male" />
                     <span
                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-3.5 w-3.5"
                           viewBox="0 0 16 16"
                           fill="currentColor">
                           <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"></circle>
                        </svg>
                     </span>
                  </label>
                  <label
                     class="mt-px font-light text-gray-700 cursor-pointer select-none"
                     for="male">
                     Male
                  </label>
               </div>
               <div class="inline-flex items-center">
                  <label
                     class="relative flex items-center p-3 cursor-pointer"
                     htmlFor="react">
                     <input
                        name="gender"
                        type="radio"
                        required
                        class="before:content[''] peer relative p-2 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="female" />
                     <span
                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-3.5 w-3.5"
                           viewBox="0 0 16 16"
                           fill="currentColor">
                           <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"></circle>
                        </svg>
                     </span>
                  </label>
                  <label
                     class="mt-px font-light text-gray-700 cursor-pointer select-none"
                     for="female">
                     Female
                  </label>
               </div>
            </div>
         </div>
      </div>
      <div class="flex flex-col gap-3">
         <label
            for="birthday"
            class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Date Of Birth
         </label>
         <div class="w-full">
            <input
               type="date"
               id="birthday"
               min="1920-01-01"
               max="20024-01-01"
               class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
               placeholder="22"
               required />
         </div>
      </div>
   </div>

   <div class="flex self-center justify-center items-center">
      <input
         class="btn bg-slate-950 border w-full h-fit border-slate-950 transition-all duration-200 font-bold text-sky-50 py-4 px-6 rounded-lg hover:bg-blue-600 active:text-slate-950 active:bg-sky-50 active:scale-95 cursor-pointer"
         role=" button"
         type="submit"
         value="Submit" />
   </div>
</form>
</div>
`