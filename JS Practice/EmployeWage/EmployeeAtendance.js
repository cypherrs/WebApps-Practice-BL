function EmployeeAtendance(){
    const attendanceValue = Math.random() > 0.5;
    console.log(attendanceValue)
    if (attendanceValue){
         return "Employee is Absent";
     }else{
        return "Enployee is Present";
    }
}

console.log(EmployeeAtendance());