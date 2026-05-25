document.getElementById("tax_form").addEventListener("submit", function(event) {

    event.preventDefault();

    // INPUTS
    let basic_salary = Number(document.getElementById("basic_salary").value);
    let benefits = Number(document.getElementById("benefits").value);

    // GROSS SALARY
    let grossSalary = basic_salary + benefits;

    // NHIF
    let nhif = 0;

    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // DISPLAY NHIF + GROSS
    document.getElementById("gross_salary").innerHTML = grossSalary;
    document.getElementById("nhif").innerHTML = nhif;

    // NSSF
    let nssf;

    if (grossSalary > 18000) {
        nssf = 18000 * 0.06;
    } else {
        nssf = grossSalary * 0.06;
    }

    document.getElementById("nssf").innerHTML = nssf;

    // NHDF
    let nhdf = grossSalary * 0.015;

    document.getElementById("nhdf").innerHTML = nhdf;

    // TAXABLE INCOME
    let taxableIncome = grossSalary - (nssf + nhdf + nhif);

    document.getElementById("taxable_income").innerHTML = taxableIncome;

    // PAYEE
    let payee = 0;
    let personalRelief = 2400;

    if (taxableIncome <= 24000) {

        payee = taxableIncome * 0.10;

    } else if (taxableIncome <= 32333) {

        payee =
            (24000 * 0.10) +
            ((taxableIncome - 24000) * 0.25);

    } else if (taxableIncome <= 500000) {

        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            ((taxableIncome - 32333) * 0.30);

    } else if (taxableIncome <= 800000) {

        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            ((taxableIncome - 500000) * 0.325);

    } else {

        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            (300000 * 0.325) +
            ((taxableIncome - 800000) * 0.35);
    }

    // PERSONAL RELIEF
    payee = payee - personalRelief;

    if (payee < 0) {
        payee = 0;
    }

    document.getElementById("paye").innerHTML = payee;

    // NET SALARY
    let net_salary = grossSalary - (nhif + nhdf + nssf + payee);

    document.getElementById("net_salary").innerHTML = net_salary;

});