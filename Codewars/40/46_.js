excludingVatPrice = (price) => (price !== null) ? Number((price / 115 * 100).toFixed(2)) : -1

console.log(excludingVatPrice(null))