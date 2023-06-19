function calculateNetSalary() {
    // Get input values
    const basicSalaryInput = document.getElementById('basicSalary');
    const benefitsInput = document.getElementById('benefits');
  
    const basicSalary = Number(basicSalaryInput.value);
    const benefits = Number(benefitsInput.value);
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate tax (PAYE)
    let tax = 0;
  
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      tax = grossSalary * 0.25;
    } else {
      tax = grossSalary * 0.3;
    }
  
    // Calculate NHIF deductions
    let nhifDeductions = 0;
  
    if (grossSalary <= 5999) {
      nhifDeductions = 150;
    } else if (grossSalary <= 7999) {
      nhifDeductions = 300;
    } else if (grossSalary <= 11999) {
      nhifDeductions = 400;
    } else if (grossSalary <= 14999) {
      nhifDeductions = 500;
    } else if (grossSalary <= 19999) {
      nhifDeductions = 600;
    } else if (grossSalary <= 24999) {
      nhifDeductions = 750;
    } else if (grossSalary <= 29999) {
      nhifDeductions = 850;
    } else if (grossSalary <= 34999) {
      nhifDeductions = 900;
    } else if (grossSalary <= 39999) {
      nhifDeductions = 950;
    } else if (grossSalary <= 44999) {
      nhifDeductions = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeductions = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeductions = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeductions = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeductions = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeductions = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeductions = 1600;
    } else {
      nhifDeductions = 1700;
    }
  
    // Calculate NSSF deductions
    let nssfDeductions = 0;
  
    if (grossSalary <= 6000) {
      nssfDeductions = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
      nssfDeductions = grossSalary * 0.06;
    }
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
    // Display the results
    document.getElementById('grossSalary').textContent = `Gross Salary: ${grossSalary}`;
    document.getElementById('tax').textContent = `Tax: ${tax}`;
    document.getElementById('nhifDeductions').textContent = `NHIF Deductions: ${nhifDeductions}`;
    document.getElementById('nssfDeductions').textContent = `N
}