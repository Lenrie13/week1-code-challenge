// Calculates grades of students 
// Uses parameter of type number
// returns a string
function studentGradeGenerator(studentScore) {

    if (studentScore < 0 || studentScore > 100 || isNaN(studentScore)) {
        return "Invalid input. Please enter a number between 0 and 100";

    } else if (studentScore > 79) {
        return "A";

    } else if (studentScore >= 60 && studentScore <= 79) {
        return "B";

    } else if (studentScore >= 49 && studentScore <= 59) {
        return "C";

    } else if (studentScore >= 40 && studentScore <= 49) {
        return "D";

    } else {
        return "E";
    }
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter student\'s score:', studentScore => {
    const grade = studentGradeGenerator(Number(studentScore))

    console.log("The student\'s grade is:", grade)

    readline.close();
});

