function show(value){
    document.getElementById("answer").value +=value;
}
function clearResult(){
    document.getElementById("answer").value = "";
}
function calculate(){
    let x=document.getElementById("answer").value;
    let y=eval(x);
    document.getElementById("answer").value=y;
}
