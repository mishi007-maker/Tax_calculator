document.getElementById("tax_form").addEventListener("submit", function(event) {

    event.preventDefault();

    // INPUTS
    let basic_salary = Number(document.getElementById("basic_salary").value);
    let benefits = Number(document.getElementById("benefits").value);

    // GROSS SALARY
    let grossSalary = basic_salary + benefits;

    //SHIF
    let shif = 0;

    if (grossSalary <= 5999) {
        shif = 150;
    } else if (grossSalary <= 7999) {
        shif = 300;
    } else if (grossSalary <= 11999) {
        shif = 400;
    } else if (grossSalary <= 14999) {
        shif = 500;
    } else if (grossSalary <= 19999) {
        shif = 600;
    } else if (grossSalary <= 24999) {
        shif = 750;
    } else if (grossSalary <= 29999) {
        shif = 850;
    } else if (grossSalary <= 34999) {
        shif = 900;
    } else if (grossSalary <= 39999) {
        shif = 950;
    } else if (grossSalary <= 44999) {
        shif = 1000;
    } else if (grossSalary <= 49999) {
        shif = 1100;
    } else if (grossSalary <= 59999) {
        shif = 1200;
    } else if (grossSalary <= 69999) {
        shif = 1300;
    } else if (grossSalary <= 79999) {
        shif = 1400;
    } else if (grossSalary <= 89999) {
        shif = 1500;
    } else if (grossSalary <= 99999) {
        shif = 1600;
    } else {
        shif = 1700;
    }

    // DISPLAY NHIF + GROSS
    document.getElementById("gross_salary").innerHTML = grossSalary;
    document.getElementById("shif").innerHTML = shif;

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
    let taxableIncome = grossSalary - (nssf + nhdf + shif);

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
    let net_salary = grossSalary - (shif + nhdf + nssf + payee);

    document.getElementById("net_salary").innerHTML = net_salary;

});