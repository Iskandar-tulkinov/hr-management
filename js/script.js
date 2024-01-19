"use sctict";
import { allModals } from "../components/modals-data/modal-content.js";
console.log(typeof allModals);
import { employeesData } from "./data.js";
// import { openModal, closeModal } from "../components/modals-data/modal-controller.js";
// console.log(employeesData);
const sideBars= document.querySelectorAll(".sideBar")
const openSideBarBtns= document.querySelectorAll(".openSideBarBtn")
function openSidebar (){
sideBars.forEach(sideBar=>{
  sideBar.classList.remove("hidden","md:hidden" ,'translate-x-[-100%]')
  sideBar.classList.add('md:h-full')

})
openSideBarBtns.forEach(btn=>{
  btn.classList.add('translate-x-[-100%]')
 } )

}

function closeSidebar(){
sideBars.forEach(sideBar=>{
  sideBar.classList.add('hidden','md:hidden','translate-x-[-100%')
  sideBar.classList.remove('md:h-full');
})
openSideBarBtns.forEach(btn=>{
btn.classList.remove('translate-x-[-100%]')
})

//

const tableBody = document.getElementById("tableBody");
const employeeModal= document.getElementById("employeeModal")
const form = document.getElementById("employeeForm");
const modalTitle = document.querySelector(".modal__title")
const name = document.getElementById("fullName");
const age = document.getElementById("age");
const position = document.getElementById("position");
const dateOfBirth = document.getElementById("birthday");
const submitBtn=document.querySelector(".submit-btn");
const overlay = document.getElementById('overlay');

const department = document.getElementById("department");
const departmentList = document.querySelector(".departmentList");
const downIcon = document.querySelector(".downIcon");
const departmentOptions =Array.from(document.querySelectorAll(".departmentOption"));
let genderEl;
const genderElements = Array.from(
   document.querySelectorAll("input[name='gender']")
 );


downIcon.addEventListener("click", (e) => {
   e.stopPropagation()
    departmentList.classList.toggle("hidden");
 });
 departmentOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
       departmentOptions.forEach((otherOption) => {
          if (otherOption != option) {
             otherOption.classList.remove("bg-gray-300");
          }
       });
       event.stopPropagation();
       department.textContent= option.textContent;
       option.classList.add("bg-gray-300");
       departmentList.classList.toggle("hidden");
       console.log("Department is "+department.textContent);
       saveToLocalStorage()
    });
 });

// Random ID Generation
const generateRandomId = function (length) {
   const characters = '0123456789';
   let randomId = '';

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
   }

   return randomId;
};

// Function to add a new employee


if(saveToLocalStorage){
  let employeesData = JSON.parse(localStorage.getItem('list')) || [];
}else{
   saveToLocalStorage(employeesData);
}

function saveToLocalStorage() {
   localStorage.setItem("list", JSON.stringify(employeesData));
}

function showEmployeesData(currentPage) {
   const rowsPerPage = 5;
   const employeesData = JSON.parse(localStorage.getItem('list')) || [];
   // Paginate the data
   const paginatedData = paginateArray(employeesData, rowsPerPage, currentPage);
   // Clear the table body
   tableBody.innerHTML = '';

   // Show the paginated data in the table
   paginatedData.forEach((employee, index) => {
      tableBody.innerHTML += `
      <tr class="employeeDetails ${index % 2 === 0 ? "bg-slate-300":"bg-gray-400"} border border-[#696969]">
                      <td class="px-4 py-2 border border-[#696969] ">${index+1+(currentPage-1)*rowsPerPage}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.fullName}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.gender}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.age}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.department}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.position}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.dateOfBirth}</td>
                      <td class="flex justify-center w-full h-full">
    <button onclick="editData(${employee.id})" class="btn  py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-300 cursor-pointer">
    <img
       src="../../assets/img/edit.svg"
       alt="Edit icon"
       width="30"
       height="30" />
  </button>
  <button data-target="#deleteModal" onclick="deleteData(${employee.id})"
  class="btn py-3 px-1 w-fit h-Fw-fit hover:bg-red-600 flex justify-center items-center rounded-md duration-300 transition-all ease-linear cursor-pointer">
  <img
     src="../../assets/img/delete.svg"
     alt="Delete icon"
     width="30"
     height="30" />
  </button>

                      </td>
                   </tr>
      `;
   });

 }
 function openEmployeeModal() {
   employeeModal.classList.remove('hidden');
   overlay.classList.remove('hidden');
   submitBtn.innerText='Submit'
   document.body.classList.add('overflow-hidden');
   employeeModal.classList.add("overflow-y-scroll")
   // employeeForm.reset()
   openModal()
 }
 let isEdit = false, editId;
function editData(employeeID){

   const employee = employeesData.find((employee) =>
   {return  +employee.id == +employeeID});
   console.log(employee);
  isEdit=true;
editId = employee.id;
name.value = employee.fullName;
// Check the gender radio button that matches the employee's gender
genderElements.forEach((element) => {
  element.checked = element.id === employee.gender;
});
age.value = employee.age;
department.textContent = employee.department;
position.value = employee.position;
const birthdayParts = employee.dateOfBirth.split('.'); // Assuming dateOfBirth is in 'DD.MM.YYYY' format
const formattedDate = `${birthdayParts[2]}-${birthdayParts[1]}-${birthdayParts[0]}`;
dateOfBirth.value = formattedDate;

// Update the modal title
modalTitle.textContent = 'Edit Employee Data';
// Open the modal
openEmployeeModal();
}

function deleteData(employeeID) {
   document.getElementById('deleteModal').classList.remove('hidden');
   overlay.classList.remove('hidden');
   document.body.classList.add('overflow-hidden');
   const deleteBtn = document.querySelector(".deleteBtn");

   // Define a function for the delete button click event
   function onDeleteBtnClick() {
      employeesData = employeesData.filter(
         (employee) => employee.id != employeeID
       );
      let  employee=employeesData.filter(employee=>employee.fullName)
       saveToLocalStorage();
       closeModal();
       showMessage(employee.fullName, "'s data has been deleted!", 'bg-red-500');
       showEmployeesData(currentPage);
       // Remove the event listener after it has been executed
       deleteBtn.removeEventListener('click', onDeleteBtnClick);
   }
   // Attach the event listener
   deleteBtn.addEventListener('click', onDeleteBtnClick);
}

form.addEventListener("submit", (e) => {
   // e.preventDefault();
    // Get the selected gender
  for (const element of genderElements) {
    if (element.checked) {
      genderEl = element.id;
      console.log('gender is ' + genderEl);
      break; // Exit the loop once a checked element is found
    }
  }
    const information = {
      id: isEdit ? editId : generateRandomId(8),
      fullName: name.value,
      gender: genderEl,
      age: age.value,
      department: department.textContent,
      position: position.value,
      dateOfBirth: dateOfBirth.value,
   };
  // Check if it's an edit or add operation
  console.log('isEdit', isEdit);
  if (isEdit) {
    // Edit an existing employee
    employeesData = employeesData.map((employee) =>
      employee.id === editId ? information : employee
      );
  } else {
    // Add a new employee
    employeesData.push(information);
    closeModal()

  }

   submitBtn.textContent='Submit'
   modalTitle.textContent = "Add new employee's data";
   saveToLocalStorage();
   showEmployeesData(currentPage);
   closeModal();
});

//
function showMessage(name,message,style){
   const  actionMessage =document.querySelector(".message")
   setTimeout(()=>{
      actionMessage.classList.remove("hidden");
      actionMessage.classList.add(style);
      actionMessage.textContent=`${name}'s ${message}`
   },50)

  setTimeout(()=>{
   actionMessage.classList.add('hidden');
   actionMessage.classList.remove(style);
   actionMessage.textContent=''
  } ,1600
  )
}

window.addEventListener("keydown",(e)=>{
   if(e.key=='Escape') closeModal()
})


//  Pagination
const paginationContainer = document.querySelector(".paginationContainer");
let currentPage = 1;
let rows = 5;
if(employeesData.length <= 5){
   paginationContainer.classList.toggle('hidden')
}else{
   paginationContainer.classList.remove("hidden")
}
 // Example usage
 const rowsPerPage = 5;

//  const employeesData = JSON.parse(localStorage.getItem('list')) || [];
 const totalPages = Math.ceil(employeesData.length / rowsPerPage);

function paginateArray(array, rowsPerPage, currentPage) {
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;
   const paginatedItems = array.slice(startIndex, endIndex);

   return paginatedItems;
 }

 function updatePaginationButtons(totalPages, currentPage) {
   paginationContainer.innerHTML = '';

   for (let i = 1; i <= totalPages; i++) {
     const button = document.createElement('button');
     button.innerText = i;
     button.className = i === currentPage
     ? 'rounded-md bg-green-500 rounded-xl text-white text-2xl font-bold py-4 px-5 hover:opacity-80 active:scale-95 transition-all duration-300 ease-linear' :
          'rounded-md bg-blue-500 rounded-xl text-white text-2xl font-bold py-4 px-5 hover:opacity-80 active:scale-95 transition-all duration-300 ease-linear';
     button.addEventListener('click', () => {
       currentPage = i;
       updatePaginationButtons(totalPages, currentPage);
       showEmployeesData(currentPage); // Update the table content when a page button is clicked
     });

     paginationContainer.appendChild(button);
   }
 }

 updatePaginationButtons(totalPages, currentPage);
 if (employeesData.length) showEmployeesData(currentPage);



  // Debounce function
function debounce(func, delay) {
   let timeoutId;
   return function () {
     const context = this;
     const args = arguments;
     clearTimeout(timeoutId);
     timeoutId = setTimeout(() => {
       func.apply(context, args);
     }, delay);
   };
 }
 // Updated search input event listener with debounce
 // search validation
 const searchInput= document.getElementById("search");
 searchInput.addEventListener("input", debounce(handleSearchInput, 500));

function handleSearchInput() {
  const searchInputValue = searchInput.value.trim().toLowerCase();

  const matches = getMatchingValue(searchInputValue);
  displaySearchResult(matches);
}
function getMatchingValue(searchInputValue) {
   return employeesData.filter((employee) =>
     employee.fullName.toLowerCase().includes(searchInputValue)
   );
 }

 function displaySearchResult(matches) {
   // Clear the table body
   tableBody.innerHTML = '';

   // Show the search result in the table
   matches.forEach((employee, index) => {
     tableBody.innerHTML += `
       <tr class="employeeDetails ${index % 2 === 0 ? "bg-slate-300" : "bg-gray-400"} border border-[#696969]">
         <td class="px-4 py-2 border border-[#696969] ">${index + 1}</td>
         <td class="px-4 py-2 border border-[#696969] capitalize">${employee.fullName}</td>
         <td class="px-4 py-2 border border-[#696969] capitalize">${employee.gender}</td>
         <td class="px-4 py-2 border border-[#696969]">${employee.age}</td>
         <td class="px-4 py-2 border border-[#696969]">${employee.department}</td>
         <td class="px-4 py-2 border border-[#696969] capitalize">${employee.position}</td>
         <td class="px-4 py-2 border border-[#696969]">${employee.dateOfBirth}</td>
         <td class="flex justify-center w-full h-full">
           <button onclick="editData(${employee.id})" class="btn  py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-300 cursor-pointer">
             <img src="../../assets/img/edit.svg" alt="Edit icon" width="30" height="30" />
           </button>
           <button data-target="#deleteModal" onclick="deleteData(${employee.id})"
             class="btn py-3 px-1 w-fit h-Fw-fit hover:bg-red-600 flex justify-center items-center rounded-md duration-300 transition-all ease-linear cursor-pointer">
             <img src="../../assets/img/delete.svg" alt="Delete icon" width="30" height="30" />
           </button>
         </td>
       </tr>
     `;
   });
 }



// Logout

function logout() {
   document.body.innerHTML = '';
   let div = document.createElement('div');
   div.setAttribute('class','w-full h-sceen flex flex-col justify-center items-center gap-8 mx-4 ')
   div.innerHTML = `
   <h2 class="m-auto  bg-black rounded-lg text-white py-5 px-8 text-[34px]">You have logged out. Refresh if you want to get data back</h2>
   <button id="refreshBtn" class="border rounded-lg py-4 px-5 bg-blue-500 text-2xl  text-white">Refresh Page</button>

   `;
   document.body.appendChild(div);
   document.getElementById('refreshBtn').addEventListener('click', function() {
      location.reload();
  });

 }

//