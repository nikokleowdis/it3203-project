document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let score = 0;
    let total = 5;
    let results = "";

    let q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === "license") {
        score++;
        results += "<p class='correct'>Question 1: Correct (1/1) | Correct answer: license</p>";
    } else {
        results += "<p class='incorrect'>Question 1: Incorrect (0/1) | Correct answer: license</p>";
    }

    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        results += "<p class='correct'>Question 2: Correct (1/1) | Correct answer: Microsoft</p>";
    } else {
        results += "<p class='incorrect'>Question 2: Incorrect (0/1) | Correct answer: Microsoft</p>";
    }

    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score++;
        results += "<p class='correct'>Question 3: Correct (1/1) | Correct answer: Permission to use</p>";
    } else {
        results += "<p class='incorrect'>Question 3: Incorrect (0/1) | Correct answer: Permission to use</p>";
    }

    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "b") {
        score++;
        results += "<p class='correct'>Question 4: Correct (1/1) | Correct answer: Owned by a company</p>";
    } else {
        results += "<p class='incorrect'>Question 4: Incorrect (0/1) | Correct answer: Owned by a company</p>";
    }

    let q5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(x => x.value).sort();
    let correctQ5 = ["a", "c"];
    if (JSON.stringify(q5) === JSON.stringify(correctQ5)) {
        score++;
        results += "<p class='correct'>Question 5: Correct (1/1) | Correct answers: Follow rules, Respect ownership</p>";
    } else {
        results += "<p class='incorrect'>Question 5: Incorrect (0/1) | Correct answers: Follow rules, Respect ownership</p>";
    }

    let overall = score >= 3 ? "PASS" : "FAIL";
    let overallClass = score >= 3 ? "correct" : "incorrect";

    document.getElementById("results").innerHTML =
        "<h3 class='" + overallClass + "'>Overall Result: " + overall + "</h3>" +
        "<p><strong>Total Score: " + score + "/" + total + "</strong></p>" +
        results;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("results").innerHTML = "";
});
