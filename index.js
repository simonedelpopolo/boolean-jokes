import { boolean_jokes__, map__, true_false__ } from './lib/exporter.js'

/**
 * Given an object it will map the property name to the corresponding boolean value set.
 * It accepts only Object, and it will check if any of the value set for the property is a boolean and not any other type.
 *
 * @param {{[reference:string]:boolean}} logic - .
 * @param {string | number} against -  The value to be checked against the logic of the given object.
 * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
 */
export async function map( logic, against ){
    return map__( logic, against )
}

/**
 * Converts only the strings "true" and "false" to boolean respectively.
 *
 * @param {Buffer | string} string - The given string argument.
 * @returns {Promise|PromiseFulfilledResult<boolean>|PromiseRejectedResult<string>}
 */
export async function true_false( string ) {
    return true_false__( string )
}

Object.freeze( boolean_jokes__ )
