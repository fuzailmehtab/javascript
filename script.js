// this is form so we are using submit event
const form = document.querySelector('form');

// this usecase will give us empty,if we use it here outside
// const height = parseInt(document.querySelector('#height').value;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); //string value ko int me karne ke liye parseInt
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid height ${weight} `;
  } else {
   const bmi= (weight / ((height * height) / 10000)).toFixed(2); //tofix for 2 decimal number
    results.innerHTML = `<span>${bmi} </span>`;
  }
});
