let checkHours = Math.floor(Math.random() * 3);

function DailyWageCalculator(EmployeeHours){
    const WagePerHour = 20;
    const partTime = 1;
    const fullTime = 2;
       let numberOfHours = 0;
    switch (EmployeeHours) {
        case partTime:
            numberOfHours = 4;
            console.log("Part Time");
            break;

            case fullTime:
                numberOfHours = 8;
                console.log("Full Time");
                break;
        default:
            console.log("no work done (Absent)...")
            numberOfHours = 0;
    }
    let totalWage = WagePerHour * numberOfHours;
    return "the Employee total wages are: $"+ totalWage;
}
console.log(DailyWageCalculator(checkHours));

