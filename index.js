//* LOcalStorage
localStorage.setItem('name', 'Resul')  
//*console.log(localStorage.getItem('name'))
//localStorage.removeItem("name")

//*SessionStorage
sessionStorage.setItem('name', 'Mustafa')
//console.log(sessionStorage(getItem('name')))
sessionStorage.removeItem('name')

//*Cookie
document.cookie = 'name=Ali; expires=' + new Date(2022, 6,10).toUTCString()
//* To make non-expire
document.cookie = 'name=Muhammad; expires=' + new Date(9999, 6,10).toUTCString()
console.log(document.cookie)
