// ===== Part 2: JavaScript Functions =====
let counter = 0;

function incrementCounter(value = 1) {
  // Local scope variable example
  counter += value;
  return counter;
}

function resetCounter() {
  counter = 0;
  return counter;
}

// Button event handlers
document.getElementById('incrementBtn').addEventListener('click', () => {
  const newValue = incrementCounter();
  document.getElementById('counterValue').textContent = newValue;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  const resetValue = resetCounter();
  document.getElementById('counterValue').textContent = resetValue;
});

// ===== Part 3: JS-triggered CSS Animations =====
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  el.classList.add(animationClass);

  // Remove class after animation ends to allow re-triggering
  el.addEventListener('animationend', () => {
    el.classList.remove(animationClass);
  }, { once: true });
}

document.getElementById('animateBtn').addEventListener('click', () => {
  triggerAnimation('animatedBox', 'animate');
});
