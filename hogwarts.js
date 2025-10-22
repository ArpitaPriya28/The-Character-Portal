document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  };

  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      scores[selected.value]++;
    } else {
      alert("Please answer all the questions!");
      return;
    }
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const house = sorted[0][0];

  // Save house to localStorage
  localStorage.setItem("hogwartsHouse", house);

  // Redirect to result page
  window.location.href = "hogwarts_result.html";
});

function toggleOptions(el) {
  const content = el.querySelector(".envelope-content");
  const front = el.querySelector(".envelope-front");

  if (!content.classList.contains("hidden")) return; // Do nothing if already open

  content.classList.remove("hidden"); // Show content
  front.style.display = "none";       // Hide the front flap
}

