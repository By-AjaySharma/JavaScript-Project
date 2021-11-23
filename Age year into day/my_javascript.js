
function outputDate(){
    
    console.log('this is me');
    let h1=document.createElement('h1');
        h1.setAttribute('id','yearToDay');
        document.getElementById('flex-box-result').appendChild(h1);
document.getElementById('yearToDay').innerHTML='You are '+ yearToDay() +' Day old';
}

function yearToDay() {
    
    let dateOfBirth = document.getElementById("myBirthDay").value;
    let date1 = new Date(dateOfBirth);
    let date2 = new Date();

    // To calculate the time difference of two dates 
    let DifferenceInTime = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    let DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24); 
    let simpleDay=parseInt(DifferenceInDays)
    return parseInt(DifferenceInDays)
}




function resetBtn() {
    document.getElementById('yearToDay').remove();
    
   
}
