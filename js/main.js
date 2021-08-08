const result = document.getElementById('result');
const sumite = document.getElementById('submit');

function binary(e) {
  e.preventDefault();
  const num = document.getElementById('number').value;

  if (num === '') {
    alert('Please enter a number');
  } else if (num < 0) {
    alert('Please enter a positive number');
  } else {
    result.style.visibility = 'visible';
  }

  // Converting
  binaryNumber = Number(num).toString(2);
  result.innerText = binaryNumber;
}

sumite.addEventListener('click', binary);
