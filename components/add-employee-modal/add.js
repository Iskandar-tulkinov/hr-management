let  employeesData=[
  {fullName:'Johny Depp',gender:'Male',department:'Accounting',position:'Chief Accountant',dateOfBirth:"01.10.1990",},
  // {fullName:'Sarah Jim',gender:'Female',department:'Marketing',position:'Chief Marketolog',dateOfBirth:"21.01.2005",},
  {fullName:'Tom Jerry',gender:'Male',department:'IT',position:'Data Scientist',dateOfBirth:"21.12.2010",},
  // {fullName:'Black Smith',gender:'Male',department:'IT',position:'Product Manager',dateOfBirth:"21.04.1980",},
  // {fullName:'Jack Lee',gender:'Male',department:'Marketing',position:'Sales Operator',dateOfBirth:"21.01.2008",},
  {fullName:'Sottixon ',gender:'Female',department:'Marketing',position:'Sales Operator',dateOfBirth:"19.09.1999",},

]

function saveToLocalStorage(){
  localStorage.setItem('list',JSON.stringify(employeesData))
}
// saveToLocalStorage()

 employeesData=JSON.parse(localStorage.getItem('list'))
?JSON.parse(localStorage.getItem('list'))
: [];
"use sctict";
// console.log(employees);
let  tableBody = document.querySelector(".tableBody");
let counter;
counter = 0;

function showEmployeesData() {
   let employeesData = JSON.parse(localStorage.getItem("list"));
   tableBody.innerHTML = "";
   employeesData.forEach((employee, i) => {
      tableBody.innerHTML += `
    <tr class="bg-slate-300">
                    <td class="px-4 py-2">${++i}</td>
                    <td class="px-4 py-2 capitalize">${employee.fullName}</td>
                    <td class="px-4 py-2 capitalize">${employee.gender}</td>
                    <td class="px-4 py-2">${employee.department}</td>
                    <td class="px-4 py-2 capitalize">${employee.position}</td>
                    <td class="px-4 py-2">${employee.dateOfBirth}</td>
                    <td class="flex">
                    <button    onclick="editModal(${i})"
  class="btn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-200">
  <img
     class="cursor-pointer"
     src="../../assets/img/edit.svg"
     alt="edit icon"
     width="30"
     height="30" />
</button>
<button   onclick="deleteModal(${i})"
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
   });
}
if (employeesData.length) showEmployeesData();
// showEmployees();



// ADD EMPLOYEE FORM
const addEmployeeForm = document.getElementById("addEmployeeForm")

const fullName = document.getElementById("fullName").value;
const age = document.getElementById("age").value;
const department = document.getElementById("department").value;
const position = document.getElementById("position").value;
const dateOfBirth = document.getElementById("birthday").value;

// Retrieve gender
const genderElements = document.querySelectorAll("input[name='gender']");
let gender;
for (const element of genderElements) {
  if (element.checked) {
    gender = element.id;
    break;
  }
}
addEmployeeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newEmployeeDataObj = {
    fullName: fullName,
    age: age,
    department: department,
    position: position,
    dateOfBirth: dateOfBirth,
    gender: gender,
  };
  console.log(newEmployeeDataObj);

  // Add data to employees array
  if (newEmployeeDataObj) {
    employeesData.push(newEmployeeDataObj);
    saveToLocalStorage();
    showEmployeesData();
  }
closeModal()
  // Reset the form
  // addEmployeeForm.reset();
});

let EmployeeID = 0;

function deleteModal(id) {
  // EmployeeID = id;
  document.getElementById('deleteModal').classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function deleteEmployeeData(id) {
  const deletedEmployee = employeesData.filter((employee, i) => i !== id );
  employeesData = deletedEmployee;
  saveToLocalStorage();
  showEmployeesData();
  closeModal();
}

const editEmployeeForm = document.getElementById("editEmployeeForm")

editEmployeeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Retrieve initial values inside the event listener
  const editedFullName = document.getElementById("fullName").value;
  const editedAge = document.getElementById("age").value;
  const editedDepartment = document.getElementById("department").value;
  const editedPosition = document.getElementById("position").value;
  const editedBirthday = document.getElementById("birthday").value;

  // Retrieve gender
  const genderElements = document.querySelectorAll("input[name='gender']");
  let gender;
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.id;
      break;
    }
  }

  let editedEmployeeDataObj = {
    fullName: editedFullName,
    age: editedAge,
    department: editedDepartment,
    position: editedPosition,
    dateOfBirth: editedBirthday,
    gender: gender,
  };

  console.log(editedEmployeeDataObj);

  if (editedEmployeeDataObj) {
    employeesData.splice(EmployeeID, 1, editedEmployeeDataObj);
    saveToLocalStorage();
    showEmployeesData();
    closeModal();
  }
});

function editModal(id){
  document.getElementById('editModal').classList.remove('hidden');
  overlay.classList.remove("hidden")
  EmployeeID=id;
}
// editEmployeeForm.addEventListener('submit',(e) => {
// e.preventDefault()
// const editedFullName = fullName;
// const editedAge = age;
// const editedDepartment = department;
// const editedPosition = position;
// const editedBirthday = dateOfBirth;

// // Retrieve gender
// const genderElements = document.querySelectorAll("input[name='gender']");
// let gender;
// for (const element of genderElements) {
//   if (element.checked) {
//     gender = element.id;
//     break;
//   }
// }

// let editedEmployeeDataObj = {
//   fullName: editedFullName,
//   age: editedAge,
//   department: editedDepartment,
//   position: editedPosition,
//   dateOfBirth: editedBirthday,
//   gender: gender,
// };
// console.log(editedEmployeeDataObj);

// if (editedEmployeeDataObj) {
//   employeesData.splice(EmployeeID,1,editedEmployeeDataObj);
//   saveToLocalStorage();
//   showEmployeesData();
//   closeModal()
// }
// })
