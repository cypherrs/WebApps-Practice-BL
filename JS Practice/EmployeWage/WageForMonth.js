function DailyWageCalculator(EmployeeHours){
    const WagePerHour = 20;
    const partTime = 1;
    const fullTime = 2;
    let numberOfHours = 0;
    switch (EmployeeHours) {
        case partTime:
            numberOfHours = 4;

            break;

        case fullTime:
            numberOfHours = 8;

            break;
        default:

            numberOfHours = 0;
    }
    let totalWage = WagePerHour * numberOfHours;
    return totalWage;
}

let totalWageHrs= 0 ;
 const workingDays = 20;

 for(let day =0 ; day < workingDays ; day++){
     let empCheck = Math.floor(Math.random() * 3);
     totalWageHrs += DailyWageCalculator(empCheck);
 }
 console.log("The total wage for the Employee in this  month : $"+ totalWageHrs);