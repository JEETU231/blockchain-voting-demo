const votes = {
    Alice: 0,
    Bob: 0,
    Charlie: 0
};

function vote() {
    const candidate = document.getElementById("candidateSelect").value;
    const status = document.getElementById("voteStatus");

    if (!candidate) {
        status.innerText = "Please select a candidate.";
        status.style.color = "red";
        return;
    }

    votes[candidate]++;
    status.innerText = "Vote successfully recorded!";
    status.style.color = "green";
}

function showResults() {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";

    for (let candidate in votes) {
        const li = document.createElement("li");
        li.innerText = `${candidate}: ${votes[candidate]} votes`;
        list.appendChild(li);
    }
}

function scrollToVote() {
    document.getElementById("vote").scrollIntoView({ behavior: "smooth" });
}
