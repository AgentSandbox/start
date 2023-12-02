const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/.test(greetings)

console.log(validateHello("ahoj"))
