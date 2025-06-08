function getUserInfo(): [string, number] {
    return ["Rupesh", 22];
}

const [username, userAge] = getUserInfo();

console.log(username);
console.log(userAge);
