"use sctict";
const sideBar= document.querySelector(".sideBar")
const openSideBarBtn= document.querySelector(".openSideBarBtn")
function openSidebar (){
  sideBar.classList.remove("hidden","md:hidden" ,'translate-x-[-100%]')
  sideBar.classList.add('md:h-full')
  openSideBarBtn.classList.add('translate-x-[-100%]')
}

function closeSidebar(){
  sideBar.classList.add('hidden','md:hidden','translate-x-[-100%')
  sideBar.classList.remove('md:h-full');
  openSideBarBtn.classList.remove('translate-x-[-100%]')
}
