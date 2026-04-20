document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let score = 0;

    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1 === "license") score++;

    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") score++;

    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") score++;

    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "b") score++;

    let q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(x => x.value);
    if (q5.includes("a") && q5.includes("c") && q5.length === 2) score++;

    let result = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML =
        "<h3>" + result + "</h3><p>Score: " + score + "/5</p>";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("results").innerHTML = "";
});
