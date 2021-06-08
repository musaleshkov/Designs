const inputs = document.querySelectorAll(".form__input")

const addFocus= () => {
    const parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

const remFocus = () =>{
    const parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach(input=>{ 
    input.addEventListener("focus",addFocus)
    input.addEventListener("blur",remFocus)
})
