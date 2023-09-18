const lodash = require("lodash")

let message = "Hello World"
console.log(message)


let name = "patrick"
console.log(name)

let revisedName = lodash.upperFirst(name)
console.log("new name: ", revisedName)