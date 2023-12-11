function validateUsr(username){
    let regexp = /^[0-9a-z_]{4,16}$/;
    return (regexp.test(username))
}

console.log(validateUsr("Hello"))