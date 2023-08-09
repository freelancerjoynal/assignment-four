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

        if (string1.match(string2)) {
            return true;
        } else {
            return false;
        }


    } else {
        return 'Only texts are allowed, please input a valid data';
    }

}

// result = matchFinder('John Doe', 'Doe');
// console.log(result);


// Problem Three

function sortMaker(arr) {
    var first = arr[0];
    var second = arr[1];

    if (first && second > 0) {
        if (first == second) {
            return 'equal';
        } else {
            return arr.sort((a, b) => b - a);
        }
    } else {
        return 'invalid';
    }

}
// result = sortMaker([3,0]);
// console.log(result);

// problem 4
function findAddress(obj) {
    var street = obj.street || "__";
    var house = obj.house || "__";
    var society = obj.society || "__";
    result = street + "," + house + "," + society + ",";
    return result;
}
// var result = findAddress({ street:10, house: "15A", society: "Earth Perfect" });
// console.log(result);