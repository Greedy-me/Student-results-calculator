// Select all score input fields using querySelectorAll
const scoreInputs = document.querySelectorAll(".score-input");

// Function to calculate total and grade for a single student row
function calculateRow(row) {
  // Get the input values from the current row using querySelector
  const ca1Input = row.querySelector(".ca1");
  const ca2Input = row.querySelector(".ca2");
  const ca3Input = row.querySelector(".ca3");
  const examInput = row.querySelector(".exam");

  // Convert values to numbers (empty fields become 0)
  const ca1 = Number(ca1Input.value) || 0;
  const ca2 = Number(ca2Input.value) || 0;
  const ca3 = Number(ca3Input.value) || 0;
  const exam = Number(examInput.value) || 0;

  // Calculate total
  const total = ca1 + ca2 + ca3 + exam;

  // Update the Total cell (DOM manipulation)
  const totalCell = row.querySelector(".total");
  totalCell.textContent = total;

  // Determine grade using if / else if / else
  let grade = "-";
  if (total >= 70) {
    grade = "A";
  } else if (total >= 60) {
    grade = "B";
  } else if (total >= 50) {
    grade = "C";
  } else if (total >= 45) {
    grade = "D";
  } else if (total >= 40) {
    grade = "E";
  } else if (total > 0) {
    grade = "F";
  } else {
    grade = "-";
  }

  // Update the Grade cell (DOM manipulation)
  const gradeCell = row.querySelector(".grade");
  gradeCell.textContent = grade;

  // Remove previous grade color classes and add the new one
  gradeCell.className = "grade";
  if (grade !== "-") {
    gradeCell.classList.add(grade);
  }
}

// Add event listener for the 'input' event on every score field
scoreInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    // Find the parent row of the input that changed
    const row = input.closest("tr");
    // Recalculate total and grade for that student
    calculateRow(row);
  });
});
