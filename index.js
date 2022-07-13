//* LOcalStorage
// https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage
//You can create entries for the localStorage object by using the setItem() method. The setItem() method takes two arguments, the key and corresponding value:
// localStorage can only store string values. If you want to store objects or arrays as values in localStorage, you can use JSON.stringify() to convert them into strings. When creating or updating key/value pairs in localStorage, use JSON.stringify() with the object or array as the argument:
//let myObj = { name: 'Skip', breed: 'Labrador' };
//localStorage.setItem(key, JSON.stringify(myObj));
//To read and return stringified values, use the JSON.parse() method. The JSON.parse() method takes JSON strings and converts them into JavaScript objects. JSON.parse() takes .getItem() as it’s argument:
//let item = JSON.parse(localStorage.getItem(key));


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
