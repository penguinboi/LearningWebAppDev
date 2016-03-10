var exercise1 = function(nums) {
    var sum = 0;
    nums.forEach(function(value) {
        sum = sum + value;
    });
    return sum / (nums.length);
}
$("#exercise1").append(exercise1([1, 2, 3, 4, 5, 6]));

var exercise2 = function(nums) {
    var largest = nums[0];
    nums.forEach(function(value) {
        if (value > largest) {
            largest = value;
        }
    });
    return largest;
}
$("#exercise2").append(exercise2([1, 2, 3, 4, 5, 6]));


var exercise3 = function(nums) {
    var evenExists = false;
    nums.forEach(function(value) {
        if (value % 2 == 0) {
            evenExists = true;
        }
    });
    return evenExists;
}
$("#exercise3").append(exercise3([1, 3, 5, 7, 9, 11]).toString());

var exercise4 = function(nums) {
    var noOdds = true;
    nums.forEach(function(value) {
        if (value % 2 != 0) {
            noOdds = false;
        }
    });
    return noOdds;
}
$("#exercise4").append(exercise4([2, 4, 6, 8, 10, 12]).toString());


var arrayContains = function(strArr, target) {
    var found = false;
    strArr.forEach(function(temp) {
        if (target == temp) {
            found = true;
        }
    });
    return found;
}
$("#exercise5").append(arrayContains(["hello", "world"], "hello").toString());

var arrayContainsTwo = function(strArr, target) {
    var found = 0;
    strArr.forEach(function(temp) {
        if (target == temp) {
            found = found + 1;
        }
    });
    if (found > 1) {
        return true;
    } else {
        return false;
    }
}
$("#exercise6A").append(arrayContainsTwo(["a", "b", "a", "c"], "a").toString());

var arrayContainsThree = function(strArr, target) {
    var found = 0;
    strArr.forEach(function(temp) {
        if (target == temp) {
            found = found + 1;
        }
    });
    if (found > 2) {
        return true;
    } else {
        return false;
    }
}
$("#exercise6B").append(arrayContainsThree(["a", "b", "a", "c"], "a").toString());

var arrayContainsNTimes = function(strArr, target, num) {
    var found = 0;
    strArr.forEach(function(temp) {
        if (target == temp) {
            found = found + 1;
        }
    });
    if (found >= num) {
        return true;
    } else {
        return false;
    }
}
$("#exercise6C").append(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 3).toString());

$("#exercise2U").append(_.max([1, 2, 3, 4, 5, 6]));
$("#exercise3U").append(_.some([1, 3, 5, 7, 9, 11],function(num){ return num % 2 == 0; }));
$("#exercise4U").append(_.every([2, 4, 6, 8, 10, 12],function(num){ return num % 2 == 0; }));