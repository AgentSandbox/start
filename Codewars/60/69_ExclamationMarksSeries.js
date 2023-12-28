function balance(left, right){
    let resLeft = math(left)
    let resRight = math(right)
    function math(perem){
        let result = 0;
        for (let i = 0; i < perem.length; i++) {
            if(perem[i]==="!"){result += 2}
            else if (perem[i]==="?"){result += 3}
        }
        return result
    }
    return resRight>resLeft?"Right":resRight<resLeft?"Left":"Balance"
}

console.log(balance("!!???!????", "??!!?!!!!!!!"))
