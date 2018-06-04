//Function for Calculating Tax
 function getTax(annualSalary){
    // const grossIncome= annualSalary/12;
    let tax = 0;
    if (annualSalary > 0 && annualSalary <= 18200){
      // tax = grossIncome * 0.19;
    }else if(annualSalary>=18201 && annualSalary <= 37000){
      tax = (annualSalary - 18200) * 0.19
    }else if(annualSalary>=37001 && annualSalary <= 87000){
      tax = 3572 + (annualSalary - 37000) * 0.325
    }else if(annualSalary>=87001 && annualSalary <= 180000){
      tax = 19822 + (annualSalary - 87000) * 0.37
    }else if(annualSalary>=180001){
      tax = 54232 + (annualSalary - 180000) * 0.45
    }

    console.log(tax,annualSalary);
    return Math.round(tax/12);
 }

 export default getTax;
