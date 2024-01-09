"use sctict";
// console.log(employees);
const tableBody = document.querySelector(".tableBody")
let counter;
if (employees.length) showEmployees();
counter=1;

function showEmployees(){
const employees=JSON.parse(localStorage.getItem('list'));
tableBody.innerHTML=''
  employees.forEach((employee,i)=>{
    tableBody.innerHTML+=`
    <tr class="bg-slate-300">
                    <td class="px-4 py-2">${counter++}</td>
                    <td class="px-4 py-2" class="">${employee.name}</td>
                    <td class="px-4 py-2">${employee.gender}</td>
                    <td class="px-4 py-2">${employee.department}</td>
                    <td class="px-4 py-2">${employee.position}</td>
                    <td class="px-4 py-2">${employee.dateOfBirth}</td>
                    <td class="flex fle gap-[10px]">
                    <button class="bg-black w-[50px] h-[50px]">
                    <img
                       id="deleteEmployeeBtn"
                       class="cursor-pointer h-[30px] w-[30px]"
                       src="../../assets/img/edit.svg"
                       alt="edit icon" width="30" height="30" />
                 </button>
                 <button class="bg-black w-[50px] h-[50px]">
                    <img
                       onclick="openDeleteModal(${i})"
                       class="cursor-pointer h-[30px] w-[30px]"
                       src="../../assets/img/delete.svg"
                       alt="edit icon" width="30" height="30" />
                 </button>

                    </td>
                 </tr>
    `
    // console.log(tableBody.innerHTML);
  })

}
showEmployees()

const openDeleteModal= function(){
  
}
