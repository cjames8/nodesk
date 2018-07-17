window.onload = function() { 
    console.log('Loaded');
}

let color = window.prompt('Please choose your input one of the following colors: green, blue, red');

if (color == 'green'){
    const element = document.querySelector('a');
    const classList = element.classList.add('green');
} 
if (color == 'blue'){
    const element = document.querySelector('a');
    const classList= element.classList.add('blue');
} 
if (color == 'red'){
    const element = document.querySelector('a');
    const classList = element.classList.add('red');
} 
else {
    window.alert('that color is not an option');
}