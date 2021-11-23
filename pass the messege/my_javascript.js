 
 function getOutput(){
     let inputValue=document.getElementById('id-messege').value;
    //  let inputValueUp=inputValue.toUpperCase();

    
     if(inputValue=== ''){
        document.getElementById('output-messege').innerHTML='Please Enter Text';
     }
     else{
     document.getElementById('output-messege').innerHTML= inputValue;
 }

}