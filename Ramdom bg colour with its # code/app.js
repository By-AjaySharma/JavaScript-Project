
 let body=document.querySelector('body');
 let h1=document.querySelector('h1')
 let hexValues=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let myRandom;
//    console.log(backgroundHex)
// let myRandom=setInterval(bodyColor,10);

function startRandom(){
    clearInterval(myRandom)
    myRandom=setInterval(bodyColor,100);
}

function stopRandom(){
    clearInterval(myRandom);
}

function resetRandom(){
    clearInterval(myRandom);
    let backgroundHex = "#ffffff";
    body.style.backgroundColor=backgroundHex;
    document.getElementById('hex-value').innerHTML="&nbsp&nbsp"+backgroundHex;
    document.getElementById('hex-value').style.color="#292929";
}

function bodyColor(){
    let backgroundHex = changeHex(hexValues);
    body.style.backgroundColor=backgroundHex;
    document.getElementById('hex-value').innerHTML="&nbsp&nbsp"+backgroundHex;
    document.getElementById('hex-value').style.color=backgroundHex;
 }

function changeHex(hexArry){
    let hex='#';
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*hexArry.length);
        hex +=hexArry[index];
    }
    return hex;
}

