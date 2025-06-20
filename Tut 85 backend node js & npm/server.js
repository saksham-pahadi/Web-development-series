var slugify = require('slugify')

let a = slugify('some string')
console.log(a)


const b=slugify('some st$$*&%@%#&%','_')
console.log(b)

