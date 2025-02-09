function checkLove() {
    const correctName = "Kiv";
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("message");
    const container = document.getElementById("container");
    const questionElement = document.querySelector("p");
    const inputElement = document.getElementById("nameInput");
    const buttonElement = document.querySelector("button");

    if (name === correctName) {
        messageElement.textContent = "Oh really, " + correctName;
        messageElement.style.color = "green";
        container.innerHTML = `
            <p>Your date is so handsome asf!!!.</p>
            <img src="cute.gif" alt="Love GIF">
        `;
        questionElement.style.display = "none";
        inputElement.style.display = "none";
        buttonElement.style.display = "none";
    } else {
        messageElement.textContent = "Error: That person is ugly!";
        messageElement.style.color = "red";
        container.innerHTML = `
            <button onclick="tryAgain()">Try Again</button>
        `;
    }
}

function tryAgain() {
    const messageElement = document.getElementById("message");
    const container = document.getElementById("container");
    const questionElement = document.querySelector("p");
    const inputElement = document.getElementById("nameInput");
    const buttonElement = document.querySelector("button");

    messageElement.textContent = "";
    container.innerHTML = "";
    questionElement.style.display = "block";
    inputElement.style.display = "block";
    buttonElement.style.display = "block";
}