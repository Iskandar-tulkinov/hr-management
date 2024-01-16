

 employeesData=JSON.parse(localStorage.getItem('list'))
?JSON.parse(localStorage.getItem('list'))
: [];

function saveToLocalStorage(){
  localStorage.setItem('list',JSON.stringify(employeesData))
}
saveToLocalStorage()




 let numberOfMales=employeesData.filter(employee=>employee.gender=='male')
 document.querySelector('.maleEmployees').textContent=numberOfMales.length

 let numberOfFemales=employeesData.filter(employee=>employee.gender=='female')
 document.querySelector('.femaleEmployees').textContent=numberOfFemales.length


let allEmployees=employeesData.length
document.querySelector(".totalEmployees").textContent=numberOfFemales.length+numberOfMales.length
//  console.log(allEmployees,numberOfMales,numberOfFemales);

 let IT=employeesData.filter(employee=>employee.department=='IT')
 let accounting=employeesData.filter(employee=>employee.department=='Accounting')
 let marketing=employeesData.filter(employee=>employee.department=='Marketing')
 let management=employeesData.filter(employee=>employee.department=='Management')


  document.querySelector('.accountingEmployees').textContent=`Accounting: ${accounting.length}`
  document.querySelector('.ITEmployees').textContent=`IT: ${IT.length}`
  document.querySelector('.marketingEmployees').textContent=`Marketing: ${marketing.length}`
  document.querySelector('.managementEmployees').textContent=`Management: ${management.length}`
 console.log(IT);
 console.log(accounting);
 console.log(marketing);
 console.log(management);