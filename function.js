/*
 * Multiple Ways to play with functions
 */

function name(f_name,l_name){
    if((typeof(f_name && l_name)!=='string')){
        return "Invalid Name";
    }
    return f_name+" "+l_name;
}
let sayHello = name("Sr","Sohag");
console.log("Hello "+sayHello+"!");


//Without declaring arguments in function but accessing.


function noArgument(){
    var sum = 0;
    for (let i=0;i<=arguments.length-1;i++){
        sum += arguments[i];
    }
    var avg = sum/arguments.length;
    return  avg;
}
let anyArgument = noArgument(23,45,45,62,45.2,72.489,7895,0.5)
console.log("Average: "+ anyArgument);