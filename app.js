// https://calculator.swiftutors.com/ln2-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const naturalLogarithmof2Radio = document.getElementById('naturalLogarithmof2Radio');
const ln2ValueRadio = document.getElementById('ln2ValueRadio');

let naturalLogarithmof2;
let ln2Value = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

naturalLogarithmof2Radio.addEventListener('click', function() {
  variable1.textContent = 'ln2 Value';
  ln2Value = v1;
  result.textContent = '';
});

ln2ValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Natural Logarithm of 2';
  naturalLogarithmof2 = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(naturalLogarithmof2Radio.checked)
    result.textContent = `Natural Logarithm of 2 = ${computeNaturalLogarithmof2().toFixed(5)}`;

  else if(ln2ValueRadio.checked)
    result.textContent = `ln2 Value = ${computeln2Value().toFixed(5)}`;
})

// calculation

function computeNaturalLogarithmof2() {
  return Math.LN2 * Number(ln2Value.value);
}

function computeln2Value() {
  return Number(ln2Value.value) / Math.LN2;
}