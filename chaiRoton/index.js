let x = document.querySelector('#chai');
let y = document.querySelector('#roton');
let output = document.querySelector('#result');

//Submit Button Function
function finalOutput(){
    let matched = x.value.indexOf(y.value);
    if(matched===-1){
        output.innerHTML = "Not Found";
    }
    else{
        output.innerHTML = "Found";
    }
}
