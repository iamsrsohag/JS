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

//Anonymous Function (Function as Expression)

var anyThing = function(value1,value2){
    return value1+value2;
}
console.log(anyThing(25,78));

//Arrow Function (lambda function)

//For Single Argument.
anyFunction = value => value+1;
console.log(anyFunction(6))

//For Multiple Argument.
arrowFunction = (multiValue,multiValue2)=>multiValue+multiValue2;
console.log(arrowFunction(45,63));

//For Multiple arguments with more Epxression/Logic

arrowWithExp = (num1,num2,num3)=>{
    if((num1+num2+num3<50)){
        return "Smaller Than 50";
    }
    return num1+num2+num3;
}
console.log(arrowWithExp(45,75,91));