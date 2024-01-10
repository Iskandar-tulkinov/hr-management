"use sctict";
// console.log(employees);
const tableBody = document.querySelector(".tableBody");
let counter;
if (employees.length) showEmployees();
counter = 1;

function showEmployees() {
   const employees = JSON.parse(localStorage.getItem("list"));
   tableBody.innerHTML = "";
   employees.forEach((employee, i) => {
      tableBody.innerHTML += `
    <tr class="bg-slate-300">
                    <td class="px-4 py-2">${counter++}</td>
                    <td class="px-4 py-2" class="">${employee.name}</td>
                    <td class="px-4 py-2">${employee.gender}</td>
                    <td class="px-4 py-2">${employee.department}</td>
                    <td class="px-4 py-2">${employee.position}</td>
                    <td class="px-4 py-2">${employee.dateOfBirth}</td>
                    <td class="flex">
                    <button   data-target="#editModal"
  class="btn py-3 px-1 w-fit h-fit flex justify-center items-center rounded-md duration-300 transition-all ease-linear hover:bg-yellow-200">
  <img
     class="cursor-pointer"
     src="../../assets/img/edit.svg"
     alt="edit icon"
     width="30"
     height="30" />
</button>
<button  data-target="#deleteModal"
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
showEmployees();

const openDeleteModal = function () {};
