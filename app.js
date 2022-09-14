const allNumbers=document.querySelectorAll(".number");
const submitBtn=document.querySelector(".btn");
const card = document.querySelector(".flip-card");
const rating=document.querySelector(".rating");

console.log(allNumbers)
submitBtn.addEventListener("click", checkFeed);
allNumbers.forEach(number=>{
    number.addEventListener('click',()=>{
        allNumbers.forEach(e=>{
            if(e.classList.contains("active")){
                e.classList.remove("active")
            }
            rating.textContent=number.textContent;
        })
       number.classList.add('active');
        
    })
    
})
function checkFeed(){
    allNumbers.forEach(e=>{
        if(e.classList.contains("active")){
            card.classList.add("active")
        }
    })
}