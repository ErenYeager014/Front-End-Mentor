const form =document.querySelector("form");
const inputs =document.querySelectorAll("form input")
const touched={
    fname:false,
    lname:false,
    email:false,
    pass:false
}
const inputcheck=()=>{
    let error=false
    inputs.forEach((element)=>{
        
        if(!touched[element.getAttribute("name")] && element.value == ""){
            console.log(error);
            error=true;
        }})
    
    return error;
    }

inputs.forEach((element)=>{
    element.nextElementSibling.style.display="none"
    element.addEventListener('blur',(e)=>{
        if(!touched[e.target.name] ){
            touched[e.target.name]=true;
        }
        if(touched[e.target.name] && e.target.value === "" ){
            console.log("red")
            e.target.style.borderColor="red"
            element.nextElementSibling.style.display="inline"
        }else{
            e.target.style.borderColor="var(--Green)"
            element.nextElementSibling.style.display="none"
        }

    })
    // if(touched[element.getAttribute("name")] && element)
})
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!inputcheck()){
        console.log("form submitted")
    }else{
        Object.keys(touched).map((data)=>{
            touched[data]=true;
        })
        inputs.forEach((element)=>{
            element.focus();
        })
        console.log("error handled")
    }
}) 