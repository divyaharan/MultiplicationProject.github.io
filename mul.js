function display(){
    let box1=document.querySelector("#inp1").value;
    let box2=document.querySelector("#inp2").value; 
    let c="";
    for(let b=1;b<=box2;b++){
        c+=box1+"*"+b+"="+box1*b+"<br>";
        let output=document.querySelector("#out");
        output.innerHTML=c;
    } 
    try{
        if(isNaN(box1))
  throw "Enter only number"

  if(box1==="")
    throw "It is required field"
  
  }
catch(error){
document.getElementById("err").innerHTML = error;
    }

}