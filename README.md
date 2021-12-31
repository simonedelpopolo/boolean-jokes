# boolean-jokes

> ℹ️ Some useful functions to work with boolean.

> ℹ️ Javascript ESM module.

___

## Index of Contents

- [Installation](#installation)

- [Functions &amp; Examples](#functions-amp-examples)

  - [true_false(Buffer:string):boolean](#true_falsebufferstringboolean)
  - [map(object, string|number):boolean](#mapobject-stringnumberboolean)

___

### Installation

```shell
npm install boolean-jokes
```

___

### Functions &amp; Examples

- #### true_false(Buffer:string):boolean

Converts only the strings "true" and "false" to boolean respectively.

```javascript
// only string true or false are parsed

import { true_false } from 'boolean-jokes'

const converted = await bool( 'true' )
console.log( converted )

```
___

- #### map(object, string|number):boolean

Given an object it will map the property name to the corresponding boolean value set.

> ℹ️ It accepts only type object for the `logic` parameter, and it will check if any of the value set for the property is a boolean and not any other type.  
> ℹ️It accepts only type string or number for the `against` parameter

This will return false

```javascript
import { map } from 'boolean-jokes'

/**
 * @type {string}
 */
const against = 'no'

/**
 * @type {{no: boolean, yes: boolean, true: boolean, false: boolean}}
 */
const logic = {
    true: true, 
    false: false, 
    yes: true, 
    no: false
}
const matchBool = await map( logic, against )

console.log( matchBool ) // return 'false'
```

This will reject with:

your `against` value haven't matched any of your `logic` object. given `against`: ok

```javascript
import { map } from 'boolean-jokes'

/**
 * @type {string}
 */
const against = 'ok'

/**
 * @type {{no: boolean, yes: boolean, true: boolean, false: boolean}}
 */
const logic = {
    true: true, 
    false: false, 
    yes: true, 
    no: false
}
const matchBool = await map( logic, against )

console.log( matchBool ) // reject -> your `against` value haven't matched any of your `logic` object. given `against`: ok
```
