const inpEL =document.getElementById("input")
const errorEl = document.getElementById("error")
const resEl = document.getElementById("result")
let errorTime 
let resTime
function updateRes(){
    if (inpEL.value <= 0 || isNaN(inpEL.value)){
        errorEl.innerText = "Please enter a valid Number"
        clearTimeout(errorTime)
        errorTime = setTimeout(() => {
            errorEl.innerText=""
            inpEL.value = ""
        }, 2000);
    }else{
        resEl.innerText = (+inpEL.value / 2.2).toFixed(2) ;
        clearTimeout(resTime)
        resTime = setTimeout(() => {
            resEl.innerText=""
            inpEL.value = ""
        }, 10000);

    }
}

inpEL.addEventListener("input",updateRes)

