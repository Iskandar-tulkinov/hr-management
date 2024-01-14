"use sctict";
const dashboard = document.querySelector(".dashboard");
const dashboardItem = document.querySelectorAll(".dashboardItem")

const openDashboard = function (){
  dashboard.classList.toggle('hidden')
};

// dashboardItem.forEach(btn=>{
//   btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     dashboard.classList.toggle('hidden');
//   })
// });
// window.addEventListener('resize',()=>{
//   if (window.innerWidth >= 768) {
//     dashboard.classList.remove('fixed');
//   }else{
//     dashboard.classList.add("fixed")
//   };
// })
// if (window.innerWidth >= 768) {
//   dashboard.classList.remove('fixed');
// }else{
//   dashboard.classList.add("fixed")
// };


const closeSidebar= document.querySelector('.closeSidebar')
const sideBar= document.querySelector(".sideBar")

closeSidebar.addEventListener("click",()=>{
  sideBar.classList.add('hidden','md:hidden','translate-x-[-100%')
  sideBar.classList.remove('md:h-full')
  openSidebar.classList.remove("translate-x-[-100%")
})

const openSidebar =document.querySelector(".openSidebar")

openSidebar.addEventListener('click',()=>{
  sideBar.classList.remove("hidden","md:hidden" ,'translate-x-[-100%]')
  sideBar.classList.add('md:h-full')
  openSidebar.classList.add("translate-x-[-100%")
})
// hidden md:block
// const closeSidebar=()=>{
//   dashboard.classList.toggle("hidden")
// }

// // Sample employeesData array
//  employeesData = [
//   { fullName: "John Doe", gender: "Male", age: 30, department: "IT", position: "Developer", dateOfBirth: "1992-01-15" },
//   { fullName: "Jane Smith", gender: "Female", age: 28, department: "Marketing", position: "Manager", dateOfBirth: "1994-05-22" },
//   // ... other employee data
// ];

