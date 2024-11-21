document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const course = form.course.value;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;

    const feedbackList = document.getElementById("feedbackList");

    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-entry");
    feedbackEntry.innerHTML = `
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Rating:</strong> ${"⭐".repeat(rating)}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;
    feedbackList.appendChild(feedbackEntry);
    
    const totalFeedbackElem = document.getElementById("total-feedback");
    const avgRatingElem = document.getElementById("avg-rating");
    const totalFeedbacks = parseInt(totalFeedbackElem.innerText) + 1;
    totalFeedbackElem.innerText = totalFeedbacks;

    const avgRating = ((parseFloat(avgRatingElem.innerText) * (totalFeedbacks - 1)) + rating) / totalFeedbacks;
    avgRatingElem.innerText = avgRating.toFixed(1);

    form.reset();
    alert("Feedback submitted successfully!");
});
