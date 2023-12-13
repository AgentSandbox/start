String.prototype.digit = function() {
    let regex = /^[0-9]$/g
    return regex.test(this)
};