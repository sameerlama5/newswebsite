const navMenu = document.getElementById("navContent");
const navToggle = document.getElementById("nav-Toggle")
const navClose = document.getElementById("nav-Close")

if(navToggle){
    navToggle.addEventListener('click',()=>
    {
        console.log(navToggle)
        navMenu.classList.add("active")
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("active")
      })
}