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
window.addEventListener('resize',()=>{
  if (window.innerWidth > 768) {
    dashboard.classList.remove('fixed');
  }else{
    dashboard.classList.add("fixed")
  };
})
if (window.innerWidth > 768) {
  dashboard.classList.remove('fixed');
}else{
  dashboard.classList.add("fixed")
};