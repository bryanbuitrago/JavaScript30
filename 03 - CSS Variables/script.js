// console.log('Hello World!');

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);
  const suffix = this.datase.sizing || '';
  // console.log(this.dataset);
  document.document.getElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
