function isTruthy(value) {
    if (value) {
        return true;
    }
    return false;
}

const arrays = [true, true, true, false];

const truthyCount = arrays.filter(num => isTruthy(num)).length;
console.log(truthyCount);