// This is the constant 


let color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

let body = document.querySelector('body');
let h1 = document.querySelector('h1');

body.style.backgroundColor = 'violet';

function changeBackground() {
    let colorIndexBody = Math.floor(Math.random() * color.length);
    let colorIndexText = Math.floor(Math.random() * color.length)
    // console.log(color[colorIndex]);
    body.style.backgroundColor = color[colorIndexBody];
textColor(colorIndexBody,colorIndexText);
console.log(color[colorIndexText])
 
}
function textColor(colorIndexBody,colorIndexText){
if(colorIndexBody===colorIndexText){
    colorIndexText++;
 return h1.style.color = color[colorIndexText];
 console.log(color[colorIndexText])
 }
 else{
   return  h1.style.color = color[colorIndexText];
    
 }
}