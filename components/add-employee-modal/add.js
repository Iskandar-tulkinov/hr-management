"use strict";
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
const departmentOptions = document.querySelectorAll(".departmentOption");
const newEmployeeBtn = document.querySelector(".newEmployee")
let isEdit = false, editId;
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

const genderElements = document.getElementsByName('gender');
let genderEl;
// for(let i= 0; i<genderElements.length;i++){
//    if(genderElements[i].checked){
//       genderEl=genderElements[i].value
//       console.log("gender is innre "+genderEl);
//    }
// }
// console.log("gender is "+genderEl);

genderElements.forEach((element) => {
if(element.checked){
   console.log(true)
}else{
   console.log('not checked');
}
      // genderEl = element;
      // console.log("gender is " + genderEl);

});

// Initial data
let employeesData = [
   {
      fullName: "Johny Depp",
      gender: "Male",
      age: 34,
      department: "Accounting",
      position: "Chief Accountant",
      dateOfBirth: "01.10.1990",
   },
   {
      fullName: "Sarah Jim",
      gender: "Female",
      age: 25,
      department: "Marketing",
      position: "Chief Marketolog",
      dateOfBirth:"21.01.1999",
   },{
      fullName: "Tom Jerry",
      gender: "Male",
      age: 26,
      department: "IT",
      position: "Data Scientist",
      dateOfBirth: "21.12.1998",
   },
   {fullName:'Black Smith',gender:'Male',age:44,department:'IT',position:'Product Manager',dateOfBirth:"21.04.1980",},
   {
      fullName: "Casy Candy ",
      gender: "Female",
      age: 29,
      department: "Marketing",
      position: "Sales Operator",
      dateOfBirth: "19.09.1995",
   },
];

// Fetch data from localStorage if it is available
 employeesData = localStorage.getItem("list")
   ? JSON.parse(localStorage.getItem("list"))
   : [];

function saveToLocalStorage() {
   localStorage.setItem("list", JSON.stringify(employeesData));
}

newEmployeeBtn.addEventListener("click",()=>{
   submitBtn.innerText='Submit'
   modalTitle.textContent="Add employee's data"
   document.body.classList.add('overflow-hidden');
   employeeModal.classList.remove(`hidden`);
   employeeModal.classList.add("overflow-y-scroll")
   overlay.classList.remove("hidden");
   isEdit=false
   employeeForm.reset()
})



// function showEmployeesData() {
//    employeesData = JSON.parse(localStorage.getItem("list"));
//    tableBody.innerHTML = "";
//    employeesData.forEach((employee, index) => {
//       tableBody.innerHTML += `
//     <tr class="employeeDetails ${index % 2 === 0 ? "bg-slate-300":"bg-gray-400"} border border-[#696969]">
//                     <td class="px-4 py-2 border border-[#696969] ">${index+1}</td>
//                     <td class="px-4 py-2 border border-[#696969] capitalize">${employee.fullName}</td>
//                     <td class="px-4 py-2 border border-[#696969] capitalize">${employee.gender}</td>
//                     <td class="px-4 py-2 border border-[#696969]">${employee.age}</td>
//                     <td class="px-4 py-2 border border-[#696969]">${employee.department}</td>
//                     <td class="px-4 py-2 border border-[#696969] capitalize">${employee.position}</td>
//                     <td class="px-4 py-2 border border-[#696969]">${employee.dateOfBirth}</td>
//                     <td class="flex justify-center w-full h-full">
//   <button onclick="editData(${index},${employee.fullName},${employee.gender},${employee.age},${employee.department},${employee.position},${employee.dateOfBirth})" class="btn editBtn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-300 cursor-pointer">
//   <img
//      src="../../assets/img/edit.svg"
//      alt="Edit icon"
//      width="30"
//      height="30" />
// </button>
// <button data-target="#deleteModal" onclick="deleteData(${index})"
// class="btn py-3 px-1 w-fit h-Fw-fit hover:bg-red-600 flex justify-center items-center rounded-md duration-300 transition-all ease-linear cursor-pointer">
// <img
//    src="../../assets/img/delete.svg"
//    alt="Delete icon"
//    width="30"
//    height="30" />
// </button>

//                     </td>
//                  </tr>
//     `;

//    });
// }
const editBtns= document.querySelectorAll(".editBtn")
editBtns.forEach(editbtn=>{
   editbtn.addEventListener('click',()=>{
      document.body.classList.add('overflow-hidden');
      employeeModal.classList.remove(`hidden`);
      employeeModal.classList.add("overflow-y-scroll")
      overlay.classList.remove("hidden");
      console.log(employeesData);
   })
})
function editData(index,employeeName,employeeGender,employeeAge,employeeDepartment,employeePosition,employeeDateOfBirth){

  isEdit=true;
  editId=index;
  name.value=employeeName;
  genderEl.value=employeeGender;
  age.value=employeeAge;
  department.textContent=employeeDepartment;
  position.value=employeePosition;
  dateOfBirth.value=employeeDateOfBirth;

  submitBtn.textContent='Save changes';
  modalTitle.textContent='Edit employees data'

//   saveToLocalStorage()
//   showEmployeesData()
}


function deleteData(index) {
   document.getElementById('deleteModal').classList.remove('hidden');
   overlay.classList.remove('hidden');
   document.body.classList.add('overflow-hidden');

   const deleteBtn = document.querySelector(".deleteBtn");

   // Define a function for the delete button click event
   function onDeleteBtnClick() {
       employeesData.splice(index, 1);
       saveToLocalStorage();
       showEmployeesData();
       closeModal();
       showMessage(information.fullName, "'s data has been deleted!", 'bg-red-500');
      // location.reload()
       // Remove the event listener after it has been executed
       deleteBtn.removeEventListener('click', onDeleteBtnClick);
   }

   // Attach the event listener
   deleteBtn.addEventListener('click', onDeleteBtnClick);
}

//

form.addEventListener("submit", (e) => {
  for (const element of genderElements) {
    if (element.checked) {
      genderEl = element.id;
      console.log('gender is ' + genderEl);
      break; // Exit the loop once a checked element is found
    }
  }
//   console.log('gender is ' + genderEl);
   e.preventDefault();

   const information = {
      fullName: name.value,
      gender: genderEl,
      age: age.value,
      department: department.textContent,
      position: position.value,
      dateOfBirth: dateOfBirth.value,
   };

   if (!isEdit) {
      employeesData.push(information);
      showMessage(information.fullName,'data saved successfully!','bg-green-500')
   } else {
      isEdit = false;
      employeesData[editId] = information;
   }


   submitBtn.textContent='Submit'
   modalTitle.textContent = "Add new employee's data";
   saveToLocalStorage();
   showEmployeesData();
   closeModal();
});



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

function closeModal(){
   modals.forEach(modal=>{
      modal.classList.add("hidden")
   })
   overlay.classList.add("hidden")
   document.body.classList.remove('overflow-hidden');
}

const logOutModal= document.getElementById("logoutModal")

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

// function refreshPageIfNeeded(employeesData) {
//     if (employeesData.length === a * n || employeesData.length === b * n) {
//         location.reload();
//     }
// }

// refreshPageIfConditionMet(employeesData);


// Pagination

const paginationWrapper = document.querySelector(".paginationContainer");
let currentPage = 1;
let rows = 5;
let per5=1 ;
per5*=rows;

if(employeesData.length <= 5){
   paginationWrapper.classList.toggle('hidden')
}else{
   // location.reload()
   paginationWrapper.classList.remove("hidden")
}
 // Example usage
 const itemsPerPage = 5;

//  const employeesData = JSON.parse(localStorage.getItem('list')) || [];
 const totalPages = Math.ceil(employeesData.length / itemsPerPage);

function paginateArray(array, itemsPerPage, currentPage) {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const paginatedItems = array.slice(startIndex, endIndex);

   return paginatedItems;
 }

 function showEmployeesData(currentPage) {
   const itemsPerPage = 5;

   const employeesData = JSON.parse(localStorage.getItem('list')) || [];

   // Paginate the data
   const paginatedData = paginateArray(employeesData, itemsPerPage, currentPage);

   // Clear the table body
   tableBody.innerHTML = '';

   // Show the paginated data in the table
   paginatedData.forEach((employee, index) => {
      tableBody.innerHTML += `
      <tr class="employeeDetails ${index % 2 === 0 ? "bg-slate-300":"bg-gray-400"} border border-[#696969]">
                      <td class="px-4 py-2 border border-[#696969] ">${index+1}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.fullName}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.gender}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.age}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.department}</td>
                      <td class="px-4 py-2 border border-[#696969] capitalize">${employee.position}</td>
                      <td class="px-4 py-2 border border-[#696969]">${employee.dateOfBirth}</td>
                      <td class="flex justify-center w-full h-full">
    <button onclick="editData(${index},${employee.fullName},${employee.gender},${employee.age},${employee.department},${employee.position},${employee.dateOfBirth})" class="btn  py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-300 cursor-pointer">
    <img
       src="../../assets/img/edit.svg"
       alt="Edit icon"
       width="30"
       height="30" />
  </button>
  <button data-target="#deleteModal" onclick="deleteData(${index})"
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

 function updatePaginationButtons(totalPages, currentPage) {
   const paginationContainer = document.querySelector('.paginationContainer');
   paginationContainer.innerHTML = '';

   for (let i = 1; i <= totalPages; i++) {
     const button = document.createElement('button');
     button.innerText = i;
     button.className = i === currentPage
     ? 'rounded-md bg-green-500 text-white text-2xl font-bold py-4 px-5 hover:opacity-80 active:scale-95 transition-all duration-300 ease-linear' :
          'rounded-md bg-blue-500  text-white text-2xl font-bold py-4 px-5 hover:opacity-80 active:scale-95 transition-all duration-300 ease-linear';
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


 // search validation
 const searchInput= document.getElementById("search");

 //  searchInputValue.length>0? tableBody.innerHTML='':tableBody;
 searchInput.addEventListener("input",handSearchInput)
 function handSearchInput(){
   const searchInputValue=searchInput.value.trim().toLowerCase();
   const matches=getMatchingValue(searchInputValue);
   displaySearchResult(matches);
}
function getMatchingValue (searchInputValue) {
   const matches=[];
   // FilterName


}
//  function searchByName(inputValue){
//    employeesData.forEach(employee=>{
//       if(employee.fullName.toLowerCase().includes(inputValue.toLowerCase()))

//    }
//    )
//     const   searchedName=employeesData.filter(data=>data.fullName.toLowerCase().icludes(inputValue.toLowerCase()))
//     tableBody.innerHTML=''
//     return searchedName;
//  }
//  searchByName(searchInputValue)
//  log