const Wrapper=document.querySelector(".wrapper");
const btnlogin=document.querySelector(".btn-login") 
const iconClose=document.querySelector(".icon-close")
const gethere=document.querySelector(".get-here")
    btnlogin.addEventListener("click",()=>{
        Wrapper.classList.add("active");
        
    })
    
iconClose.addEventListener("click",()=>{
    Wrapper.classList.remove("active")
})
gethere.addEventListener("click",()=>{
    Wrapper.classList.add("active");})