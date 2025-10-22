document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const scores = {
    steve: 0,
    dustin: 0,
    eleven: 0,
    max: 0,
    nancy: 0,
    mike: 0,
    lucas: 0,
    will: 0,
    jonathan: 0,
    hopper: 0,
    joyce: 0,
    erica: 0,
    robin: 0,
    argyle: 0,
    eddie: 0,
    murray: 0,
    papa: 0,
    vecna: 0
  };

  let allAnswered = true;

  for (let i = 1; i <= 20; i++) {
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

  localStorage.setItem("strangerResult", result);
  window.location.href = "stranger_result.html";
});
