const flashcards = [
    { question: "What is the smallest unit of an element?", answer: "Atom" },
    { question: "True or False: Molecules of elements are always made of different atoms.", answer: "False" }
];

let flashcardIndex = 0;

function showAnswer() {
    document.getElementById("answer").classList.toggle("hidden");
}

function nextFlashcard() {
    flashcardIndex = (flashcardIndex + 1) % flashcards.length;
    updateFlashcard();
}

function prevFlashcard() {
    flashcardIndex = (flashcardIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
}

function updateFlashcard() {
    document.getElementById("question").textContent = flashcards[flashcardIndex].question;
    document.getElementById("answer").textContent = "Answer: " + flashcards[flashcardIndex].answer;
    document.getElementById("answer").classList.add("hidden");
}

window.onload = updateFlashcard;
