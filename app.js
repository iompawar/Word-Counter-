let display = document.getElementById('display'); //display 
let textArea = document.getElementById('text-area'); //textarea
let char;
let word;

// Fetching text
textArea.addEventListener('input', ()=> {
    char = textArea.value.length; 
    word = textArea.value.split(' ').length;
    textArea.style.borde = "none";
})

// displaying result
textArea.addEventListener('input', ()=>{
    display.innerHTML = `Word = ${word}  Character = ${char}`;
})
