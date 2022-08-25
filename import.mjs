import person from './export.mjs'
import { baseData, clean } from './export.mjs'

// since person was the default export we can actually name it whatever we want when we import
// baseData and clean are named exports so we refer to them in the curly braces
// if multiply named imports can you use import * as bundled from './file' syntax

console.log(person)
console.log(baseData)
console.log(clean())