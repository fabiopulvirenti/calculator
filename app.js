
let input=document.getElementById("input")

function btnclick(val){
input.value+=val

}

function equalbtn(){
 let result=(eval(input.value))
 input.value=result

}

function cancel(){
  input.value=''
}
function deletefunc(){
  let newValue=input.value.slice(0,-1)
  input.value=newValue

}
