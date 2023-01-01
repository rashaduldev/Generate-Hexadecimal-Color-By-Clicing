// step-1---create on-load handaler
window.onload=()=>{
    main();
}
function main(){
    const contain=document.getElementById('contain');
    const nxtbtn=document.getElementById('nxtbtn');
    const frstin=document.getElementById('frstin');
    nxtbtn.addEventListener('click', function(){
        const bgColor=generateHexColor();
        contain.style.backgroundColor=bgColor;
        nxtbtn.value=bgColor;
    });

}
// step-2 ---create random colour ganarator function
function generateHexColor(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    return `#${red.toString(16)} ${green.toString(16)} ${blue.toString(16)}`;

}
// step-3-- COllect all nesesery reference 


// step-4---handel the click event
















