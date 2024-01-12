let tableBody = document.querySelector(".tableBody");
const employeeModal= document.getElementById("EmployeeModal")
const employeeForm = document.getElementById("EmployeeForm");
let modalTitle = document.querySelector(".modal__title")
const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const position = document.getElementById("position");
const dateOfBirth = document.getElementById("birthday");
const submitBtn=document.querySelector(".submit-btn");
const overlay = document.getElementById('overlay');

const department = document.getElementById("department");
const departmentList = document.querySelector(".department-list");
const downIcon = document.querySelector(".down-icon");
const departmentOptions = document.querySelectorAll(".department__option");
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


let gender;

const genderElements = document.querySelectorAll("input[name='gender']");
for (const element of genderElements) {
  if (element.checked) {
    gender = element.id;
console.log("gender is " + gender);

    break; // Exit the loop once a checked element is found
  }
}
console.log("gender is " + gender);

// Initial data
let employeesData = [
   {
      fullName: "Johny Depp",
      gender: "Male",
      age: "25",
      department: "Accounting",
      position: "Chief Accountant",
      dateOfBirth: "01.10.1990",
   },
   // {fullName:'Sarah Jim',gender:'Female',department:'Marketing',position:'Chief Marketolog',dateOfBirth:"21.01.2005",},
   {
      fullName: "Tom Jerry",
      gender: "Male",
      age: "26",
      department: "IT",
      position: "Data Scientist",
      dateOfBirth: "21.12.2010",
   },
   // {fullName:'Black Smith',gender:'Male',department:'IT',position:'Product Manager',dateOfBirth:"21.04.1980",},
   // {fullName:'Jack Lee',gender:'Male',department:'Marketing',position:'Sales Operator',dateOfBirth:"21.01.2008",},
   {
      fullName: "Sottixon ",
      gender: "Female",
      age: 29,
      department: "Marketing",
      position: "Sales Operator",
      dateOfBirth: "19.09.1999",
   },
];

// Fetch data from localStorage if it is available
employeesData = localStorage.getItem("list")
   ? JSON.parse(localStorage.getItem("list"))
   : [];

function saveToLocalStorage() {
   localStorage.setItem("list", JSON.stringify(employeesData));
}

function openAddEmployeeModal(){
  employeeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  isEdit=false
  employeeForm.reset()
}

if (employeesData.length) showEmployeesData();

function showEmployeesData() {
   employeesData = JSON.parse(localStorage.getItem("list"));
   document.querySelectorAll(".employeeDetails").forEach(info=>info.remove())
   tableBody.innerHTML = "";
   employeesData.forEach((employee, index) => {
    let createElement= `
    <tr class="employeeDetails ${++index % 2 == 0 ? "bg-slate-300" : "bg-gray-400"} border border-[#696969]">
                    <td class="px-4 py-2 border border-[#696969]   ">${index+1}</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${employee.fullName}</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${employee.gender}</td>
                    <td class="px-4 py-2 border border-[#696969]   ">${employee.age}</td>
                    <td class="px-4 py-2 border border-[#696969]  ">${employee.department}</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${employee.position}</td>
                    <td class="px-4 py-2 border border-[#696969]  ">${employee.dateOfBirth}</td>
                    <td class="flex justify-center w-full h-full">
                    <button    onclick="editDataModal(${index},${employee.fullName},${employee.gender},${employee.age},${employee.department},${employee.position},${employee.dateOfBirth})"
  class="btn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-200">
  <img
     class="cursor-pointer"
     src="../../assets/img/edit.svg"
     alt="edit icon"
     width="30"
     height="30" />
</button>
<button   onclick="deleteDataModal(${index})"
class="btn py-3 px-1 w-fit h-Fw-fit hover:bg-red-600 flex justify-center items-center rounded-md duration-300 transition-all ease-linear">
<img
   class="cursor-pointer"
   src="../../assets/img/delete.svg"
   alt="edit icon"
   width="30"
   height="30" />
</button>

                    </td>
                 </tr>
    `;
    tableBody.innerHTML +=createElement
   });
}
showEmployeesData()
// ADD

function editDataModal(index,fullName,gender,age,department,position,dateOfBirth){
  isEdit=true;
  editId=index;
  fullName.value=fullName;
  gender.value=gender;
  age.value=age;
  department.textContent=department;
  position.value=position;
  dateOfBirth.value=dateOfBirth;

  submitBtn='Save changes';
  // console.log(submitBtn.value);
  modalTitle.textContent='Edit employees data'

  saveToLocalStorage()
  showEmployeesData()
}

function deleteDataModal(index){
  if(confirm("Are you sure want to delete?")){
      employeesData.splice(index, 1)
    saveToLocalStorage()
      showEmployeesData()
  }
}

employeeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newEmployeeDataObj = {
     fullName: fullName.value,
     gender: gender,
     age: age.value,
     department: department.textContent,
     position: position.value,
     dateOfBirth: dateOfBirth.value,
  };

  if (!isEdit) {
     employeesData.push(newEmployeeDataObj);
    // saveToLocalStorage()
    // showEmployeesData()
     closeModal();
  }else{
   isEdit=false;
   employeesData[editId]=newEmployeeDataObj
  }

  saveToLocalStorage()
  // submitBtn.value= "Submit"
  modalTitle.textContent = "Add new employee's data"
  showEmployeesData()

  // addEmployeeForm.reset();
});
// editDataModal(i,fullName,gender,age,department,position,dateOfBirth);

// Pagination
// tableBody-list
// employeesData- list_item
const PaginationEl = document.querySelector(".pagination");
let currentPage = 1;
let rows = 5;

function displayTable(tableRows, wrapper, rowsPerPage, page) {
   wrapper.innerHTML = "";
   page--;

   let loopStart = rowsPerPage * page;
   let paginatedItems = tableRows.slice(loopStart, loopStart + rowsPerPage);
   for (let i = loopStart; i < paginatedItems; i++) {}
}

displayTable(employeesData, tableBody, rows, currentPage);
