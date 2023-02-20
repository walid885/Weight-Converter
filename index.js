const inpEL =document.getElementById("input")
const errorEl = document.getElementById("error")

let errorTime 
function updateRes(){
    if (inpEL.value <= 0 || isNaN(inpEL.value)){
        errorEl.innerText = "Please enter a valid Number"
        clearTimeout(errorTime)
        errorTime = setTimeout(() => {
            errorEl.innerText=""
        }, 2000);
    }
}

inpEL.addEventListener("input",updateRes)

