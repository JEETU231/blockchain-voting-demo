let votes = {
    "John Doe": 0,
    "Jane Smith": 0,
    "Rahul Verma": 0
};

function submitVote() {
    const select = document.getElementById("voteCandidate");
    const candidate = select.value;

    if (!candidate) {
        alert("Please select a candidate.");
        return;
    }

    votes[candidate]++;
    alert("Vote recorded for " + candidate);
}

function updateResults() {
    if (document.getElementById("resJohn")) {
        document.getElementById("resJohn").innerText = votes["John Doe"];
        document.getElementById("resJane").innerText = votes["Jane Smith"];
        document.getElementById("resRahul").innerText = votes["Rahul Verma"];
    }
}

window.onload = updateResults;