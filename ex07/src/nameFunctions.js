function firstName(firstName){
    return firstName.toUpperCase();
}
function lastName(lastName){
    return lastName.toLowerCase();
}

exports.firstName = firstName("Jhon");
exports.lastName = lastName("Doe");