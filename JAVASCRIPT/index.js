let heightInput= document.getElementById('heightInput');
let baseInput = document.getElementById('baseInput');
let output1 = document.getElementById('output1');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', areaOfTri )

// Function for calculating area of triangle.
function areaOfTri(){
    let height = parseInt(heightInput.value);
    let base = parseInt(baseInput.value);

    let area = 0.5 * base * height;

    // If statement to check if valid numbers are inserted in input fields.
    if (isNaN(height) || isNaN(base)) {
        alert('Enter valid numbers for both Height and Base.');
        return;
    }
    output1.value = area
}