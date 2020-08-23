let x = document.querySelector('#chai');
let y = document.querySelector('#roton');
let output = document.querySelector('#result');

y.addEventListener('keyup',function(){
    let matched = x.value.indexOf(y.value);
    if(matched===-1){
        output.innerHTML = "Not Found";
    }
    else{
        output.innerHTML = "Found";
    }
})