// Problem One
function cubeNumber(number) {
    var input = number;
    var type = typeof (input);
    if (type == 'number') {
        if (input > 0) {
            var result = number ** 3;
            return result;
        } else {
            var result = 'Only positive numbers or bigger than 0 is allowed';
            return result;
        }

    } else {
        var result = 'Only numbers allowed, please input a valid data';
        return result;
    }
}


// Proble two


