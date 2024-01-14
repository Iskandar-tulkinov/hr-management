let tableBody = document.querySelector('.tableBody');
const employeeModal = document.getElementById('EmployeeModal');
const employeeForm = document.getElementById('EmployeeForm');
let modalTitle = document.querySelector('.modal__title');
const fullName = document.getElementById('fullName');
const age = document.getElementById('age');
const position = document.getElementById('position');
const dateOfBirth = document.getElementById('birthday');
let submitBtn = document.querySelector('.submit-btn');
const overlay = document.getElementById('overlay');

const department = document.getElementById('department');
const departmentList = document.querySelector('.department-list');
const downIcon = document.querySelector('.down-icon');
const departmentOptions = document.querySelectorAll('.department__option');
let isEdit = false,
  editId;

downIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  departmentList.classList.toggle('hidden');
});

departmentOptions.forEach(function (option) {
  option.addEventListener('click', function (event) {
    departmentOptions.forEach((otherOption) => {
      if (otherOption != option) {
        otherOption.classList.remove('bg-gray-300');
      }
    });
    event.stopPropagation();
    department.textContent = option.textContent;
    option.classList.add('bg-gray-300');
    departmentList.classList.toggle('hidden');
    console.log('Department is ' + department.textContent);
    saveToLocalStorage();
  });
});

let gender;

const genderElements = Array.from(
  document.querySelectorAll("input[name='gender']")
);

// Initial data
let employeesData = [
  {
    id: 1,
    age: 30,
    fullName: 'Johny Depp',
    gender: 'Male',
    department: 'Accounting',
    position: 'Chief Accountant',
    dateOfBirth: '01.10.1990',
  },
  {
    id: 2,
   age: 16,
    fullName: 'Sarah Jim',
    gender: 'Female',
    department: 'Marketing',
    position: 'Chief Marketolog',
    dateOfBirth: '21.01.2005',
  },
  {
    id: 3,
      age: 11,
    fullName: 'Tom Jerry',
    gender: 'Male',
    department: 'IT',
    position: 'Data Scientist',
    dateOfBirth: '21.12.2010',
  },
  {
    id: 4,
      age: 41,
    fullName: 'Black Smith',
    gender: 'Male',
    department: 'IT',
    position: 'Product Manager',
    dateOfBirth: '21.04.1980',
  },
  {
    id: 5,
      age: 13,
    fullName: 'Jack Lee',
    gender: 'Male',
    department: 'Marketing',
    position: 'Sales Operator',
    dateOfBirth: '21.01.2008',
  },
  {
    id: 6,
      age: 22,
    fullName: 'Sottixon ',
    gender: 'Female',
    department: 'Marketing',
    position: 'Sales Operator',
    dateOfBirth: '19.09.1999',
  },
];

localStorage.setItem('list', JSON.stringify(employeesData));
// Fetch data from localStorage if it is available
employeesData = localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list'))
  : [];

function saveToLocalStorage() {
  localStorage.setItem('list', JSON.stringify(employeesData));
}

function openAddEmployeeModal() {
  employeeModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  isEdit = false;
  employeeForm.reset();
}

if (employeesData.length) showEmployeesData();

function showEmployeesData() {
  employeesData = JSON.parse(localStorage.getItem('list'));
  document
    .querySelectorAll('.employeeDetails')
    .forEach((info) => info.remove());
  tableBody.innerHTML = '';
  employeesData.forEach((employee) => {
    let createElement = `
    <tr class="employeeDetails ${
      ++employee.id % 2 == 0 ? 'bg-slate-300' : 'bg-gray-400'
    } border border-[#696969]">
                    <td class="px-4 py-2 border border-[#696969]   ">${
                      employee.id
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${
                      employee.fullName
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${
                      employee.gender
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]   ">${
                      employee.age
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]  ">${
                      employee.department
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]   capitalize">${
                      employee.position
                    }</td>
                    <td class="px-4 py-2 border border-[#696969]  ">${
                      employee.dateOfBirth
                    }</td>
                    <td class="flex justify-center w-full h-full">
                    <button    onclick="editDataModal(${employee.id},${
      employee.fullName
    },${employee.gender},${employee.age},${employee.department},${
      employee.position
    },${employee.dateOfBirth})"
  class="btn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-200">
  <img
     class="cursor-pointer"
     src="../../assets/img/edit.svg"
     alt="edit icon"
     width="30"
     height="30" />
</button>
<button   onclick="deleteDataModal(${employee.id})"
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
    tableBody.innerHTML += createElement;
  });
}
showEmployeesData();
// ADD

function editDataModal(
  index,
  fullName,
  gender,
  age,
  department,
  position,
  dateOfBirth
) {
  console.log({
    index,
    fullName,
    gender,
    age,
    department,
    position,
    dateOfBirth,
  });
  isEdit = true;
  editId = index;
  fullName.value = fullName;
  gender.value = gender;
  age.value = age;
  department.textContent = department;
  position.value = position;
  dateOfBirth.value = dateOfBirth;

  submitBtn = 'Save changes';
  // console.log(submitBtn.value);
  modalTitle.textContent = 'Edit employees data';

  saveToLocalStorage();
  showEmployeesData();
}

function deleteDataModal(employeeId) {
  if (confirm('Are you sure want to delete?')) {
    console.log('employeeId', employeeId);
    console.log('employeeId', employeesData);

    employeesData = employeesData.filter(
      (employee) => employee.id != employeeId
    );

    console.log(employeesData);
    generatePaginationButtons();
    saveToLocalStorage();
    showEmployeesData();
  }
}

employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(genderElements);
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.id;
      console.log('gender is ' + gender);

      break; // Exit the loop once a checked element is found
    }
  }
  console.log('gender is ' + gender);

  let newEmployeeDataObj = {
    id: employeesData.length + 1,
    fullName: fullName.value,
    gender: gender,
    age: age.value,
    department: department.textContent,
    position: position.value,
    dateOfBirth: dateOfBirth.value,
  };

  if (!isEdit) {
    employeesData.push(newEmployeeDataObj);
    saveToLocalStorage();
    generatePaginationButtons();
    displayTable(employeesData, tableBody, rows, currentPage); // Update the table
    closeModal();
  } else {
    employeesData = employeesData.map((employee) =>
      employee.id == editId ? newEmployeeDataObj : employee
    );
    closeModal();
  }

  saveToLocalStorage();
  // submitBtn.value= "Submit"
  modalTitle.textContent = "Add new employee's data";
  displayTable(employeesData, tableBody, rows, currentPage); // Update the table
});

// editDataModal(i,fullName,gender,age,department,position,dateOfBirth);

// Pagination
// tableBody-list
// employeesData- list_item
const PaginationEl = document.querySelector('.pagination');
let currentPage = 1;
let rows = 5;

// Calculate the total number of pages

// Function to generate pagination buttons
function generatePaginationButtons() {
  const totalPages = Math.ceil(employeesData.length / rows);

  let buttonsHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    buttonsHTML += `<button class="border py-3 px-4  bg-slate-500" onclick="changePage(${i})">${i}</button>`;
  }
  PaginationEl.innerHTML = buttonsHTML;
}

// Initial display
generatePaginationButtons();

function displayTable(tableRows, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  let loopStart = rowsPerPage * page;
  let paginatedItems = tableRows.slice(loopStart, loopStart + rowsPerPage);

  for (let i = 0; i < paginatedItems.length; i++) {
    let index = loopStart + i + 1;
    let employee = paginatedItems[i];

    let createElement = `
        <tr class="employeeDetails ${
          index % 2 === 0 ? 'bg-slate-300' : 'bg-gray-400'
        } border border-[#696969]">
            <td class="px-4 py-2 border border-[#696969]">${index}</td>
            <td class="px-4 py-2 border border-[#696969] capitalize">${
              employee.fullName
            }</td>
            <td class="px-4 py-2 border border-[#696969] capitalize">${
              employee.gender
            }</td>
            <td class="px-4 py-2 border border-[#696969]">${employee.age}</td>
            <td class="px-4 py-2 border border-[#696969]">${
              employee.department
            }</td>
            <td class="px-4 py-2 border border-[#696969] capitalize">${
              employee.position
            }</td>
            <td class="px-4 py-2 border border-[#696969]">${
              employee.dateOfBirth
            }</td>
            <td class="flex justify-center w-full h-full">
                <button onclick="editDataModal(${employee.id},'${
      employee.fullName
    }','${employee.gender}',${employee.age},'${employee.department}','${
      employee.position
    }','${employee.dateOfBirth}')"
                    class="btn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-200">
                    <img class="cursor-pointer" src="../../assets/img/edit.svg" alt="edit icon" width="30" height="30" />
                </button>
                <button onclick="deleteDataModal(${employee.id})"
                    class="btn py-3 px-1 w-fit h-Fw-fit hover:bg-red-600 flex justify-center items-center rounded-md duration-300 transition-all ease-linear">
                    <img class="cursor-pointer" src="../../assets/img/delete.svg" alt="edit icon" width="30" height="30" />
                </button>
            </td>
        </tr>
      `;

    wrapper.innerHTML += createElement;
  }
}

displayTable(employeesData, tableBody, rows, currentPage);

// Function to change the current page
function changePage(page) {
  currentPage = page;
  displayTable(employeesData, tableBody, rows, currentPage);
}
