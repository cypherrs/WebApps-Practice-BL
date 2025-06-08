type StringOrNumber = string | number;

function logValue(value: StringOrNumber): void {
    console.log(value);
}

logValue(324);
logValue("424");