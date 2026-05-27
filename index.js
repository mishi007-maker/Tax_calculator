document.getElementById("tax_form").addEventListener("submit", function(event) {

    event.preventDefault()

    let basic_salary = Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)

    let grossSalary = calculateGross(basic_salary, benefits)

    let shif = calculateSHIF(grossSalary)
    let nssf = calculateNSSF(grossSalary)
    let nhdf = calculateNHDF(grossSalary)

    let taxableIncome = calculateTaxable(grossSalary, shif, nssf, nhdf)

    let payee = calculatePAYEE(taxableIncome)

    let netSalary = calculateNet(grossSalary, shif, nssf, nhdf, payee)

    document.getElementById("gross_salary").innerHTML = grossSalary.toFixed(2)
    document.getElementById("shif").innerHTML = shif.toFixed(2)
    document.getElementById("nssf").innerHTML = nssf.toFixed(2)
    document.getElementById("nhdf").innerHTML = nhdf.toFixed(2)
    document.getElementById("taxable_income").innerHTML = taxableIncome.toFixed(2)
    document.getElementById("paye").innerHTML = payee.toFixed(2)
    document.getElementById("net_salary").innerHTML = netSalary.toFixed(2)

})

function calculateGross(basic, benefits) {
    return basic + benefits
}

function calculateSHIF(gross) {

    if (gross <= 5999) return 150
    if (gross <= 7999) return 300
    if (gross <= 11999) return 400
    if (gross <= 14999) return 500
    if (gross <= 19999) return 600
    if (gross <= 24999) return 750
    if (gross <= 29999) return 850
    if (gross <= 34999) return 900
    if (gross <= 39999) return 950
    if (gross <= 44999) return 1000
    if (gross <= 49999) return 1100
    if (gross <= 59999) return 1200
    if (gross <= 69999) return 1300
    if (gross <= 79999) return 1400
    if (gross <= 89999) return 1500
    if (gross <= 99999) return 1600
    return 1700
}

function calculateNSSF(gross) {

    if (gross > 18000) {
        return 18000 * 0.06
    } else {
        return gross * 0.06
    }
}

function calculateNHDF(gross) {
    return gross * 0.015
}

function calculateTaxable(gross, shif, nssf, nhdf) {
    return gross - (shif + nssf + nhdf)
}

function calculatePAYEE(taxable) {

    let relief = 2400
    let payee = 0

    if (taxable <= 24000) {
        payee = taxable * 0.10

    } else if (taxable <= 32333) {
        payee =
            (24000 * 0.10) +
            ((taxable - 24000) * 0.25)

    } else if (taxable <= 500000) {
        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            ((taxable - 32333) * 0.30)

    } else if (taxable <= 800000) {
        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            ((taxable - 500000) * 0.325)

    } else {
        payee =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            (300000 * 0.325) +
            ((taxable - 800000) * 0.35)
    }

    payee = payee - relief

    if (payee < 0) payee = 0

    return payee
}

function calculateNet(gross, shif, nssf, nhdf, payee) {
    return gross - (shif + nssf + nhdf + payee)
}