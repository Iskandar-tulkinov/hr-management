"use sctict";
const dashboard = document.querySelector(".dashboard");
const openDashboard = function (){
  dashboard.classList.toggle('hidden')
}

if (window.innerWidth > 768) {
  dashboard.classList.remove('fixed');
}