function submitQuiz() {
  const totalQuestions = 10;
  const answers = [];/* Empty array to store the user’s selected answers. */


  // Loop through all questions
  for (let i = 1; i <= totalQuestions; i++) {
    /* Find the radio button that is selected (checked) for question number i.

    document.querySelector(...)
This finds the first element in your HTML that matches the pattern (called a CSS selector). So inside the parentheses, we give it the pattern we want to look for. 

input[name="q${i}"]:checked
input → means we’re looking for an input element (like a radio button).
[name="q${i}"] → means the input’s name attribute should be "q1", "q2", "q3", etc.
The ${i} part is a template literal — it inserts the current number (value of i).

:checked → means the radio button that is currently selected.*/
    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    /* if (!answer) → Checks if no option was selected.
If empty → Shows alert: Please answer question i!
return → stops function until user selects the missing answer. */
    if (!answer) {
      alert(`Please answer question ${i}!`);
      return;
    }

    /* answers.push(answer.value) → Adds the selected answer’s value to the answers array. */
    answers.push(answer.value);
  }
  /* At the end of the loop, answers contains all the selected characters for the 10 questions. */



  // Count frequency of each character
  const frequency = {};/* Creates an empty object to store counts of each character. */
  answers.forEach((answer) => {/* Loops through all answers. */
    frequency[answer] = (frequency[answer] || 0) + 1;
  });/* If the character is already in frequency, increment count. If not, start count at 1. */



  // Find the character with max votes

  /* let is used to declare a variable — a place to store data (like numbers, text, or anything else). */

  let maxCharacter = null;/* Stores the character with the highest votes. */
  let maxCount = 0;/* Stores how many votes that character got */
  for (const character in frequency) {/* Loops through all characters in frequency. */
    if (frequency[character] > maxCount) {
      maxCount = frequency[character];
      maxCharacter = character;
    }
  }
  /* After this loop, maxCharacter is the quiz result. */



  // Save result and redirect

  /* localStorage is a web browser feature that allows you to store data on the user’s computer for that website.
Data stored in localStorage stays even if you close the browser.
 */
  localStorage.setItem("friendsCharacter", maxCharacter);/* Stores the result in the browser.
Can be accessed on the result page (friends_result.html). */
  window.location.href = "friends_result.html";/* Redirects the user to the Friends result page. */
}


/* If 2 characters frequency is same then the one which will come 1st in the frequency will be choosen because the condition is frequency[character] > maxCount there is nothing for same frequency so it will ignore if same frequency is there. */
