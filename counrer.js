const Decrement = document.getElementById("Decrement")

const Increment = document.getElementById("Increment")

const resetValue = document.getElementById("resetValue")

const displayValue = document.getElementById("displayValue")


// decrement button

Decrement.addEventListener("click",()=>{
   const vlaue = Number(displayValue.innerText) 

   if (vlaue > 0 ){
    displayValue.innerText = (vlaue-1)
   }
    
    
   else {
    alert("Negative vakue are not allowed")
   }
}
)

// Increment button

Increment.addEventListener("click",()=>{
    const vlaue = Number(displayValue.innerText)
    if(vlaue>=10){
     alert("10+ values are not allowed")
    } else {
     displayValue.innerText = vlaue+1
    }
 }
 )

//  Reset button

resetValue.addEventListener("click",()=>{
    displayValue.innerText=0
})
