# week1-code-challenge
#STUDENT GRADE GENERATOR
This JavaScript code calculates and returns a student's grade based on their score input. The scores are set to different ranges. The code checks and validates that user input falls within the specified acceptable bounds. (is of Number type that doesn't fall below 0 or above than 100.)

#How It Works
The code consists of two main parts: a function definition and a command-line interface (CLI) for user interaction. The function 'studentGradeGenerator' takes in the parameter 'studentScore' which is of type Number and is a placeholder for the actual student score. It returns the grade as a string. The grade is assigned based on the score input.

The Command-Line Interface- the code uses 'readline' to interact with the user via the terminal.
It prompts the user to enter the student's score. It the converts the input to a number, calculates the grade using 'studentGradeGenerator' function, and displays the assigned grade to the console. It validates that the input is a number between 0 and 100.

To use "readline" on Node.js;
Import the readline Module: first, you need to import the readline module. This is done using the Node.js's require function:
const readline = require('readline');

Create Interface: readline provides the createInterface method to create a seamless interaction with input and output streams:
const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input: Specifies the readable stream (usually process.stdin for reading from the command line).
output: Specifies the writable stream (usually process.stdout for writing to the command line).
Prompt User Input: Use the question method to prompt the user for input:
readline.question('Please enter something: ', (answer) => {
    console.log(`You entered: ${answer}`);
    readline.close(); // Close the readline interface after processing so it doesn't keep prompting for an input.
});

The first parameter of question is the prompt message.
The second parameter is a callback function that receives the user's input (answer in this case).

#How to Run
To run this code:

Ensure you have Node.js installed on your system.
Save the code to a file (e.g., studentGrade.js).
Run the code using Node.js:
Follow the prompt to enter the student's score.
The script will output the resulting grade based on the input score.

#SPEED DETECTOR
This code takes in the function 'speedDetector', with the parameter 'driverSpeed' which is of Number type and that represents the speed of the driver in kilometers per hour. It returns a string based on the set of conditions stated.
It returns;
"Ok" if the driver's speed is within the legal limit (<= 70 km/h).
"License suspended" if the driver has accumulated more than 12 demerit points.
A string indicating how many demerit points the driver has earned if they are speeding- 1 demerit point is earned for every 5kms/hr above the maximum speed allowed.
 
#How to Run
To use this code:

Ensure you have Node.js installed on your system.
Save the code to a file (e.g., speedDetector.js).
Run the code using Node.js.
The code will calculate and display the corresponding message based on the input speed provided.

#SALARY CALCULATOR

This script computes an individual's net salary based on their basic salary, benefits and various deductions such as NHIF, NSSF and PAYE (pay as you earn)

#Functions to calculate deductions
1. calculatePAYE(monthlyTaxablePay): Calculates the PAYE (Pay As You Earn) tax based on the monthly taxable income (monthlyTaxablePay).
2. calculateNHIF(grossPay): Calculates NHIF (National Health Insurance Fund) deductions based on the gross pay (grossPay).
3. calculateNSSF(grossPay): Calculates NSSF (National Social Security Fund) deductions for both the employee and employer based on the gross pay (grossPay). Calculated as a specified percentage (6%) of the gross pay.

#Function to calculate net salary
1. calculateNetSalary(basicSalary, benefits): Computes the gross salary, deductions (PAYE, NHIF, NSSF), and net salary based on provided basicSalary and benefits.
Calculates grossSalary by adding basicSalary and benefits.
Calls calculatePAYE, calculateNHIF, and calculateNSSF to compute deductions.
 

#How to Use

1. Set Up
- Ensure Node.js is installed on your machine. You will need it to run the code.

2. How to Run the Code
- Clone the repository to your local machine.
- Navigate to the directory containing the code.
- Open a terminal (code .) and run "node salaryCalculator.js" to execute the code.

#Your Input
-Modify the values of "basicSalary" and "benefits" in the "calculateNetSalary" function call to simulate different scenarios.

#Output
The program should display the following;
-Gross salary: Total earnings before deductions
- PAYE (Income Tax): Tax deducted from salary
- NHIF Deductions: 
- NSSF Deductions:
- Net salary: Final take-home pay after all deductions.





