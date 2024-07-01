// gross salary = basic salary + benefits
// And net salary = gross salary - deductions (PAYE, NHIF, NSSF)

function calculatePAYE(monthlyTaxablePay) {

    const personalRelief = 2400;

    if (monthlyTaxablePay < 0 || isNaN(monthlyTaxablePay)) {
        return "Invalid input.";

    } else if (monthlyTaxablePay <= 24000) {
        return monthlyTaxablePay * 10 / 100 - personalRelief;

    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {
        return monthlyTaxablePay * 25 / 100 - personalRelief;

    } else if (monthlyTaxablePay >= 32334 && monthlyTaxablePay <= 500000) {
        return monthlyTaxablePay * 30 / 100 - personalRelief;

    } else if (monthlyTaxablePay >= 500001 && monthlyTaxablePay <= 800000) {
        return monthlyTaxablePay * 32.5 / 100 - personalRelief;

    } else {
        return monthlyTaxablePay * 35 / 100 - personalRelief;

    }

};
const monthlyTaxablePay = 300000;
const paye = calculatePAYE(monthlyTaxablePay);


function calculateNHIF(grossPay) {

    if (grossPay < 0 || (isNaN(grossPay))) {
        return "Invalid input.";

    } else if (grossPay <= 5999) {
        return 150;

    } else if (grossPay >= 6000 && grossPay <= 7999) {
        return 300;

    } else if (grossPay >= 8000 && grossPay <= 11999) {
        return 400;

    } else if (grossPay >= 12000 && grossPay <= 14999) {
        return 500;

    } else if (grossPay >= 15000 && grossPay <= 19999) {
        return 600;

    } else if (grossPay >= 20000 && grossPay <= 24999) {
        return 750;

    } else if (grossPay >= 25000 && grossPay <= 29999) {
        return 850;

    } else if (grossPay >= 30000 && grossPay <= 34999) {
        return 900;

    } else if (grossPay >= 35000 && grossPay <= 39999) {
        return 950;

    } else if (grossPay >= 40000 && grossPay <= 44999) {
        return 1000;

    } else if (grossPay >= 45000 && grossPay <= 49999) {
        return 1100;

    } else if (grossPay >= 50000 && grossPay <= 59999) {
        return 1200;

    } else if (grossPay >= 60000 && grossPay <= 69999) {
        return 1300;

    } else if (grossPay >= 70000 && grossPay <= 79999) {
        return 1400;

    } else if (grossPay >= 80000 && grossPay <= 89999) {
        return 1500;

    } else if (grossPay >= 90000 && grossPay <= 99999) {
        return 1600;

    } else {
        return 1700;
    }

};

function calculateNSSF(grossPay) {
    // rate is 6% of gross pay
    const nssfEmployeeRate = 6 / 100;
    const nssfEmployerRate = 6 / 100;

    if (grossPay < 0 || isNaN(grossPay)) {
        return "Invalid input.";
    }
    const employeeContribution = grossPay * nssfEmployeeRate;
    const employerContribution = grossPay * nssfEmployerRate;
    return {
        employeeContribution,
        employerContribution
    };
};

function calculateNetSalary(basicSalary, benefits) {

    const grossSalary = basicSalary + benefits;  // computes gross salary as a result of adding the base salary to all the benefits given
    const paye = calculatePAYE(monthlyTaxablePay);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - paye - nhif - nssf.employeeContribution;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
};
// trying it out with examples
const basicSalary = 300000;
const benefits = 20000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Income Tax):", salaryDetails.paye);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions (Employee):", salaryDetails.nssf.employeeContribution);
console.log("Net Salary:", salaryDetails.netSalary);

