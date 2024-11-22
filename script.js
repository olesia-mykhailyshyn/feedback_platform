document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const course = form.course.value;
    const difficulty = form.difficulty.value;
    const comfort = form.comfort.value;
    const selfLearning = form.selfLearning.value;
    const improvements = form.improvements.value || "None";
    const positiveExperience = form.positiveExperience.value || "None";
    const memorableInstructor = form.memorableInstructor.value || "None";
    const comment = form.comment.value || "None";

    const feedbackList = document.getElementById("feedbackList");

    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-entry");
    feedbackEntry.innerHTML = `
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Difficulty:</strong> ${difficulty}</p>
        <p><strong>Comfort:</strong> ${comfort}</p>
        <p><strong>Self-Learning Time:</strong> ${selfLearning}</p>
        <p><strong>Improvements:</strong> "${improvements}"</p>
        <p><strong>Positive Experience:</strong> "${positiveExperience}"</p>
        <p><strong>Instructor's Memorable Phrase:</strong> "${memorableInstructor}"</p>
        <p><strong>Additional Comments:</strong> "${comment}"</p>
    `;
    feedbackList.insertBefore(feedbackEntry, feedbackList.firstChild);

    const totalFeedbackElem = document.getElementById("total-feedback");
    const totalFeedbacks = parseInt(totalFeedbackElem.innerText) + 1;
    totalFeedbackElem.innerText = totalFeedbacks;

    const comfortLevels = { "Very Comfortable": 5, "Comfortable": 4, "Neutral": 3, "Uncomfortable": 2, "Very Uncomfortable": 1 };
    const avgComfortElem = document.getElementById("avg-comfort");
    const currentComfortAvg = parseFloat(avgComfortElem.innerText);
    const newComfortAvg = ((currentComfortAvg * (totalFeedbacks - 1)) + comfortLevels[comfort]) / totalFeedbacks;
    avgComfortElem.innerText = newComfortAvg.toFixed(1);

    form.reset();
    alert("Feedback submitted successfully!");
});