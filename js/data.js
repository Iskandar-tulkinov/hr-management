
"use strict";
// Initial data

export let employeesData = [
  { id:1,
     fullName: "Johny Depp",
     gender: "Male",
     age: 34,
     department: "Accounting",
     position: "Chief Accountant",
     dateOfBirth: "1990-01-12",
  },
  {id:2,
     fullName: "Sarah Jim",
     gender: "Female",
     age: 25,
     department: "Marketing",
     position: "Chief Marketolog",
     dateOfBirth:"1999-11-16",
  },{id:3,
     fullName: "Tom Jerry",
     gender: "Male",
     age: 26,
     department: "IT",
     position: "Data Scientist",
     dateOfBirth: "1998-05-30",
  },
  {id:4, fullName:'Black Smith',gender:'Male',age:44,department:'IT',position:'Product Manager',dateOfBirth:"1980-04-21",},
  {    id:5,   fullName: "Casy Candy ",
     gender: "Female",
     age: 29,
     department: "Marketing",
     position: "Sales Operator",
     dateOfBirth: "1995-04-19",
  },
];
employeesData = JSON.parse(localStorage.getItem('list')) || [];
if(saveToLocalStorage){
  employeesData = JSON.parse(localStorage.getItem('list')) || [];
}else{
   saveToLocalStorage(employeesData);
}

function saveToLocalStorage() {
   localStorage.setItem("list", JSON.stringify(employeesData));
}

export function statistics(){
   employeesData = JSON.parse(localStorage.getItem('list')) || [];

   let numberOfMales=employeesData.filter(employee=>employee.gender.toLowerCase()=='male')
   document.querySelector('.maleEmployees').textContent=numberOfMales.length

   let numberOfFemales=employeesData.filter(employee=>employee.gender.toLowerCase()=='female')
   document.querySelector('.femaleEmployees').textContent=numberOfFemales.length

   document.querySelector(".totalEmployees").textContent=numberOfFemales.length+numberOfMales.length

   let IT=employeesData.filter(employee=>employee.department=='IT')
   let accounting=employeesData.filter(employee=>employee.department=='Accounting')
   let marketing=employeesData.filter(employee=>employee.department=='Marketing')
   let management=employeesData.filter(employee=>employee.department=='Management')


   document.querySelector('.accountingEmployees').textContent=`Accounting: ${accounting.length}`
   document.querySelector('.ITEmployees').textContent=`IT: ${IT.length}`
   document.querySelector('.marketingEmployees').textContent=`Marketing: ${marketing.length}`
   document.querySelector('.managementEmployees').textContent=`Management: ${management.length}`
   //  console.log("it:",IT);
   //  console.log("accounting",accounting);
   //  console.log("marketing",marketing);
   //  console.log("management",management);
}