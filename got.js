document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const answers = {};
  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const value = selected.value;
      answers[value] = (answers[value] || 0) + 1;
    }
  }

  // Determine the top house
  let result = null;
  let max = 0;
  for (let house in answers) {
    if (answers[house] > max) {
      result = house;
      max = answers[house];
    }
  }

  // Handle case where no answers were selected
  if (!result) {
    alert("Please answer all the questions!");
    return;
}

  localStorage.setItem('gotResult', result);
  window.location.href = 'got_result.html';
});
