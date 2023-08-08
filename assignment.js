// Problem One
function cubeNumber(number) {
    var input = number;
    var type = typeof (input);
    if (type == 'number') {
        if (input > 0) {
            var qube = number ** 3;
            return qube;
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
function matchFinder(string1, string2) {
    if (typeof (string1) == 'string' && typeof (string2) == 'string') {

        if(string1.match(string2)){
            return true;
        }else{
            return false;
        }


    } else {
        return 'Only texts are allowed, please input a valid data';
    }

}

// result = matchFinder('John Doe', 'Doe');
// console.log(result);


