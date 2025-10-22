document.getElementById("narniaQuiz").addEventListener("submit", function(event) {
  event.preventDefault();

  const scores = {
    lucy: 0,
    edmund: 0,
    peter: 0,
    susan: 0
  };

  let allAnswered = true;


  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) {
      scores[answer.value]++;
    } else {
      allAnswered = false;
    }
  }

  if (!allAnswered) {
    alert("Please answer all questions.");
    return;
  }

  let max = 0;
  let result = "";

  for (const character in scores) {
    if (scores[character] > max) {
      max = scores[character];
      result = character;
    }
  }

  localStorage.setItem("narniaResult", result);
  window.location.href = "narnia_result.html";
});
