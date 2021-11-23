let fistNum=0;
function lowerCount(){
    fistNum--
    document.getElementById('number').innerHTML=fistNum;
    textColot();
}

function upperCount(){
    fistNum++
    document.getElementById('number').innerHTML=fistNum;
    textColot();
}

function textColot(){
    if(fistNum>0){
        document.getElementById('number').style.color='#0ec714';
    }
    else if(fistNum<0){
        document.getElementById('number').style.color='#d90404';
    }
    else{
        document.getElementById('number').style.color=' rgb(49, 49, 49)';
    }
}