let likeCount = 0;
let dislikeCount = 0;
let totalCount = 0;

const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");
const likePercentage = document.getElementById("likePercentage");
const dislikePercentage = document.getElementById("dislikePercentage");

// Get buttons
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

// Function to reset visual indicators
function resetButtons() {
    likeBtn.classList.remove("selected");
    dislikeBtn.classList.remove("selected");
}

// Function to update and display percentages
function updatePercentages() {
    totalCount = likeCount + dislikeCount;
    let likePercent = ((likeCount / totalCount) * 100).toFixed(2);
    let dislikePercent = ((dislikeCount / totalCount) * 100).toFixed(2);

    // Display percentages
    likePercentage.textContent = `Like: ${likePercent}%`;
    dislikePercentage.textContent = `Dislike: ${dislikePercent}%`;
}

// Like button event handler
likeBtn.addEventListener("click", () => {
    resetButtons();
    likeBtn.classList.add("selected");
    likeCount++;  // Increment like count
    result.textContent = "You liked it! Great choice!";
    updatePercentages();
});

// Dislike button event handler
dislikeBtn.addEventListener("click", () => {
    resetButtons();
    dislikeBtn.classList.add("selected");
    dislikeCount++;  // Increment dislike count
    result.textContent = "You disliked it! Maybe next time.";
    updatePercentages();
});