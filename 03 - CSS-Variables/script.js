const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // If there is no sizing, have nothing
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
