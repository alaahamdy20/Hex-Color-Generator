const tooltip = document.getElementById("myTooltip");
const div = document.getElementById("div");
const span = document.getElementById('color');
const logo = document.getElementById('logo');
let t ;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
  
  
function changeColor() {
    let color = getRandomColor();
    document.body.style.backgroundColor =color
    logo.style.color =color
    span.innerText = color
    tooltip.innerText = `Copy to clipboard`;

}

function myFunction() {
    navigator.clipboard.writeText(span.innerText);   
}

div.addEventListener('mouseleave',()=>{
    tooltip.classList.add('active');
    clearTimeout(t)
    t = setTimeout(() => {
        tooltip.classList.remove('active');
        tooltip.innerText = `Copy to clipboard`;
    }, 3000);
})

tooltip.addEventListener('click',(el)=>{
    myFunction()
    tooltip.innerText = `${span.innerText} Copied`;
})