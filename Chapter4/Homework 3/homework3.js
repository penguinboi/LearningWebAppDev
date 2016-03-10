var exercise1 = function(nums) {
    var sum = 0;
    nums.forEach(function(value) {
        sum = sum + value;
    });
    return sum / (nums.length);
}
document.write("exercise1");
document.write("<br>");
document.write(exercise1([1, 2, 3, 4, 5, 6]));
document.write("<br>");

var exercise2 = function(nums) {
    var largest = nums[0];
    nums.forEach(function(value) {
        if (value > largest) {
            largest = value;
        }
    });
    return largest;
}
document.write("exercise2");
document.write("<br>");
document.write(exercise2([1, 2, 3, 4, 5, 6]));
document.write("<br>");

var exercise3 = function(nums) {
    var evenExists = false;
    nums.forEach(function(value) {
        if (value % 2 == 0) {
            evenExists = true;
        }
    });
    return evenExists;
}
document.write("exercise3");
document.write("<br>");
document.write(exercise3([1, 3, 5, 7, 9, 11]));
document.write("<br>");

document.write(exercise3([1, 2, 3, 4, 5, 6]));
document.write("<br>");

var exercise4 = function(nums) {
    var noOdds = true;
    nums.forEach(function(value) {
        if (value % 2 != 0) {
            noOdds = false;
        }
    });
    return noOdds;
}
document.write("exercise4");
document.write("<br>");
document.write(exercise4([2, 4, 6, 8, 10, 12]));
document.write("<br>");

document.write(exercise4([1, 2, 3, 4, 5, 6]));
document.write("<br>");

var arrayContains = function(strArr, target) {
    var found = false;
    strArr.forEach(function(temp) {
        if (target == temp) {
            found = true;
        }
    });
    return found;
}
document.write("arrayContains");
document.write("<br>");
document.write(arrayContains(["hello", "world"], "hello"));
document.write("<br>");
// = > true 
document.write(arrayContains(["hello", "world"], "goodbye"));
document.write("<br>");
// = > false 
document.write(arrayContains(["hello", "world", "goodbye"], "goodbye"));
document.write("<br>");

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

document.write("arrayContainsTwo");
document.write("<br>");
document.write(arrayContainsTwo(["a", "b", "a", "c"], "a"));
document.write("<br>");
// = > true \
document.write(arrayContainsTwo(["a", "b", "a", "c"], "b"));
document.write("<br>");
// = > false 
document.write(arrayContainsTwo(["a", "b", "a", "c", "a"], "a"));
document.write("<br>");
// = > true

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

document.write("arrayContainsThree");
document.write("<br>");
document.write(arrayContainsThree(["a", "b", "a", "c"], "a"));
document.write("<br>");
// = > true \
document.write(arrayContainsThree(["a", "b", "a", "c"], "b"));
document.write("<br>");
// = > false 
document.write(arrayContainsThree(["a", "b", "a", "c", "a"], "a"));
document.write("<br>");
// = > true

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

document.write("arrayContainsNTimes");
document.write("<br>");

document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 3));
document.write("<br>");
// = > true 
document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 2));
document.write("<br>");
// = > true 
document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 4));
document.write("<br>");
// = > false 
document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "b", 2));
document.write("<br>");
// = > false 
document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "b", 1));
document.write("<br>");
// = > true 
document.write(arrayContainsNTimes(["a", "b", "a", "c", "a"], "d", 0));
document.write("<br>");
// = > true

document.write("exercise2 using Underscore.js");
document.write("<br>");
document.write(_.max([1, 2, 3, 4, 5, 6]));
document.write("<br>");

document.write("exercise3 using Underscore.js");
document.write("<br>");
document.write(_.some([1, 3, 5, 7, 9, 11],function(num){ return num % 2 == 0; }));
document.write("<br>");
document.write(_.some([1, 2, 3, 4, 5, 6],function(num){ return num % 2 == 0; }));
document.write("<br>");

document.write("exercise4 using Underscore.js");
document.write("<br>");
document.write(_.every([2, 4, 6, 8, 10, 12],function(num){ return num % 2 == 0; }));
document.write("<br>");
document.write(_.every([1, 2, 3, 4, 5, 6],function(num){ return num % 2 == 0; }));
document.write("<br>");