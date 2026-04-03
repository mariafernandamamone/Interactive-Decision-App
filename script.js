function authentication() {
    const username = "Fernanda";
    const password = "123456";

    const userName = prompt("Enter your username:");
    const userPassword = prompt("Enter your password:");

    if (userName === username && userPassword === password) {
        alert(`Welcome ${username}!`);
    } else {
        alert("Username and/or password are incorrect.");
    }
}

function maintenance() {
    const hasOil = confirm("Does the car have oil?");
    const hasWater = confirm("Does the car have water?");
    const hasProperTires = confirm("Are the tires properly inflated?");

    if (hasOil && hasWater && hasProperTires) {
        alert("No maintenance required");
    } else {
        alert("Maintenance required");
    }
}

function bloodDonation() {
    const hasTattoo = confirm("Have you gotten a tattoo recently?");
    const hasHepatitis = confirm("Do you have or have you had hepatitis?");
    const hasAnemia = confirm("Do you have anemia?");

    if (hasTattoo || hasHepatitis || hasAnemia) {
        alert("You can't donate blood.");
    } else {
        alert("You can donate blood.");
    }
}

function quiz() {
    const q1 = confirm("Is the Earth round?");
    const q2 = confirm("Is JavaScript a programming language?");
    const q3 = confirm("Is 2 + 2 equal to 5?");

    if (q1 && q2 && !q3) {
        alert("Congratulations! You answered all questions correctly.");
    } else {
        alert("You lost the game.");
    }
}

function rating() {
    const rating = Number(prompt("How much do you like music? Rate from 1 to 10:"));

    if (rating >= 1 && rating <= 4) {
        alert("You don't like music very much");
    } else if (rating >= 5 && rating <= 7) {
        alert("You like music");
    } else if (rating >= 8 && rating <= 10) {
        alert("You like music very much");
    } else {
        alert("Invalid input. Please enter a number between 1 and 10.");
    }
}

const option = prompt(
`Choose an option:
1. Authentication
2. Car Maintenance
3. Blood Donation
4. Quiz
5. Rating`
);

if (option === "1") {
    authentication();
} else if (option === "2") {
    maintenance();
} else if (option === "3") {
    bloodDonation();
} else if (option === "4") {
    quiz();
} else if (option === "5") {
    rating();
} else {
    alert("Invalid option");
}
