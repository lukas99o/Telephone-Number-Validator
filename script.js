const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");

checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
    } else {
        numberValidator();
    }
})

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        if (userInput.value === "") {
            alert("Please provide a phone number");
        } else {
            numberValidator();
        }
    }
})

const numberValidator = () => {
    const numberRegex = /^1?\s*(?:[.-]\s*)?(\(\d{3}\)|\d{3})\s*(?:[.-]\s*)?\d{3}\s*(?:[.-]\s*)?\d{4}$/;
    const result = document.createElement("p");
    result.className = 'results-text';

    if (numberRegex.test(userInput.value)) {
        result.innerHTML = `Valid US number: ${userInput.value}`;
        result.style.color = 'green'; 
    } else {
        result.innerHTML = `Invalid US number: ${userInput.value}`;
        result.style.color = 'red';
    }
    resultDiv.appendChild(result);
    resultDiv.classList.remove('hidden');

    userInput.value = "";
}

clearBtn.addEventListener("click", () => {
    while(resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    resultDiv.classList.add('hidden');
})